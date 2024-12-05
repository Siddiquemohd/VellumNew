import React, { useState } from "react";
import "./Investment.css"; // External CSS for better styling control

const investmentData = [
  { year: 2012, title: "Newsletter – End Game Of Indian Real Estate", description: "Divestment from Indian real estate, Indian real estate is fuelled by price bubbles and when bubble bursts the aftermath will have a long-term negative impact on the economy.", buttonText: "Read More" },
  { year: 2013, title: "New Investment Plan", description: "Introduced a new investment plan to ensure long-term gains...", buttonText: "Read More" },
  { year: 2014, title: "Market Analysis", description: "Conducted an in-depth analysis of market opportunities...", buttonText: "Read More" },
  { year: 2015, title: "Sustainability Investments", description: "Promoted investments in green and sustainable projects...", buttonText: "Read More" },
  { year: 2016, title: "Digital Transformation", description: "Enabled digital solutions for enhanced financial management...", buttonText: "Read More" },
];

const Investment = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevious = () => {
    if (activeIndex > 0) setActiveIndex(activeIndex - 1);
  };

  const handleNext = () => {
    if (activeIndex < investmentData.length - 1) setActiveIndex(activeIndex + 1);
  };

  return (
    <div className="investment-container">
      <h1 className="header-title">Our 10-Year Investment Guidance</h1>


      <section className="row justify-content-center">
          <div className="timeline-container space-x-10"> {/* Increased space between items */}
              {investmentData.map((item, index) => (
              <div
                  key={item.year}
                  className={`timeline-item ${activeIndex === index ? "active" : ""}`}
                >
                  {/* Year Box */}
                  <div className="year-box mb-3">{item.year}</div> {/* Increased margin for spacing */}

                  {/* Line (only if not the last item) */}
                  {index < investmentData.length - 1 && <div className="line my-6"></div>} {/* Adjusted vertical margin for line */}

                  {/* Dot */}
                  <div className={`dot ${activeIndex === index ? "active" : ""} my-4`}></div> {/* Added vertical margin */}
            </div>
            ))}
          </div>

            <div className="nav-buttons">
              <button onClick={handlePrevious} disabled={activeIndex === 0} className="nav-btn">
                &lt;
              </button>
              <button onClick={handleNext} disabled={activeIndex === investmentData.length - 1} className="nav-btn">
                &gt;
              </button>
            </div>


            <div className="content-container timeline-container space-x-10">
              <div className="bg-white pb-5 rounded">
                <div className="w-[850px]">
                  <h2 className="content-title text-purple-950">{investmentData[activeIndex].title}</h2>
                  <p className="content-description text-black">{investmentData[activeIndex].description}</p>
              </div>
              <button className="read-more-btn mr-[677px] hover:bg-white hover:text-purple-950 shadow-lg hover:shadow-xl transition-shadow duration-200 border-2 border-purple-950">{investmentData[activeIndex].buttonText}</button>
              </div>
            </div>
        </section>
    </div>
  );
};

export default Investment;
