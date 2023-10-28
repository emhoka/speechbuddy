import React, { useState } from "react";
import UserProfileSidebar from "../UserProfileSidebar";
import EditSvg from "../../svg/EditSvg";
import Button from "../../widget/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const initialIEPData = [
  {
    title: "Date of Evaluation",
    content: "2/11/2020",
  },
  {
    title: "ICD-10/Diagnosis",
    content:
      "Receptive language disorder, Expressive language disorder, Other developmental disorders of speech and language",
  },
  {
    title: "Informal Assessment",
    content:
      `Receptive language was assessed informally through structured
      play, clinical observation, and parent report. MT answered
      simple WH- questions (who, what, and where) through gestures
      while reading a book. MT identified various animals, ie. lion,
      lizard, eagle, cow, horse, and understanding of animal
      functions, ie. eagle flying, animals fighting and roaring. MT
      demonstrated understanding of object functions, ie. used a
      spoon to feed the baby, a cup to drink, put the food on the
      pretend stove, put the cars on the ramp, used a ball to roll,
      and blew bubbles. MT demonstrated understanding of the
      concepts in/on through play, ie. put the pizza in the oven,
      put Chase on the ramp. MT was observed matching shapes with
      their correct slots with a shape sorting puzzle and matched
      the colors blue, purple, green, yellow, and red appropriately.
      MT’s mother reports that MT is able to identify shapes, such
      as a square, triangle, heart, and circle, however MT was only
      observed to label “star” at this time. MT demonstrated
      inconsistent ability to follow one- and two-step directives.
      Although not observed at this time, MT’s mother reports that
      he can follow two to three step directives at home. Informal
      assessment revealed moderate to severe receptive language
      delay characterized by decreased ability to follow directions,
      decreased understanding of spatial concepts, limited word
      comprehension, limited attention span, and limited play
      routines.`,
  },
  {
    title: "Formal Assessment",
    content:
      `Clinical Evaluation of Language Fundamentals - Preschool,
      Second Edition (CELF-P2)
      The CELF-P2 is a standardized test which assesses elements of
      receptive language (auditory comprehension) using the
      subtests: Sentence Structure, Concepts & Following Directions,
      and Basic Concepts. The Concepts & Following Directions
      subtest was the only receptive language subtest attempted and
      evaluates the child’s ability to comprehend spoken directions
      of increasing length and complexity. MT identified items based
      on equality (ie. same, match), however he demonstrated
      difficulty with size (ie. tallest), temporal concepts (ie.
      first, then), and location (ie. next to, farthest). Due to
      MT’s difficulty with attention, the subtest was used to
      evaluate MT’s language informally.`,
  },
  {
    title: "Summary of Findings",
    content:
      `MT, a 3 year 10 month old male, was evaluated at the Lehman
      College Speech and Hearing Center in the Bronx on February 11,
      2020 due to concerns regarding receptive and expressive
      language skills. MT presented with moderate to severe
      receptive language delay and severe expressive language delay.
      MT answered simple WH- questions through gestures, identified
      various animals, understands animal functions, demonstrated
      understanding of object functions, and demonstrated
      understanding of the concepts in/on through play. Moderate to
      severe receptive language delay was characterized by decreased
      ability to follow directions, decreased understanding of
      spatial concepts, limited word comprehension, limited
      attention span, limited play routines, and decreased
      comprehension of spatial and temporal markers. <br />
      MT answered yes and no questions, exhibits expressive skills
      of existence, denial, attribution, possession, action, and
      quantity. MT demonstrated use of the following morphemes:
      present progressive, irregular past tense, plural s, articles,
      and contractible copula. MT’s vocabulary consisted of mostly
      nouns, limited verbs, use of exclamatory phrases, and early
      pronouns. Severe expressive language delay was characterized
      by limited lexicon of mostly nouns, decreased MLU of one- to
      two-word utterances, limited consistent echolalia, and
      decreased use of specification, dative statements, possession,
      third person -s, causal and temporal markers.`,
  },
  {
    title: " Behavioral Observation",
    content: ` MT transitioned smoothly into the evaluation room in the arms
    of his mother. MT presented as a happy, active, and sweet
    child who engaged with the student clinicians. The evaluation
    took about 1 and a half hours to complete and had 6 people
    present - MT, his mother, his father, two student clinicians,
    and one clinical educator. MT exhibited a good attention span
    for both structured and unstructured activities. Decreased
    attention skills were observed for structured table top
    activities, ie. less than 30 seconds, and improved attention
    skills with gross motor tasks with his dad and independent
    play, ie. 2-3 minutes. MT transitioned from toys on his own in
    self-directed play. Perseveration was observed in regards to
    his stuffed dog. MT was observed to partake in repetitive
    motor movement, ie. jumping. MT was observed wiping off his
    hands during play with bubbles and chalk. Mother reports
    concerns with MT’s sensory sensitivity, ie. removing dirt from
    his hands. Eye contact and turn-taking were observed to be
    inconsistent, however improved with people and activities of
    interest. MT was often reported to repeat. Articulation was
    observed to be adequate for his age, however during
    independent play MT observed to babble, which was
    unintelligible.`,
  },
  {
    title: "Hearing Screening",
    content:
      `Hearing could not be completed due to MT’s difficulty with
      following complex directions. It was observed that hearing at
      the conversational level was adequate. MT’s parents report no
      concerns with his hearing.`,
  },
];

const StudentIEP = ({selectedStudent}) => {
  const [expandedDiv, setExpandedDiv] = useState(null);

  const toggleDiv = (index) => {
    if (expandedDiv === index) {
      setExpandedDiv(null);
    } else {
      setExpandedDiv(index);
    }
  };

  return (
    <div className="flex gap-6 w-full">
      <UserProfileSidebar selectedStudent={selectedStudent} />

      <div className="w-full bg-white rounded-2xl shadow mt-16">
        <div className="text-teal-500 text-2xl font-bold p-6">
          IEP Information
        </div>
        <div className="flex flex-col gap-5">
          {initialIEPData.map((item, index) => (
            <div
              key={index}
              className="w-full bg-white rounded-lg overflow-hidden"
            >
              <div
                className={`p-4 border-t border-stone-300 cursor-pointer flex justify-between items-center`}
                onClick={() => toggleDiv(index)}
              >
                <div className="text-neutral-800 text-base font-bold">
                  {item.title}
                </div>
                <div className="px-3">
                  <FontAwesomeIcon
                    icon={expandedDiv === index ? faChevronUp : faChevronDown}
                    className="w-4 h-4 relative mt-1"
                  />
                </div>
              </div>
              {expandedDiv === index && (
                <div className="p-4">
                  <div className="text-black text-base font-normal">
                    {item.content}
                  </div>
                  <div className="flex gap-4 justify-end items-end w-40 py-5">
                    <Button buttonText="Cancel" className="bg-transparent text-green" />
                    <Button buttonText="Update" className="bg-transparent text-green border border-green" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="p-3 mt-10 justify-start items-center gap-1 inline-flex">
          <Button buttonText="Save IEP Information" className="text-white text-base font-medium leading-7  px-3 py-2 " />
        </div>
      </div>
    </div>
  );
};

export default StudentIEP;
