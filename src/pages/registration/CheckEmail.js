import React from "react";
import EmptyLayout from "../../components/layout/EmptyLayout";

const CheckEmail = () => {
  return (
    <EmptyLayout>
      <div className="flex justify-center items-center max-h-screen">
        <div className="text-center mt-40">
          <div className="text-gray-800 text-4xl font-semibold break-words">
            Kudos!
          </div>
          <div className="text-black text-base font-normal leading-7 break-words mb-12">
            Thank you for registering with us Check your inbox for verification link ! <br />
          </div>
          <div className="mx-auto"> 
          </div>
        </div>
      </div>
    </EmptyLayout>
  );
};

export default CheckEmail;