import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";

function Container({ className, children }) {
  return (
    <div className={clsx(className, "mx-auto h-max max-w-[2000px]")}>
      {children}
    </div>
  );
}

Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
};
export default Container;
