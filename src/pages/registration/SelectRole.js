import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AccountCreationLayout from "../../components/layout/AccountCreationLayout";
import authImage from "../../assets/images/speech-training-concept-little-girl-uses-a-laptop.png";
import RoleButtons from "../../components/widget/RoleButtons";
import { useSearchParams } from "react-router-dom";
const SelectRole = () => {
  const params = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const [getUserById, setGetUserById] = useState();
  const [selectedRole, setSelectedRole] = useState("");

  useEffect(() => {
    fetch("" + params.id)
      .then((response) => response.json())
      .then((data) => {
        setGetUserById(data);
        console.log(params.id);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params.id]);

  const selectPathologistRole = () => {
    setSelectedRole("Pathologist");
  };

  const selectTeacherRole = () => {
    setSelectedRole("Teacher");
  };

  const selectCareGiverRole = () => {
    setSelectedRole("CareGiver");
  };
  
  const selectStudentRole = () => {
    setSelectedRole("Student");
  };

  return (
    <AccountCreationLayout authImage={authImage} authImageOnRight={false}>
      <div className="px-28">
        <div className="h-60 flex flex-col justify-start items-start">
          <div className="w-80 text-gray-800 text-4xl font-semibold break-words">
            Welcome, {selectedRole}
          </div>
          <p className="font-normal py-3 text-base">
            Pick the option that vibes with your role
            <br /> the most.
          </p>
          <RoleButtons
            onClick={(role) => {
              switch (role) {
                case "selectPathologistRole":
                  selectPathologistRole(); 
                  break;
                case "selectTeacherRole":
                  selectTeacherRole(); 
                  break;
                case "selectCareGiverRole":
                  selectCareGiverRole(); 
                  break;
                case "selectStudentRole":
                  selectStudentRole(); 
                  break;
                default:
                  break;
              }
            }}
          />
        </div>
      </div>
    </AccountCreationLayout>
  );
};
export default SelectRole;

// http://localhost:3000/role?session=66c6b8b6-251f-4722-be0e-45f372e171ba/username?user=Barna
