import React from "react";
import Goal from "../svg/Goal";
import imageTesting from "../../assets/images/girl-doing-homework-or-online-education.png";

const goalDetails = [
  {
    title: "Articulation",
    items: [
      {
        title: "Sound",
        items: [
          "Will use X sound in isolation",
          "Will use X sound in X position(s) of the word at the word level",
          "Will use X sound in X position(s) of the word at the phrase level",
        ],
      },
    ],
  },
];

const UserProfileSidebar = ({getStudentById}) => {
  return (
    <div className="w-96 h-96 relative">
      <div className="w-72 h-96 pt-20 left-0 top-[70px] absolute bg-white rounded-2xl shadow flex-col justify-start items-start inline-flex">
      <div className="w-72 p-5 justify-start items-center gap-2.5 inline-flex">
            <div className="flex-col justify-start items-start inline-flex">
              <div className="text-stone-500 text-base font-normal  leading-7">
                First Name
              </div>
              <div className="text-stone-500 text-base font-normal  leading-7">
                Last Name
              </div>
              <div className="text-stone-500 text-base font-normal  leading-7">
                Date of Birth
              </div>
              <div className="text-stone-500 text-base font-normal  leading-7">
                Age
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-2 inline-flex">
              <div className="text-black text-base font-bold ">Taylor</div>
              <div className="text-black text-base font-bold ">Morgan</div>
              <div className="text-black text-base font-bold ">4/14/2016</div>
              <div className="text-black text-base font-bold ">
                3 years 10 months
              </div>
            </div>
          </div>
        <div className="h-80 p-3 flex-col justify-end items-start gap-3.5 flex">
          <div className="self-stretch h-72 p-5 bg-red-100 rounded-lg flex-col justify-start items-start gap-5 flex">
            <div className="justify-start items-center gap-3 inline-flex">
              <div className="w-10 h-10 p-2.5 bg-white rounded-2xl shadow justify-center items-center gap-2.5 flex">
                <Goal />
              </div>
              <div className="w-11 justify-center items-center gap-2.5 flex">
                <div className="text-black text-base font-bold ">Goals</div>
              </div>
            </div>
            <div className="self-stretch h-48 px-3 py-2 rounded-lg border border-pink-900 flex-col justify-start items-start gap-1 flex">
              <div className="self-stretch justify-between items-start inline-flex">
                <div className="text-pink-900 text-base font-bold ">Articulation</div>
                <div className="w-6 h-6 relative origin-top-left rotate-180" />
              </div>
              <div className="flex-col justify-start items-start flex">
                {goalDetails[0].items[0].items.map((item, index) => (
                  <div key={index} className="justify-start items-center gap-2 inline-flex">
                    <div className="w-5 h-5 flex-col justify-center items-center gap-2 inline-flex">
                      <input type="checkbox" />
                    </div>
                    <div className="text-stone-500 text-sm font-normal leading-normal tracking-tight">
                      {item}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-36 h-36 left-[64px] top-0 absolute">
      <img
            className="w-36 h-36 left-0 top-0 absolute bg-pink p-2 rounded-full border-2 border-meroon"
            src={imageTesting}
            alt=""
          />
      </div>
    </div>
  );
};

export default UserProfileSidebar;
