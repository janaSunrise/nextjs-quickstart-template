import Document, { Html, Head, Main, NextScript } from "next/document";

import Meta from "../components/Meta";

import favicon from '../public/favicon.ico';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
            <link rel="shortcut icon" href={favicon} />
            <Meta title="NextJS Template" description="A simple and easy to use NextJS template!" author="Sunrit Jana"/>
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
