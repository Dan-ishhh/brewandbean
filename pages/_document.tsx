import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" suppressHydrationWarning>
        <Head>
          <link rel="icon" type="image/png" href="/coffee-cup.png" />
          <link
            href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Lobster&family=Mozilla+Headline:wght@200..700&display=swap"
            rel="stylesheet"
          />
          <style>{`
            html {
              font-family:  "Mozilla Headline", sans-serif;
              font-weight: 400;
              font-style: normal;
            }
          `}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
