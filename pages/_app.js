import React, { Fragment, useEffect } from "react";
import AOS from "aos";
// import "../styles/styles.scss";
import "aos/dist/aos.css";
import "../styles/globals.css";
import Layout from "@components/Common/Layout";
import PropTypes from "prop-types";
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <Fragment>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;
