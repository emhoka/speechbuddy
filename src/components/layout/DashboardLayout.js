import React, { ReactNode, useState } from "react";
import NavigationBar from "../../components/dashboard/NavigationBar";
import Sidebar from "../../components/dashboard/Sidebar";
import { TabView, TabPanel } from "primereact/tabview";
import PropTypes from "prop-types";
import StudentIEP from "../dashboard/therapist/StudentIEP";
import SessionContent from "../dashboard/therapist/SessionContent";
import SessionInsights from "../../components/dashboard/therapist/SessionInsights";

const DashboardLayout = ({ children, showTabView, tabPanels }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex h-screen font-DMSans">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <NavigationBar />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-lightPink px-6 py-16 ml-60 h-96">
          {showTabView ? (
            <div className="card">
              <TabView
                activeIndex={activeIndex}
                onTabChange={(e) => setActiveIndex(e.index)}
              >
                {tabPanels.map((tab, index) => (
                  <TabPanel key={index} header={tab.header}>
                    {tab.header === "Profile" ? (
                      <StudentIEP />
                    ) : tab.header === "Session" ? (
                      <SessionContent />
                    ) : tab.header === "Progress" ? (
                      <SessionInsights />
                    ) : (
                      <StudentIEP />
                    )}
                  </TabPanel>
                ))}
              </TabView>
            </div>
          ) : (
            children
          )}
        </main>
      </div>
    </div>
  );
};

DashboardLayout.propTypes = {
  children: ReactNode,
  showTabView: PropTypes.bool.isRequired,
  tabPanels: PropTypes.arrayOf(
    PropTypes.shape({
      header: PropTypes.string.isRequired
    })
  ).isRequired,
};

export default DashboardLayout;
