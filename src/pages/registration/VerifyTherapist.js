import React from "react";
import FormInput from "../../components/widget/FormInput";
import Button from "../../components/widget/Button";
import AccountCreationLayout from "../../components/layout/AccountCreationLayout";
import authImage from "../../assets/images/pretty-little-black-girl-attending-speech-therapy.png";
const VerifyTherapist = () => {
  const heading ="You're almost in your buddy zone";
  const subHeading ="We need to verify you";
  return (
   <AccountCreationLayout heading={heading} subheading={subHeading} authImage={authImage}>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <FormInput title="First name" type="text" />
        <FormInput title="City/State" type="text" />
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mt-7">
        <FormInput title="Last name" type="text" />
        <FormInput title="School district" type="text" />
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mt-7">
        <FormInput title="Licesce number" type="text" />
        <FormInput title="School district" type="text" />
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mt-7">
       <Button buttonText="Next" className="text-white" />
      </div>
    </AccountCreationLayout>
  );
};
export default VerifyTherapist;
