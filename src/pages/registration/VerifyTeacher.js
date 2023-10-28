import React from "react";
import { Link} from "react-router-dom";
import Button from "../../components/widget/Button";
import AccountCreationLayout from "../../components/layout/AccountCreationLayout";
import authImage from "../../assets/images/girl-doing-homework-or-online-education.png";
const VerifyTeacher = () => {
  return (
    <AccountCreationLayout authImage={authImage}>
      <div className="px-28">
        <div className="h-60 flex flex-col justify-start items-start">
          <div className="w-80 text-red-600 text-3xl font-semibold break-words">
            Oops!
          </div>
          <div className="w-252 text-black text-base font-normal font-DMSans leading-7 break-words">
            At the moment, registration for <br />
            teachers is exclusively available <br /> through their school's
            ClassLink
            <br /> accounts. If you possess a school <br />
            ClassLink account, kindly
            <br /> proceed to register using it.
          </div>
        </div>
        <div className="flex flex-col sm:flex-row mx-auto">
          <Button buttonText="Register with school ClassLink" />
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
export default VerifyTeacher;
