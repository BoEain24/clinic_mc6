import React from "react";
import issuesCardImage from "../../../../../assets/images/aging.jpg";
import ValidLink from "../../../../../ui/ValidLink";

const IssuesCard = () => {
  return (
    <>
      <ValidLink href={"/issues-detail"}>
        <div className="border bg-zinc-200 w-[328px] h-[280px] flex flex-col rounded-lg overflow-hidden">
          <img src={issuesCardImage} className="h-[210px] w-[328px]" alt="" />
          <div className="flex items-center justify-center flex-grow ">
            <p className="text-xl">Aging & Saggy Skin</p>
          </div>
        </div>
      </ValidLink>
    </>
  );
};

export default IssuesCard;
