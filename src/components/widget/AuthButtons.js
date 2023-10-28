import React from "react";
import AuthButton from "./AuthButton";
import ClassLinkSvg from "../svg/ClassLink";
import OfficeSvg from "../svg/Office";
import GoogleSvg from "../svg/Google";
import FacebookSvg from "../svg/Facebook";
import PropTypes from "prop-types";

const buttonData = [
  { title: "ClassLink", icon: <ClassLinkSvg />, onClick: "authWithClassLink" },
  { title: "Office 365", icon: <OfficeSvg />, onClick: "authWithOffice" },
  { title: "Google", icon: <GoogleSvg />, onClick: "authWithGoogle" },
  { title: "Facebook", icon: <FacebookSvg />, onClick: "authWithFacebook" },
];

const AuthButtons = ({
  authWithGoogle,
  authWithOffice,
  authWithClassLink,
  authWithFacebook,
}) => {
  return (
    <div className="flex flex-col sm:flex-row justify-start items-start gap-3 text-sm">
      {buttonData.map((button, index) => (
        <AuthButton
          key={index}
          title={button.title}
          onClick={
            button.onClick === "authWithGoogle"
              ? authWithGoogle
              : button.onClick === "authWithOffice"
              ? authWithOffice
              : button.onClick === "authWithClassLink"
              ? authWithClassLink
              : authWithFacebook
          }
        >
          {button.icon}
        </AuthButton>
      ))}
    </div>
  );
};

AuthButtons.propTypes = {
  authWithClassLink: PropTypes.func,
  authWithOffice: PropTypes.func,
  authWithGoogle: PropTypes.func,
  authWithFacebook: PropTypes.func,
};
export default AuthButtons;
