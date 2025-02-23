

import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const HowToWorks = () => {
  const steps = [
    {
      title: "Book a Call",
      description:
        "The final product is delivered to the customer. BookBazzar provides ongoing support and 24/7 customer service to ensure that the customers business continues to thrive and scale effectively",
    },
    {
      title: "Requirement Analysis",
      description:
        "The final product is delivered to the customer. BookBazzar provides ongoing support and 24/7 customer service to ensure that the customers business continues to thrive and scale effectively",
    },
    {
      title: "Service Customisation",
      description:
        "The final product is delivered to the customer. BookBazzar provides ongoing support and 24/7 customer service to ensure that the customers business continues to thrive and scale effectively",
    },
    {
      title: "Quality Assurance",
      description:
        "The final product is delivered to the customer. BookBazzar provides ongoing support and 24/7 customer service to ensure that the customers business continues to thrive and scale effectively",
    },
    {
      title: "Delivery and Support",
      description:
        "The final product is delivered to the customer. BookBazzar provides ongoing support and 24/7 customer service to ensure that the customers business continues to thrive and scale effectively",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="lg:pt-8 pt-8 text-white bg-gradient-to-b from-[#1B1B31] via-[#2B1E36] to-[#1B1B31]">
      <div className="text-center lg:pb-14 pb-8">
        <h2 className="lg:text-6xl text-3xl font-semibold text-white">
          How To Works?
        </h2>
        <p className="text-[#F3F3F4] text-base lg:text-lg font-normal pt-4 mx-auto lg:w-[40rem] w-[90%]">
          Based on the description of BookBazzar and the image provided, here is
          a 5-step process that BookBazzar uses to scale a customers business
        </p>
      </div>

      <div className="relative">
        {steps.map((step, index) => (
          <div key={index} className="relative pb-4 rounded-2xl">
            <div
              className="flex items-center lg:ml-[150px] lg:mr-[150px] justify-between p-4 cursor-pointer"
              onClick={() => toggleAccordion(index)}
            >
              <p className="text-xl lg:text-4xl font-medium">{step.title}</p>
              {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {activeIndex === index && (
              <div className="p-4">
                <p className="text-base lg:text-xl lg:ml-[150px] lg:mr-[150px] font-normal">
                  {step.description}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default HowToWorks;