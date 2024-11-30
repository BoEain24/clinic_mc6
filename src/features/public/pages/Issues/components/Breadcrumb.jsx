import React from "react";
import { HiChevronRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import ValidLink from "../../AboutUs/components/Breadcrumb";

const Breadcrumb = ({ currentPageTitle, links }) => {
  return (
    <div className=" w-full flex gap-3 mb-5">
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 rtl:space-x-reverse">
          <li className="inline-flex  items-center">
            <ValidLink
              href={"/"}
              className="inline-flex gap-1 items-center text-sm font-medium text-white hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
            >
              Home
            </ValidLink>
          </li>

          {links &&
            links.map((link, index) => (
              <li key={index} className="inline-flex  items-center">
                <Link
                  to={link.path}
                  className="inline-flex gap-1 items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          <HiChevronRight />
          <li aria-current="page">
            <div className="flex items-center">
              <span className=" text-sm font-medium text-white dark:text-gray-400">
                {currentPageTitle}
              </span>
            </div>
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
