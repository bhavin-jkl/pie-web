import React, { Fragment } from "react";
import CountUp from "react-countup";
const OurProjects = () => {
  return (
    <Fragment>
      <div className="bg-[#dcf9fc] py-14 my-4">
        <div className="max-w-7xl mx-auto px-4 flex justify-between gap-8">
          <div className="flex gap-4 items-center tracking-wider text-lg font-semibold w-1/3">
            <h1 className="text-6xl font-bold text-orange-600 tracking-wider">
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
          <div className="flex gap-4 items-center tracking-wider text-lg font-semibold w-1/3">
            <h1 className="text-6xl font-bold text-orange-600 tracking-wider">
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
          <div className="flex gap-4 items-center tracking-wider text-lg font-semibold w-1/3">
            <h1 className="text-6xl font-bold text-orange-600 tracking-wider">
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
