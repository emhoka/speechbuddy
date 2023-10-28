import React from "react";
import Button from "../../components/widget/Button";
import AccountCreationLayout from "../../components/layout/AccountCreationLayout";
import authImage from "../../assets/images/speech-training-concept-little-girl-uses-a-laptop.png";
import FormInput from "../../components/widget/FormInput";
const VerifyStudentAge = () => {
  return (
    <AccountCreationLayout authImage={authImage}  >
      <div className="px-28">
        <div className="flex flex-col justify-start items-start mb-12">
          <div className="w-80 text-red-600 text-3xl font-semibold break-words">
            Hey Buddy
          </div>
          <div className="w-252 text-black text-base font-normal font-DMSans leading-7 break-words">
            We need to verify your age.
          </div>
        </div>
        <FormInput title="Date of Birth" />
        <div className="flex flex-col sm:flex-row w-inherit mt-4">
          <Button buttonText="Next" />
        </div>
      </div>
    </AccountCreationLayout>
  );
};
export default VerifyStudentAge;
