import React, { ReactNode } from "react";
import PropTypes from "prop-types";

const RoleButton = ({ title, id, name, onClick, children }) => {
  return (
    <button className="w-[326px] cursor-pointer h-10 pl-5 pr-3 py-2.5 bg-white rounded-lg shadow border border-rose-400 justify-between items-center inline-flex mb-3"
      id={id}
      onClick={onClick}
      name={name}
        >
      <span className="text-black text-base font-semibold">{title}</span>
      <span className="rounded-sm justify-start items-center gap-2.5 flex">
        {children}
      </span>
    </button>
  );
};

RoleButton.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func,
  children: ReactNode,
};

export default RoleButton;
