// pages/api/download.js
import { Redis } from '@upstash/redis';

// Initialize Upstash Redis client
// Note: In serverless environments, it is recommended to initialize the client outside the handler
// to reuse the connection across invocations.
let redis = null;

if (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) {
  redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN,
  });
} else {
  console.warn('Warning: UPSTASH_REDIS_REST_URL or UPSTASH_REDIS_REST_TOKEN environment variables are missing.');
}

export default async function handler(req, res) {
  // Target redirect GitHub APK release link
  const redirectUrl = process.env.GITHUB_APK_URL || 'https://github.com/username/repo/releases/download/v1.0.0/app.apk';

  // Perform tracking
  if (redis) {
    try {
      // 1. Get current date (UTC) in YYYY-MM-DD format
      const today = new Date().toISOString().split('T')[0];

      // 2. Resolve referrer source
      const referer = req.headers['referer'] || req.headers['referrer'];
      let referrerDomain = 'direct';
      
      if (referer) {
        try {
          const url = new URL(referer);
          referrerDomain = url.hostname;
        } catch (e) {
          // If referer is a simple string instead of a valid URL, sanitize it
          referrerDomain = referer.replace(/https?:\/\//i, '').split('/')[0] || 'unknown';
        }
      }

      // Define analytics keys
      const totalKey = 'downloads:total';
      const dailyKey = `downloads:daily:${today}`;
      const refKey = `downloads:ref:${referrerDomain}`;

      // Execute Redis increments in parallel for speed and reliability
      await Promise.all([
        redis.incr(totalKey),
        redis.incr(dailyKey),
        redis.incr(refKey)
      ]);

      console.log(`Success: Tracked download. Total, Daily (${today}), and Referrer (${referrerDomain}) updated.`);
    } catch (error) {
      // Fail gracefully: Log the error to your console, but DO NOT block the user from getting the APK file!
      console.error('Tracking Error (Upstash Redis):', error);
    }
  }

  // Redirect user to the target GitHub release link
  res.redirect(302, redirectUrl);
}
