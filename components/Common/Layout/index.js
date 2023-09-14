import React, { Fragment } from "react";
import Container from "@components/Common/Container";
import NavBar from "@components/Navbar";
import Footer from "@components/Footer";
import WhatsAppIcon from "@components/WhatsAppIcon";
import PropTypes from "prop-types";
function Layout({ children }) {
  return (
    <Fragment>
      <Container>
        <NavBar />
        {children}
        <Footer />
        <WhatsAppIcon />
      </Container>
    </Fragment>
  );
}

Layout.propTypes = {
  children: PropTypes.any,
};
export default Layout;
