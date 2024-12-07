import React from "react";
import issuesCardImage from "../../../../../assets/images/aging.jpg";
import ValidLink from "../../../../../ui/ValidLink";

const IssuesCard = ({ card }) => {
  return (
    <>
      <ValidLink href={"/issues-detail"}>
        <div className="border bg-zinc-200 w-[328px] h-[280px] flex flex-col rounded-lg overflow-hidden md:mx-0 mx-auto">
          <img src={card.image} className="h-[210px] w-[328px] object-cover object-center" alt="" />
          <div className="flex items-center justify-center flex-grow ">
            <p className="text-xl">{card.title}</p>
          </div>
        </div>
      </ValidLink>
    </>
  );
};

export default IssuesCard;
