import React from "react";
import IssuesDetailCardSection from "./IssuesDetailCardSection";
import treatmentCardsImage1 from "../../../../../assets/images/issues/19.jpg";
import treatmentCardsImage2 from "../../../../../assets/images/issues/rf-microneedling.jpeg";

const IssuesDetailCardList = () => {
  const treatmentCards = [
    {
      id: 1,
      img: (
        <img
          src={treatmentCardsImage1}
          alt=""
          className=" w-full h-full object-cover object-center"
        />
      ),
      title: "Ultraformer MPT HIFU",
      description:
        "The Ultraformer MPT, which stands for Micro Pulse Technology, is a new generation of HIFU (or High Intensity Focused Ultrasound)....",
    },
    {
      id: 2,
      img: (
        <img
          src={treatmentCardsImage2}
          alt=""
          className=" w-full h-full object-cover object-center"
        />
      ),
      title: "Agnes RF Micro-Needling",
      description:
        "Agnes RF Micro-Needling is a cutting-edge, minimally invasive treatment designed to improve skin texture, reduce wrinkles, and treat specific....",
    },
    {
      id: 3,
      img: (
        <img
          src={treatmentCardsImage1}
          alt=""
          className=" w-full h-full object-cover object-center"
        />
      ),
      title: "Dermal fillers",
      description:
        "Enhance your natural beauty with our premium dermal fillers. Whether you want plumper lips, higher cheekbones, or a refreshed look,....",
    },
  ];

  return (
    <section className="py-10">
      <h3 className="text-2xl mb-8">You should try these Treatments</h3>
      <div className="grid grid-cols-3 gap-4">
        {treatmentCards.map((card) => (
          <IssuesDetailCardSection key={card.id} card={card} />
        ))}
      </div>
    </section>
  );
};

export default IssuesDetailCardList;
