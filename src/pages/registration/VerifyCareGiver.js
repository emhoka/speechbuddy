import React from "react";
import FormInput from "../../components/widget/FormInput";
import Button from "../../components/widget/Button";
import AccountCreationLayout from "../../components/layout/AccountCreationLayout";
import authImage from "../../assets/images/parents-with-daughter-using-tablet-relaxing-at-hom.png";
const VerifyCareGiver = () => {
  const heading ="You're almost there";
  const subHeading ="You need to claim a student.";
  return (
    <AccountCreationLayout heading={heading} subheading={subHeading} authImage={authImage}>
    <div>
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <FormInput title="Student's first name" type="text" />
        <FormInput title="Student's email" type="text" />
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mt-7">
        <FormInput title="Student's last name" type="text" />
        <FormInput title="School district" type="text" />
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mt-7">
        <FormInput title="Student's Date of Birth" type="text" />
        <FormInput title="School district" type="text" />
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mt-7">
       <Button buttonText="Next" className="text-white" />
      </div>
    </div>
    </AccountCreationLayout>
  );
};
export default VerifyCareGiver;
