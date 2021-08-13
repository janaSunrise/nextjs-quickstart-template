import SEO from "@bradgarropy/next-seo";
import Layout from "../components/Layout";

import "../styles/globals.scss";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <SEO
        title="Next JS Quickstart Template"
        description="A simple and easy boilerplate for your next NextJS project, to get you started in NO time."
        keywords={["nextjs", "react", "seo", "web development"]}
        icon="/favicon.ico"
        facebook={{}}
        twitter={{
          site: "@JanaSunrise",
          card: "summary",
        }}
      />
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
