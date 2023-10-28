import React from "react";
import RoleButton from "./RoleButton"; 
import ArrowSvg from "../svg/ArrowSvg";
import PropTypes from "prop-types";

const buttonData = [
  { title: "Speech Language Pathologist", onClick: "selectPathologistRole" },
  { title: "Teacher", onClick: "selectTeacherRole" },
  { title: "CareGiver", onClick: "selectCareGiverRole" },
  { title: "Student", onClick: "selectStudentRole" },
];

const RoleButtons = ({ onClick  }) => {
  return (
    <div>
      {buttonData.map((button, index) => (
        <RoleButton 
          key={index} 
          title={button.title}
          onClick={() => onClick(button.onClick)} 
        >
          <ArrowSvg />
        </RoleButton>
      ))}
    </div>
  );
};

RoleButtons.propTypes = {
  onClick: PropTypes.func,
}

export default RoleButtons;
