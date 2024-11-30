import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import OurDoctor3 from "../../../assets/images/aesthetic clinic doctor photo (1).jpg";
import ValidLink from "../../../components/ValidLink";
import moistureImage from "../../../assets/images/moisture.jpg";
import retenoidsImage from "../../../assets/images/retenoids.jpg";
import nonTreatmentImage from "../../../assets/images/23.jpg";

const IssuesDetailHeroSection = () => {
  return (
    <section>
        <ValidLink href={"/issues"}>
        <div className="border-1 bg-zinc-100 rounded-full size-8 mt-4">
        <button className="px-2 py-2">
          <BsArrowLeft />
        </button>
      </div>
        </ValidLink>
      
      <div className="text-center">
        <h1 className="text-3xl pb-4">Aging & Saggy Skin</h1>
        <p className="text-base">
          To maintain aging and sagging skin, focus on treatments and lifestyle
          habits that promote elasticity, hydration, and collagen production.
          Here are{" "}
        </p>
        <p className="text-base">some effective approaches:</p>
      </div>

      <div className="py-16">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-5 ">
            <img src={moistureImage} alt="" className="w-[415px] h-[240px] rounded-lg mb-6" />
            <img src={retenoidsImage} alt="" className="w-[415px] h-[240px] rounded-lg" />
          </div>
          <div className="col-span-7 h-full">
            <div className="w-full h-full flex justify-center ">
              <div className="flex flex-col gap-5">
                <div className="">
                  <h1 className="text-2xl">Skincare Routine</h1>
                </div>
                <div className="space-y-8 text-base ml-6">
                  <ul className="list-disc space-y-4">
                    <li>
                      <p>
                        <span className="font-bold">Moisturize Daily: </span>
                        Use a rich, hydrating moisturizer with ingredients like
                        hyaluronic acid, peptides, and ceramides to keep skin
                        plump and prevent further moisture loss.
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className="font-bold">Apply Sunscreen: </span>
                        Daily SPF 30 or higher protects against UV damage, which
                        accelerates aging and sagging. Look for broad-spectrum
                        formulas with antioxidants.
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className="font-bold">Retinoids: </span>
                        Retinoids (like retinol) stimulate collagen and help
                        with cell turnover, reducing fine lines and improving
                        skin firmness over time.
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className="font-bold">Antioxidants: </span>
                        Serums with Vitamin C, E, and niacinamide can help
                        protect skin from free radicals and promote a brighter,
                        smoother appearance.
                      </p>
                    </li>
                  </ul>
                  <div className="">
                    <div className="">
                      <h3 className="text-2xl mb-4">Facial Exercises</h3>
                    </div>
                    <div className="space-y-8 text-base">
                      <p>
                        Regular facial exercises may help strengthen muscles
                        under the skin, giving a more lifted appearance to the
                        cheeks, jawline, and neck area.
                      </p>
                    </div>
                  </div>
                  <div className="">
                    <div className="">
                      <h3 className="text-2xl mb-4">Get Enough Sleep</h3>
                    </div>
                    <div className="space-y-8 text-base">
                      <p>
                      Quality sleep helps the body repair and regenerate skin cells, while poor sleep can accelerate aging signs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-16 pt-4">
        <div className="grid grid-cols-12 gap-6">
          
          <div className="col-span-7 h-full">
            <div className="w-full h-full flex justify-center ">
              <div className="flex flex-col gap-5">
                <div className="">
                  <h1 className="text-2xl ">Non-Surgical Treatments</h1>
                </div>
                <div className="space-y-8 text-base ml-6">
                  <ul className="list-disc space-y-4">
                    <li>
                      <p>
                        <span className="font-bold">HIFU (High-Intensity Focused Ultrasound): </span>
                         A non-invasive procedure that tightens skin by stimulating deep layers with ultrasound energy.
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className="font-bold">Radiofrequency (RF) Therapy: </span>
                         Uses heat to boost collagen production and lift sagging skin, providing firmer, youthful-looking skin over time.
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className="font-bold">Micro-needling: </span>
                         Creates micro-injuries that encourage collagen and elastin production, which can help with skin texture, firmness, and elasticity.
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className="font-bold">Injectable Fillers: </span>
                         Fillers add volume and lift to areas where skin has lost elasticity, giving a more youthful contour.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-5 ">
            <img src={nonTreatmentImage} alt="" className="w-[415px] h-[344px] rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IssuesDetailHeroSection;
