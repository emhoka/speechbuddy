import React, { ReactNode } from "react";
import PropTypes from "prop-types";

const AuthButton = ({ title, id, name, onClick, children }) => {
  const buttonClasses =
    "w-full max-w-xs rounded-lg py-2 px-2 bg-white border-2 border-green text-gray-900 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline";

  const boxShadow = {
    boxShadow: "0px 4px 12px -2px rgba(20, 200, 171, 0.2)",
  };
  return (
    <button
      style={boxShadow}
      className={buttonClasses}
      id={id}
      onClick={onClick}
      name={name}
    >
      <div className="bg-white p-2 rounded-full">{children}</div>
      <span className="ml-1">{title}</span>
    </button>
  );
};

AuthButton.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func,
  children: ReactNode,
};

export default AuthButton;