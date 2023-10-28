import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "primereact/resources/themes/lara-light-indigo/theme.css";

const AccordionWidget = ({ goalDetails }) => {
  const [expanded, setExpanded] = useState(Array(goalDetails.length).fill(false));

  const toggleAccordion = (index) => {
    const newExpanded = [...expanded];
    newExpanded[index] = !newExpanded[index];
    setExpanded(newExpanded);
  };

  return (
    <div className="w-80 h-96 flex-col justify-start items-start gap-4 inline-flex">
      <div className="text-neutral-800 text-xl font-bold ">
        Goals
      </div>
      {goalDetails && goalDetails.length > 0
            ? goalDetails.map((goal, index) => {
              console.log("Goal Title:", goal.title);
                return (
            <div key={index} className="border border-neutral-800 rounded-md w-full p-2">
              <div
                className="self-stretch flex justify-between cursor-pointer"
                onClick={() => toggleAccordion(index)}
              >
                <div className="text-neutral-800 text-base font-bold ">
                  {goal.title}
                </div>
                <div >
                  <FontAwesomeIcon
                    icon={expanded[index] ? faChevronUp : faChevronDown}
                    className="w-4 h-4 mt-1"
                  />
                </div>
              </div>
              {expanded[index] && (
                <div className="h-auto p-3 rounded-lg">
                  {goal.items && goal.items.length > 0
                    ? goal.items.map((item, i) => (
                        <div key={i}>
                          <div className="text-stone-500 text-base ">
                            {item.title}
                          </div>
                          <div className="pl-4">
                            {item.items && item.items.length > 0
                              ? item.items.map((subItem, j) => (
                                  <div
                                    key={j}
                                    className="justify-start items-center gap-2 inline-flex"
                                  >
                                    <div className="w-5 h-5 flex-col justify-center items-center gap-2 inline-flex">
                                      <input type="checkbox" />
                                    </div>
                                    <div className="text-stone-500 text-sm font-normal  leading-normal tracking-tight">
                                      {subItem}
                                    </div>
                                  </div>
                                ))
                              : null}
                          </div>
                        </div>
                      ))
                    : null}
                </div>
              )}
            </div>
                   );
                  })
                : ""}
    </div>
  );
};

export default AccordionWidget;
