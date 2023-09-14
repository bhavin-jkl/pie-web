import AboutUs from "@components/Aboutus";
import WelcomePanel from "@components/HomeComponent/WelcomePanel";
import IndustryServeList from "@components/IndustryServeList";
import ClientReview from "@components/ClientReview";
import React, { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <WelcomePanel />
      <AboutUs />
      <IndustryServeList/>
      <ClientReview />
    </Fragment>
  );
}
