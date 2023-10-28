import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Auth
import Login from "./pages/registration/Login";
import Registration from "./pages/registration/Registration";


//User Registration
const SelectRole = React.lazy(() => import("./pages/registration/SelectRole"));
const VerifyCareGiver = React.lazy(() =>
  import("./pages/registration/VerifyCareGiver")
);
const VerifyStudent = React.lazy(() =>
  import("./pages/registration/VerifyStudent")
);
const VerifyTeacher = React.lazy(() =>
  import("./pages/registration/VerifyTeacher")
);
const VerifyTherapist = React.lazy(() =>
  import("./pages/registration/VerifyTherapist")
);
const Kudos = React.lazy(() => import("./pages/registration/Kudos"));
const VerifyStudentAge = React.lazy(() =>
  import("./pages/registration/VerifyStudentAge")
);
const CheckEmail = React.lazy(() => import("./pages/registration/CheckEmail"));

//Dashboard Therapist
const Dashboard = React.lazy(() =>
  import("./pages/dashboard/therapist/Dashboard")
);
const TherapistView = React.lazy(() =>
  import("./pages/dashboard/therapist/TherapistView")
);
const EmptyPlaceholder = React.lazy(() =>
  import("./components/dashboard/EmptyPlaceholder")
);

const App = () => {
  return (
    <BrowserRouter className="font-DMSans bg-lightPink">
      <Routes>
        {/* Auth */}
        <Route path="/" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/role" element={<SelectRole />} />
        <Route path="/caregiver" element={<VerifyCareGiver />} />
        <Route path="/teacher" element={<VerifyTeacher />} />
        <Route path="/therapist" element={<VerifyTherapist />} />
        <Route path="/student" element={<VerifyStudent />} />
        <Route path="/verifystudentage" element={<VerifyStudentAge />} />
        <Route path="/kudos" element={<Kudos />} />
        <Route path="/checkemail" element={<CheckEmail />} />

        {/* Therapist View */}
        <Route path="/therapist/student" element={<TherapistView />} />
        <Route path="/therapist/dashboard" element={<Dashboard />} />
        <Route path="/therapist/emptyplaceholder" element={<EmptyPlaceholder />} />

      </Routes>
    </BrowserRouter>
  );
};
export default App;
