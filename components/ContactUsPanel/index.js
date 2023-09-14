import React from "react";
import classNames from "classnames";
import styles from "./contactUsPanel.module.scss";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

function ContactUsPanel() {
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <div
      className={classNames(
        "w-full",
        "flex",
        "items-center",
        "justify-center",
        // eslint-disable-next-line prettier/prettier
        styles.bg
      )}
    >
      <div className="flex items-center w-full px-12 py-16 mx-8 text-center h-96 l g:text-left lg:justify-between">
        <div className="flex flex-col w-full lg:flex-row lg:justify-around">
          <div className="mb-4 text-primary4">
            <p className="mb-4 text-2xl font-bold md:text-4xl text-pr">
              Are you ready to scale your business?
            </p>
            <p className="text-lg md:text-2xl">
              Get in touch and let us build something amazing
              <span className="font-black"> together!</span>
            </p>
          </div>

          <div className="w-full pt-6 lg:w-72 lg:mx-12">
            <a
              href="javascript:void(0)"
              class="inline-block bg-primary2 rounded-full  py-2 px-7 text-base font-medium text-primary4 transition hover:border-primary1 hover:bg-primary4 hover:text-primary1"
            >
              Let's Inquiry
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUsPanel;
