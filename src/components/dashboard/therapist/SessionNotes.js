import React from "react";

const SessionNotes = () => {
  return (
      <div className="flex flex-col justify-center items-center w-full">
        <div className="text-neutral-800 text-3xl font-bold justify-start items-start">
          Session Notes
        </div>

        <div className="w-96 h-80 justify-start items-start gap-1 inline-flex mt-6">
  <div className="p-5 bg-white rounded-2xl border border-neutral-800 flex-col justify-start items-start gap-3 inline-flex">
    <div className="flex-col justify-start items-end gap-3 flex">
      <div className="flex-col justify-start items-start gap-2 flex">
        <div className="w-96 text-neutral-800 text-base font-normal  leading-7">1. Max<br/>2. Correct<br/>3. Correct<br/>4. start<br/>5. Correct<br/>6. Correct<br/>7. incorrect<br/>8. sad<br/>9. incorrect<br/>10. correct</div>
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
export default SessionNotes;
