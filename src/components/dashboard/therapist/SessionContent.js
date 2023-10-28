import React, { useState, useEffect } from "react";
import Accordion from "../../widget/AccordionWidget";
import Button from "../../../components/widget/Button";
import { TabView, TabPanel } from "primereact/tabview";
import PaperSvg from "../../../components/svg/PaperSvg";
import "../../../assets/css/style.css";


const SessionContent = () => {
  const [goalDetails, setGoalDetails] = useState([]);
  const [studentquestions, setStudentQuestions] = useState([]);

  useEffect(() => {
    // Fetch goalDetails data
    fetch("http://localhost:3000/dev/therapy/session/goals")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Goal Details Response:", data);
        setGoalDetails(data.data);
      })
      .catch((error) => {
        console.error("Error fetching goalDetails:", error.message);
      });

    // Fetch studentquestions data
    fetch("http://localhost:3000/dev/therapy/session/questions")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Student Questions Response:", data);
        setStudentQuestions(data.data);
      })
      .catch((error) => {
        console.error("Error fetching studentquestions:", error.message);
      });
  }, []);

  return (
    <div className="flex gap-6 w-full mt-10">
      <div className="w-1/3">
         <Accordion goalDetails={goalDetails} />
      </div>
      <div className="w-2/3 h-96 flex-col justify-start items-start gap-7 inline-flex">
        <div className="w-full">
          <div className="text-neutral-800 text-xl font-bold ">
            Sample Content
          </div>
          <TabView scrollable>
            {studentquestions && studentquestions.length > 0
              ? studentquestions.map((tab, index) => {
                  return (
                    <TabPanel
                      key={tab.Question}
                      header={tab.Question}
                      leftIcon={<PaperSvg />}
                    >
                      <div className="justify-start items-start mb-7">
                        <div className="text-neutral-800 text-3xl font-bold ">
                          Content for question generation
                        </div>
                        <div className="text-neutral-800 text-base font-normal  leading-7">
                          To generate questions please provide the text you're
                          referencing, along with any specific details or
                          context you'd like to include.
                        </div>
                      </div>
                      <div className="p-5 rounded-lg border border-neutral-800 flex-col justify-start items-start gap-2.5 flex">
                        <div className="text-black text-base font-normal  leading-7">
                          Title: <br />
                          {tab.Question}
                          <br />
                          <br />
                          Text: <br />
                          {tab.Explanation}
                        </div>
                      </div>
                    </TabPanel>
                  );
                })
              : ""}
          </TabView>
        </div>
        <div className="justify-center items-center">
          <Button
            buttonText="Submit"
            className="text-white w-32 h-10 px-10 py-2"
          />
        </div>
      </div>
    </div>
  );
};

export default SessionContent;
