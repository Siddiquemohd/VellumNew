import { useState } from "react";
import "./Steps.css";
import Image from "next/image";

type Step = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const steps: Step[] = [
  {
    id: 1,
    title: "INSTANT REGISTRATION",
    description: "Click on Sign Up to begin your on-boarding journey.",
    image: "/images/1a.png", // Replace with your actual image path
  },
  {
    id: 2,
    title: "VALLUM TRACKER",
    description: "Use our tech-enabled platform to complete all document processes.",
    image: "/images/3a.png", // Replace with your actual image path
  },
  {
    id: 3,
    title: "GET ON BOARDED",
    description: "Portfolio Creation Begins, Welcome to the Vallum Family!",
    image: "/images/4a.png", // Replace with your actual image path
  },
];

const FeatureSteps = () => {
  const [activeStep, setActiveStep] = useState<Step>(steps[0]);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-6 p-6">
      {/* Container for Steps */}
      <div className="relative flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-24">
        {/* Left Side: Image */}
        <div className="flex flex-col items-center text-center w-full lg:w-1/3">
          <div className="w-48 h-48 rounded-full flex items-center justify-center p-4 overflow-hidden bg-gradient-to-r from-purple-400 relative hover:scale-110 transition-all duration-300 ease-in-out">
          <Image
              src={activeStep.image}
              alt={activeStep.title}
              width={100}   // Set the desired width
              height={100}  // Set the desired height
              className="object-cover"
          />

            {/* Circle effect on hover */}
            <div className="hover-tab-menu absolute inset-0">
              <div className="tab-menu">
                <ul>
                  <li className="menu-thumb">
                    <span className="circle-effect"></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Steps */}
        <div className="flex flex-col items-center lg:w-2/3 space-y-4 lg:space-y-6">
          {steps.map((step, index) => (
            <div
              key={step.id}
              onMouseEnter={() => setActiveStep(step)}
              className={`flex items-center gap-4 cursor-pointer transition-all duration-300 ease-in-out transform ${
                activeStep.id === step.id
                  ? "text-purple-700 font-semibold scale-100"
                  : "text-gray-600"
              }`}
            >
              {/* Step Circle with Gradient Background */}
              <div
                className={`flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-300 ease-in-out ${
                  index === 0
                    ? "bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
                    : index === 1
                    ? "bg-gradient-to-r from-blue-400 via-indigo-500 to-teal-500"
                    : "bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600"
                }`}
              >
                {step.id}
              </div>

              {/* Step Text */}
              <div className="text-center lg:text-left">
                <h3 className="text-lg">{step.title}</h3>
                <p className="text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureSteps;
