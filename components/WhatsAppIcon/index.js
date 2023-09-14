/* eslint-disable @next/next/no-img-element */
import React, { Fragment } from "react";

function WhatsAppIcon() {
  return (
    <Fragment>
      <div
        className="fixed z-50 transition bg-transparent rounded-full bottom-3 left-3"
        onClick={() =>
          window.open("https://api.whatsapp.com/send?phone=911234567891")
        }
      >
        <img
          className="float-none duration-1000 rounded-t w-11"
          src="/assets/images/svg/whatsapp.svg"
          alt="whatsapp"
        />
      </div>
    </Fragment>
  );
}

export default WhatsAppIcon;
