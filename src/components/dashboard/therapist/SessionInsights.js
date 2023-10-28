import React from "react";

const SessionInsights = () => {
  return (
      <div className="flex flex-col justify-center items-center w-full">
        <div className="justify-start items-start">
        <div className="text-neutral-800 text-3xl font-bold ">
          Session Insights
        </div>
        <div className="text-black text-xs font-normal ">
          ⚠️ Please note that some of the content on this platform is generated
          by artificial intelligence, and while we strive for
          <br />
          accuracy, there may be occasional errors or inaccuracies. Thank you
          for your patience and understanding as we <br />
          continuously improve our platform.
        </div>
        </div>

        <div className="w-96 h-96 justify-start items-start gap-1 inline-flex mt-6  pb-16">
          <div className="p-5 bg-white rounded-2xl border border-neutral-800 flex-col justify-start items-start gap-3 inline-flex">
            <div className="flex-col justify-start items-end gap-3 flex">
              <div className="flex-col justify-start items-start gap-2 flex">
                <div className="text-black text-base font-bold ">
                  Summary
                </div>
                <div className="w-96">
                  <span className="text-neutral-800 text-base font-normal  leading-7">
                    AI Generated Summary:
                    <br />
                    <br />
                    Data Visualization:
                    <br />
                  </span>
                  <span className="text-neutral-800 text-base font-normal  leading-7">
                    Performance Metrics: <br />
                    Questions Answered Correctly: 7 out of 10
                    <br />
                    Percentage of Correct Answers: 70%
                    <br />
                    Questions Answered Incorrectly: 3 out of 10
                    <br />
                    Percentage of Incorrect Answers: 30%
                    <br />
                  </span>
                  <span className="text-neutral-800 text-base font-normal  leading-7">
                    <br />
                    Session Summary:
                    <br />
                  </span>
                  <span className="text-neutral-800 text-base font-normal  leading-7">
                    The student participated in a speech therapy session
                    focusing on eliciting answers with the /S/ sound.
                    <br />
                    The student answered a total of 10 questions related to the
                    content input.
                    <br />
                    The student demonstrated progress in correctly answering 7
                    out of 10 questions.
                    <br />
                    The student struggled with accurately understanding and
                    responding to a few questions.
                    <br />
                  </span>
                  <span className="text-neutral-800 text-base font-normal  leading-7">
                    <br />
                    Insights:
                    <br />
                  </span>
                  <span className="text-neutral-800 text-base font-normal  leading-7">
                    The student showed improvement and success in producing
                    words and short phrases starting with the /S/ sound.
                    <br />
                    The student's expressive language skills are developing,
                    especially in relation to phonological disorders.
                    <br />
                    The student may require additional support and practice in
                    understanding and responding to questions accurately.
                    <br />
                    Continuing to work on phonological disorders and expressive
                    language delays will be beneficial for the student's
                    progress.
                    <br />
                  </span>
                  <span className="text-neutral-800 text-base font-normal  leading-7">
                    <br />
                    Overall, the student's performance in this session indicates
                    progress in their speech and language development, with some
                    areas that require further attention and support.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="px-3 py-4 flex-col justify-start items-start gap-3 inline-flex">
            <div className="w-6 h-6 relative" />
            <div className="w-6 h-6 relative">
              <div className="w-1 h-px left-[14px] top-[3px] absolute origin-top-left rotate-180 rounded-full border-2 border-black" />
            </div>
          </div>
        </div>
      </div>
  );
};
export default SessionInsights;
