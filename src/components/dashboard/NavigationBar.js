import React from "react";
import NotificationSvg from "../svg/NotificationSvg";
import QuestionSvg from "../svg/QuestionSvg";
import FormInput from "../widget/FormInput";
import Button from "../widget/Button";

const NavigationBar = () => {
    return (
      <header>
      <div className="bg-pink w-full p-2 flex items-end justify-end">
        <div className="flex space-x-1 items-center">
          <FormInput className="bg-transparent border-2 border-meroon" />
          <Button icon={<NotificationSvg />} className="bg-transparent w-20 h-12 hover:bg-transparent"/>
          <Button icon={<QuestionSvg />} className="bg-transparent w-20 h-12 hover:bg-transparent"/>
        </div>
      </div>
    </header>
    );
  };
  export default NavigationBar;