import React, { Fragment } from "react";
import CountUp from "react-countup";
const OurProjects = () => {
  return (
    <Fragment>
      <div className="my-4 bg-primary7 py-14">
        <div className="flex justify-between gap-8 px-4 mx-auto max-w-7xl">
          <div className="flex items-center w-1/3 gap-4 text-lg font-semibold tracking-wider">
            <h1 className="text-6xl font-bold tracking-wider text-orange-600">
              <CountUp
                start={0}
                end={8}
                duration={3}
                startOnMount
                enableScrollSpy
                scrollSpyOnce
              />
              {"hr"}
            </h1>
            <p className="max-w-8">{"Average time to respond to a ticket."}</p>
          </div>
          <div className="flex items-center w-1/3 gap-4 text-lg font-semibold tracking-wider">
            <h1 className="text-6xl font-bold tracking-wider text-orange-600">
              <CountUp
                start={0}
                end={3}
                duration={3}
                startOnMount
                enableScrollSpy
                scrollSpyOnce
              />
              {"hr"}
            </h1>
            <p className="max-w-8">
              {"Average time to read and respond to an mail."}
            </p>
          </div>
          <div className="flex items-center w-1/3 gap-4 text-lg font-semibold tracking-wider">
            <h1 className="text-6xl font-bold tracking-wider text-orange-600">
              <CountUp
                start={0}
                end={90}
                duration={3}
                startOnMount
                enableScrollSpy
                scrollSpyOnce
              />
              {"%"}
            </h1>
            <p className="max-w-8">
              {"Calls answered in less than 15 seconds."}
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default OurProjects;
