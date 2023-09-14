import AboutUs from "@components/Aboutus";
import WelcomePanel from "@components/HomeComponent/WelcomePanel";
import IndustryServeList from "@components/IndustryServeList";
import ClientReview from "@components/ClientReview";
import OurProjects from "@components/OurProjects";
import React, { Fragment } from "react";
import VideoPlayer from "@components/VideoPlayer";
import Blog from "@components/Blog";
import ContactUsPanel from "@components/ContactUsPanel";
import CaseStudies from "@components/CaseStudy";
import Card from "@components/Card";

export default function Home() {
  return (
    <Fragment>
      <WelcomePanel />
      <AboutUs />
      <IndustryServeList />
      <ClientReview />
      <OurProjects />
      <VideoPlayer />
      <Card />
      <CaseStudies />
      {/* <Blog /> */}
      <ContactUsPanel />
    </Fragment>
  );
}
