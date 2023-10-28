import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/widget/Button";
import EmptyLayout from "../../components/layout/EmptyLayout";

const Kudos = () => {
  return (
    <EmptyLayout>
      <div className="flex justify-center items-center max-h-screen">
        <div className="text-center mt-40">
          <div className="text-gray-800 text-4xl font-semibold break-words">
            Kudos!
          </div>
          <div className="text-black text-base font-normal leading-7 break-words mb-12">
            You're all set and rockin' it! <br />
            Welcome aboard!🎉
          </div>
          <div className="mx-auto"> 
            <Button buttonText="Set up your profile" className="px-16" />
            <div className="mt-4 flex items-stretch justify-between">
              <Link to="/" className="text-meroon font-normal">
                Go to dashboard
              </Link>
              <Link to="/" className="text-meroon font-normal">
                Cancel
              </Link>
            </div>
          </div>
        </div>
      </div>
    </EmptyLayout>
  );
};

export default Kudos;
