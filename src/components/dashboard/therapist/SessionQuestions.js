import React from "react";
import Button from "../../components/widget/Button";
import FormInput from "../../components/widget/FormInput";

const StudentQuestions = () => {
  return (
      <div className="flex gap-6 w-full mt-10">
        <div class="w-72 h-96 pt-20 bg-white rounded-2xl shadow flex-col justify-start items-start inline-flex">
          <img
            class="w-60 h-40"
            src="https://via.placeholder.com/237x158"
            alt=""
          />
          <div class="w-72 p-5 justify-start items-center gap-4 inline-flex">
            <div class="flex-col justify-start items-start inline-flex">
              <div class="text-stone-500 text-base font-normal leading-7">
                First Name
              </div>
              <div class="text-stone-500 text-base font-normal leading-7">
                Last Name
              </div>
              <div class="text-stone-500 text-base font-normal leading-7">
                Date of Birth
              </div>
              <div class="text-stone-500 text-base font-normal leading-7">
                Age
              </div>
            </div>
            <div class="flex-col justify-start items-start gap-2 inline-flex">
              <div class="text-black text-base font-semibold">Mary</div>
              <div class="text-black text-base font-semibold ">Smith</div>
              <div class="text-black text-base font-semibold">12 Sept 2011</div>
              <div class="text-black text-base font-semibold ">12</div>
            </div>
          </div>
          <div class="h-80 p-3 flex-col justify-end items-start gap-3.5 flex">
            <div class="self-stretch h-80 p-5 bg-red-100 rounded-lg flex-col justify-start items-start gap-5 flex">
              <div class="justify-start items-center gap-3 inline-flex">
                <div class="w-10 h-10 p-2.5 bg-white rounded-2xl shadow justify-center items-center gap-2.5 flex">
                  <div class="w-6 h-6 relative"></div>
                </div>
                <div class="w-11 justify-center items-center gap-2.5 flex">
                  <div class="text-black text-base font-semibold ">
                    Goals
                  </div>
                </div>
              </div>
              <div class="self-stretch h-36 px-3 py-2 rounded-lg border border-pink-900 flex-col justify-start items-start gap-1 flex">
                <div class="self-stretch justify-between items-start inline-flex">
                  <div class="text-pink-900 text-base font-semibold ">
                    Articulation
                  </div>
                  <div class="w-6 h-6 relative origin-top-left rotate-180"></div>
                </div>
                <div class="flex-col justify-start items-start flex">
                  <div class="justify-start items-center gap-2 inline-flex">
                    <div class="w-5 h-5 flex-col justify-center items-center gap-2 inline-flex">
                      <img
                        class="w-4 h-4"
                        src="https://via.placeholder.com/16x16"
                        alt=""
                      />
                    </div>
                    <div class="text-stone-500 text-sm font-normal  leading-normal tracking-tight">
                      Sound
                    </div>
                  </div>
                  <div class="pl-2.5 pr-0.5 justify-start items-start gap-0.5 inline-flex">
                    <div class="w-32 h-7 relative">
                      <div class="w-28 h-6 left-[14px] top-[4px] absolute justify-start items-center gap-1 inline-flex">
                        <div class="w-5 h-5 flex-col justify-center items-center gap-2 inline-flex">
                          <img
                            class="w-4 h-4"
                            src="https://via.placeholder.com/16x16"
                            alt=""
                          />
                        </div>
                        <div class="text-stone-500 text-sm font-normal  leading-normal tracking-tight">
                          Goal selection
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="justify-start items-center gap-2 inline-flex">
                    <div class="w-5 h-5 flex-col justify-center items-center gap-2 inline-flex">
                      <img
                        class="w-4 h-4"
                        src="https://via.placeholder.com/16x16"
                        alt=""
                      />
                    </div>
                    <div class="text-stone-500 text-sm font-normal  leading-normal tracking-tight">
                      Consonant Clusters
                    </div>
                  </div>
                  <div class="pl-2.5 pr-0.5 justify-start items-start gap-0.5 inline-flex">
                    <div class="w-32 h-7 relative">
                      <div class="w-28 h-6 left-[14px] top-[4px] absolute justify-start items-center gap-1 inline-flex">
                        <div class="w-5 h-5 flex-col justify-center items-center gap-2 inline-flex">
                          <img
                            class="w-4 h-4"
                            src="https://via.placeholder.com/16x16"
                            alt=""
                          />
                        </div>
                        <div class="text-stone-500 text-sm font-normal  leading-normal tracking-tight">
                          Goal selection
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="self-stretch h-10 px-3 py-2 rounded-lg border border-pink-900 flex-col justify-start items-start gap-1 flex">
                <div class="self-stretch justify-between items-start inline-flex">
                  <div class="text-pink-900 text-base font-semibold ">
                    Articulation
                  </div>
                  <div class="w-6 h-6 relative"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="p-6 bg-white rounded-2xl shadow flex-col justify-start items-start gap-5 inline-flex w-full">
          <div class="text-teal-500 text-2xl font-semibold py-2">
            IEP Information
          </div>
          <div className="flex flex-col sm:flex-row gap-6 w-full">
            <FormInput title="Date of Evaluation" type="text" />
            <FormInput title="Oral Mechanism Examination" type="text" />
          </div>
          <div className="flex flex-col sm:flex-row gap-6 w-full mt-7">
            <FormInput title="ICD-10/Diagnosis" type="text" />
            <FormInput title="Informal Assessment" type="text" />
          </div>
          <div className="flex flex-col sm:flex-row gap-6 w-full mt-7">
            <FormInput title="Behavioral Observation" type="text" />
            <FormInput title="Formal Assessment" type="text" />
          </div>
          <div className="flex flex-col sm:flex-row gap-6 w-1/2 mt-7">
            <FormInput title="Hearing Screening" type="text" />
          </div>
          <div className="w-1/2">
            <Button buttonText="Save IEP Information" className="mt-10 " />
          </div>
        </div>
      </div>
  );
};
export default StudentQuestions;
