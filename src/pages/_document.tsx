import {Head, Html, Main, NextScript} from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        {/* Prevent Google Translate */}
        <meta content="notranslate" name="google" />

        {/* Open Graph Meta Tags */}
        <meta content="Nevin Kapoor Resume" property="og:title" />
        <meta content="A resume website for Nevin Kapoor to showcase his skills and certifications" property="og:description" />
        <meta content="https://www.nevinkapoor.com" property="og:url" />
        <meta content="website" property="og:type" />
        <meta content="Nevin Kapoor Resume" property="og:site_name" />

        {/* Twitter Cards */}
        <meta content="Nevin Kapoor Resume" name="twitter:title" />
        <meta content="A resume website for Nevin Kapoor to showcase his skills and certifications" name="twitter:description" />

      </Head>
      <body className="bg-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
