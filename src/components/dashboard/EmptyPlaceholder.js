import React from "react";
import DashboardLayout from "../layout/DashboardLayout";
import Button from "../../components/widget/Button";
import EmptyPlaceholderSvg from "../../components/svg/EmptyPlaceholderSvg";

const EmptyPlaceholder = () => {
  return (
    <DashboardLayout>
    <div className="flex justify-center items-center p-24">
        <EmptyPlaceholderSvg />
    </div>
    </DashboardLayout>
  );
};
export default EmptyPlaceholder;
