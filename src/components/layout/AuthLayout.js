import React, { ReactNode } from "react";
import Logo from "../../assets/images/speechy-buddy-logo.png";
import AuthImageCard from "../card/AuthImageCard";
import AuthButtons from "../widget/AuthButtons";
import PropTypes from "prop-types";


const AuthLayout = ({children, heading, authWithGoogle, authWithOffice, authWithClassLink, authWithFacebook, authImage}) => {
  return (
    <div className="min-h-screen text-gray-900 flex justify-center font-DMSans p-4">
      <div className="max-w-full m-0 bg-white sm:rounded-lg flex flex-col lg:flex-row justify-center flex-1">
        <div className="lg:w-1/2 xl:w-7/12 p-6 sm:p-12">
          <div>
            <img src={Logo} className="w-mx-auto" alt="logo" />
          </div>
          <div className="text-center">
            <div className="leading-none px-2 mt-9 mb-1 font-bold inline-block text-xl text-gray-900 bg-white transform translate-y-1/2">
              {heading}
            </div>
          </div>
          <div className="flex items-center font-semibold px-10">
            <div className="w-full mt-8">
            <AuthButtons authWithGoogle={authWithGoogle} authWithOffice={authWithOffice}  authWithClassLink={authWithClassLink}  authWithFacebook={authWithFacebook} />
              <div className="my-7 text-center relative">
                <div
                  className="border-b-2 border-green mx-auto sm:mx-64 absolute left-0 right-0 top-1/2"
                  style={{ transform: "translateY(-50%)" }}
                ></div>
                <div className="leading-none px-4 inline-block text-md text-gray-900 font-bold bg-white relative z-10">
                  OR
                </div>
              </div>

              <div className="mx-auto max-w-full md:px-3 h-80 max-h-80">
              {children}
              </div>
            </div>
          </div>
        </div>
        <AuthImageCard authImage={authImage} />
      </div>
    </div>
  );
};

AuthLayout.propTypes = {
    heading: PropTypes.string,
    children: ReactNode,
    authWithGoogle: PropTypes.func,
    authWithOffice: PropTypes.func,
    authWithClassLink: PropTypes.func,
    authWithFacebook: PropTypes.func,
    authImage: PropTypes.string, 
  };

export default AuthLayout;
