// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Preconnect to Google Fonts to speed up rendering */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        
        {/* Global SEO / Metadata */}
        <meta name="description" content="Download Quizkaivryn - the ultimate modern quiz and trivia app for Android. Challenge yourself with exciting trivia categories, fast rounds, and clean layouts." />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Quizkaivryn | Download APK" />
        <meta property="og:description" content="Challenge your brain with Quizkaivryn. Direct, secure APK download tracking for Android." />
        <meta property="og:site_name" content="Quizkaivryn" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Quizkaivryn | Download APK" />
        <meta property="twitter:description" content="Challenge your brain with Quizkaivryn. Direct, secure APK download tracking for Android." />

        {/* Device icons & tags */}
        <meta name="theme-color" content="#070913" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
