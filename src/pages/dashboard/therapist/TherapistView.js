import React, {useState} from "react";
import { useParams } from "react-router-dom";
import DashboardLayout from "../../../components/layout/DashboardLayout";
import "../../../assets/css/style.css";
import StudentIEP from "../../../components/dashboard/therapist/StudentIEP";
import SessionContent from "../../../components/dashboard/therapist/SessionContent";

const TherapistView = () => {
  const params = useParams();
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [userId, setUserId] = useState(params.id);
  const tabPanels = [
    { header: "Profile", content: <StudentIEP /> },
    { header: "Session", content: <SessionContent /> },
    { header: "Progress", content: <StudentIEP /> },
  ];

  return (
    <DashboardLayout showTabView={true} tabPanels={tabPanels}>
      {tabPanels[activeTabIndex].content}
    </DashboardLayout>
  );
};

export default TherapistView;
