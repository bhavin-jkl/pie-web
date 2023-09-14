import ClientReview from "@components/ClientReview";
import OurProjects from "@components/OurProjects";
import React, { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <ClientReview />
      <OurProjects />
    </Fragment>
  );
}
