import React, { ReactNode } from "react";
import Logo from "../../assets/images/speechy-buddy-logo.png";
import AuthImageCard from "../card/AuthImageCard";
import PropTypes from "prop-types";
const AccountCreationLayout = ({children, heading, subheading, authImage, authImageOnRight = true }) => {
  return (
    <div className="min-h-screen text-gray-900 flex justify-center font-DMSans p-4">
      <div className="max-w-full m-0 bg-white sm:rounded-lg flex flex-col lg:flex-row justify-center flex-1">
      {!authImageOnRight && (
          <AuthImageCard authImage={authImage} />
        )}
        <div className="lg:w-1/2 xl:w-7/12 p-6 sm:p-12">
          <div>
            <img src={Logo} className="w-mx-auto" alt="logo" />
          </div>
          <div className="text-start px-10 mb-3">
            <div className="leading-none px-2 mt-9 mb-1 font-bold inline-block text-2xl text-gray-900 bg-white transform translate-y-1/2">
              {heading}
            </div>
            <p className="font-normal mt-5 text-md px-2">{subheading}</p>
          </div>
          <div className="flex items-center font-semibold px-10">
            <div className="w-full mt-8">
              <div className="mx-auto max-w-full md:px-3 h-80 min-h-80 mt-7">
              {children}
              </div>
            </div>
          </div>
        </div>
        
        {authImageOnRight && (
          <AuthImageCard authImage={authImage} />
        )}
      </div>
    </div>
  );
};

AccountCreationLayout.propTypes = {
  heading: PropTypes.string,
  subheading: PropTypes.string,
  children: ReactNode,
  authImage: PropTypes.string, 
  authImageOnRight: PropTypes.bool,
};

export default AccountCreationLayout;
