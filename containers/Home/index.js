import AboutUs from "@components/Aboutus";
import WelcomePanel from "@components/HomeComponent/WelcomePanel";
import IndustryServeList from "@components/IndustryServeList";
import React, { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <WelcomePanel />
      <AboutUs />
      <IndustryServeList/>
    </Fragment>
  );
}
