import React from "react";
import Container from "./Container";
import IssuesCard from "./IssuesCard";
import useIssuesCard from "../../../../../store/useIssuesCard";

const IssuesGroupSection = () => {
  const { issuesCards} = useIssuesCard();

  return (
    <section className="py-16 ">
      <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 ">
        {issuesCards.map((card) => (
          <IssuesCard key={card.id} card={card}/>
        ))}
      </div>
    </section>
  );
};

export default IssuesGroupSection;
