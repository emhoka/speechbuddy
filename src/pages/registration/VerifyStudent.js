import React from "react";
import { Link} from "react-router-dom";
import Button from "../../components/widget/Button";
import AccountCreationLayout from "../../components/layout/AccountCreationLayout";
import authImage from "../../assets/images/speech-training-concept-little-girl-uses-a-laptop.png";
import FormInput from "../../components/widget/FormInput";
const VerifyStudent = () => {
  return (
    <AccountCreationLayout authImage={authImage}  authImageOnRight={false} >
      <div className="px-28">
        <div className="flex flex-col justify-start items-start mb-12">
          <div className="w-80 text-red-600 text-3xl font-semibold break-words">
            Oops!
          </div>
          <div className="w-252 text-black text-base font-normal font-DMSans leading-7 break-words">
            You are under 13😔.
            Alternatively give <br/>us your caregiver details so that they<br /> can create account for you.
          </div>
        </div>
        <FormInput title="Caregiver email" />
        <div className="flex flex-col sm:flex-row w-inherit mt-4">
          <Button buttonText="Next" />
        </div>
        <div className="mt-4 text-center">
        <Link to="/" className="text-meroon font-normal">
          Cancel
        </Link>
        </div>
      </div>
    </AccountCreationLayout>
  );
};
export default VerifyStudent;
