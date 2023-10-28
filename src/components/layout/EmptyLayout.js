import React, { ReactNode } from "react";

import Logo from "../../assets/images/speechy-buddy-logo.png";
import PropTypes from "prop-types";
const EmptyLayout = ({ children }) => {
  return (
    <div className="min-h-screen text-gray-900 font-DMSans p-10">
      <div className="max-w-full bg-white ">
          <div className="object-start">
            <img src={Logo} className="w-mx-auto justify-end" alt="logo" />
          </div>
          <div className="justify-center items-center">
                {children}
          </div>
      </div>
    </div>
  );
};

EmptyLayout.propTypes = {
  heading: PropTypes.string,
  subheading: PropTypes.string,
  children: ReactNode,
};

export default EmptyLayout;
