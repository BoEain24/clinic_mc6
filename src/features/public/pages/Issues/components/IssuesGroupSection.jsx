import React from "react";
import Container from "./Container";
import IssuesCard from "./IssuesCard";

const IssuesGroupSection = () => {
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  return (
    <section className="py-16">
      <div className="grid grid-cols-3 gap-5">
        {cards.map((card) => (
          <IssuesCard key={card} />
        ))}
      </div>
    </section>
  );
};

export default IssuesGroupSection;
