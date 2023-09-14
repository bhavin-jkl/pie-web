import AboutUs from "@components/Aboutus";
import WelcomePanel from "@components/HomeComponent/WelcomePanel";
import IndustryServeList from "@components/IndustryServeList";
import ClientReview from "@components/ClientReview";
import OurProjects from "@components/OurProjects";
import React, { Fragment } from "react";
import Blog from "@components/Blog";
import ContactUsPanel from "@components/ContactUsPanel";

export default function Home() {
  return (
    <Fragment>
      <WelcomePanel />
      <AboutUs />
      <IndustryServeList />
      <ClientReview />
      <OurProjects />
      <Blog />
      <ContactUsPanel />
    </Fragment>
  );
}
