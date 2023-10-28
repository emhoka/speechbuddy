import React from "react";
import PropTypes from "prop-types";
const AuthImageCard = ({ authImage }) => {
  return (
    <div
      className="flex-1 rounded-3xl relative"
      style={{
        backgroundImage: `url(${authImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="absolute inset-0 bg-green mix-blend-multiply rounded-3xl"
        style={{ zIndex: 1 }}
      ></div>
    </div>
  );
};
AuthImageCard.propTypes = {
  authImage: PropTypes.string,
};

export default AuthImageCard;
