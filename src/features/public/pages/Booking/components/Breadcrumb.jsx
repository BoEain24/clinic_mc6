import React from "react";
import { HiAcademicCap, HiChevronRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Breadcrumb = ({ currentPageTitle, links }) => {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        <li className="inline-flex items-center">
          <Link
            to={"/"}
            className="inline-flex items-center text-sm text-zinc-50 hover:text-zinc-300"
          >
            Home
          </Link>
        </li>
        {links &&
          links.map((link, index) => {
            return (
              <li key={index} className="inline-flex items-center">
                <Link
                  to={link.path}
                  className="inline-flex gap-1 items-center text-sm font-medium text-zinc-50 hover:text-zinc-400"
                >
                  <HiChevronRight className=" text-zinc-50" />
                  {link.title}
                </Link>
              </li>
            );
          })}
        <li className="inline-flex items-center gap-1">
          <HiChevronRight className=" text-zinc-50" />
          <div className="inline-flex  items-center text-sm text-zinc-50 hover:text-zinc-300">
            {currentPageTitle}
          </div>
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;