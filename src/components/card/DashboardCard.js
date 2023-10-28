import React, {useState} from "react";
import userProfileImage from "../../../src/assets/images/girl-doing-homework-or-online-education.png";
import { useNavigate } from "react-router-dom";
import Goal from "../svg/Goal";
import DateSvg from "../svg/DateSvg";
import TimeSvg from "../svg/TimeSvg";
import Button from "../widget/Button";

const Dashboardcard = ({studentDetails}) => {
  const navigate = useNavigate();
  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleSelectStudent = (student) => {
    setSelectedStudent(student);
  };
  return (
    <div className="md:grid md:grid-cols-1 xl:grid-cols-3 gap-7 px-24">
      {studentDetails && studentDetails.length > 0
        ? studentDetails.map((data, index) => {
            return (
              <div className="w-72 h-96 bg-white rounded-2xl shadow flex-col justify-start items-start inline-flex">
                <div className="w-72 px-6 pt-6 pb-3 rounded-tl-2xl rounded-tr-2xl border-b border-zinc-100 justify-start items-center gap-2.5 inline-flex">
                  <div className="grow shrink basis-0 h-12 justify-start items-center gap-2.5 flex">
                    <div className="w-9 h-9 justify-start items-center gap-2.5 flex">
                      <img
                        className="grow shrink basis-0 self-stretch  rounded-3xl justify-center items-center gap-2.5 flex"
                        src={userProfileImage} alt="img"
                      />
                    </div>
                    <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                      <div className="self-stretch text-black text-xl font-bold ">
                        {data.student.first_name} {data.student.last_name}
                      </div>
                      <div className="self-stretch h-5 text-black text-xs font-normal  leading-snug">
                       {data.student.diagnosis}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-28 px-3 pt-3 flex-col justify-start items-start gap-1.5 flex">
                  <div className="self-stretch h-24  p-3 bg-red-100 rounded-lg flex-col justify-start items-start gap-1.5 flex">
                    <div className="h-3 justify-center items-center gap-2.5 inline-flex">
                      <div className="text-black text-xs font-bold  leading-snug">
                        Goal
                      </div>
                    </div>
                    <div className="self-stretch justify-start items-center gap-2 inline-flex">
                      <div className="w-10 h-10 p-2.5 bg-white rounded-2xl justify-center items-center gap-2.5 flex">
                        <Goal />
                      </div>
                      <div className="grow shrink overflow-y-auto basis-0 h-12 text-black text-xs font-normal  leading-snug">
                        {data.goal.description}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-32 px-4 py-5 border-b border-zinc-100 flex-col justify-start items-start gap-3 flex">
                  <div className="w-60 justify-between items-start inline-flex">
                    <div className="flex-col justify-start items-start gap-2 inline-flex">
                      <div className="text-neutral-700 text-xs font-bold  leading-snug">
                        Next Appointment
                      </div>
                      <div className="h-8 p-2 bg-teal-500 bg-opacity-10 rounded-lg border border-teal-500 justify-start items-center gap-1 inline-flex">
                        <div className="w-4 h-4 justify-center items-center gap-2.5 flex">
                          <div className="w-4 h-4 relative">
                            <DateSvg />
                          </div>
                        </div>
                        <div className="text-black text-xs font-bold  leading-snug">
                         {data.appointment.appointedTime}
                        </div>
                      </div>
                    </div>
                    <div className="flex-col justify-start items-start gap-2 inline-flex">
                      <div className="text-neutral-700 text-xs font-bold  leading-snug">
                        Appointed Time{" "}
                      </div>
                      <div className="h-8 p-2 bg-teal-500 bg-opacity-10 rounded-lg border border-teal-500 justify-start items-center gap-1 inline-flex">
                        <div className="w-4 h-4 justify-center items-center gap-2.5 flex">
                          <div className="w-4 h-4 relative">
                            <TimeSvg />
                          </div>
                        </div>
                        <div className="text-black text-xs font-bold  leading-snug">
                         {data.appointment.nextAppointmentDate}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="justify-start items-center gap-2 inline-flex">
                    <div className="text-neutral-700 text-xs font-bold  leading-snug">
                      Repeat:
                    </div>
                    <div className="text-neutral-400 text-xs font-normal  leading-snug">
                    {data.appointment.weekly}
                    </div>
                  </div>
                </div>
                <div className="w-72 px-6 justify-between items-center inline-flex gap-3 py-3">
                  <Button
                    buttonText="Start session"
                    className="w-36 text-white bg-pink-900 rounded-lg shadow border border-pink-900"
                    onClick={() => {
                      handleSelectStudent(data);
                      navigate(`/therapist/student`);
                    }}
                  />
                  <Button
                    buttonText="View"
                    className="w-24 bg-transparent text-teal-500 rounded-lg border border-teal-500"
                    onClick={() => {
                      handleSelectStudent(data);
                      navigate(`/therapist/student`);
                    }}
                  />
                </div>
              </div>
            );
          })
        : ""}
    </div>
  );
};
export default Dashboardcard;
