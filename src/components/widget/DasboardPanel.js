import React from "react";
const DashboardPanel =()=>{
    return (

        <div class="w-96 h-11 justify-start items-start gap-2 inline-flex mb-10">
        <div class="py-2 border-b-2 border-teal-500 flex-col justify-start items-start gap-2.5 inline-flex">
            <div class="px-3 bg-teal-500 bg-opacity-25 rounded justify-center items-center gap-2.5 inline-flex">
                <div class="text-teal-500 text-base font-medium leading-7">Profile</div>
            </div>
        </div>
        <div class="py-2 flex-col justify-start items-start gap-2.5 inline-flex">
            <div class="px-3 rounded justify-center items-center gap-2.5 inline-flex">
                <div class="text-neutral-800 text-base font-medium leading-7">Session</div>
            </div>
        </div>
        <div class="py-2 flex-col justify-start items-start gap-2.5 inline-flex">
            <div class="px-3 rounded justify-center items-center gap-2.5 inline-flex">
                <div class="text-neutral-800 text-base font-medium leading-7">Progress</div>
            </div>
        </div>
    </div>
    // </div>
    )
}
export default DashboardPanel;