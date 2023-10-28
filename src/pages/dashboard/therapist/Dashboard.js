import React from "react";
import DashboardLayout from "../../../components/layout/DashboardLayout";
import DashboardCard from "../../../components/card/DashboardCard";
import Button from "../../../components/widget/Button";

const studentDetails = [
  {
    student: {
      id: "A001",
      first_name: "Taylor",
      last_name: "Morgan",
      diagnosis: "Receptive language disorder",
    },
    goal: {
      description:
        "Improve receptive language skills to facilitate functional communication and play.",
    },
    appointment: {
      nextAppointmentDate: "3 Oct 2023",
      appointedTime: "08:35 am",
      repeat: "Weekly",
    },
  },
  {
    student: {
      id: "A002",
      first_name: "Student",
      last_name: "Two",
      diagnosis: "Receptive language disorder",
    },
    goal: {
      description:
        "Improve receptive language skills to facilitate functional communication and play.",
    },
    appointment: {
      nextAppointmentDate: "3 Oct 2023",
      appointedTime: "08:35 am",
      repeat: "Weekly",
    },
  },
  {
    student: {
      id: "A003",
      first_name: "Student",
      last_name: "Three",
      diagnosis: "Receptive language disorder",
    },
    goal: {
      description:
        "Improve receptive language skills to facilitate functional communication and play.",
    },
    appointment: {
      nextAppointmentDate: "3 Oct 2023",
      appointedTime: "08:35 am",
      repeat: "Weekly",
    },
  },
  {
    student: {
      id: "A004",
      first_name: "Student",
      last_name: "Four",
      diagnosis: "Receptive language disorder",
    },
    goal: {
      description:
        "Improve receptive language skills to facilitate functional communication and play.",
    },
    appointment: {
      nextAppointmentDate: "3 Oct 2023",
      appointedTime: "08:35 am",
      repeat: "Weekly",
    },
  },
  {
    student: {
      id: "A005",
      first_name: "Student",
      last_name: "Five",
      diagnosis: "Receptive language disorder",
    },
    goal: {
      description:
        "Improve receptive language skills to facilitate functional communication and play. Improve receptive language skills to facilitate functional communication and play. Improve receptive language skills to facilitate functional communication and play.",
    },
    appointment: {
      nextAppointmentDate: "3 Oct 2023",
      appointedTime: "08:35 am",
      repeat: "Weekly",
    },
  },
  {
    student: {
      id: "A005",
      first_name: "Student",
      last_name: "Six",
      diagnosis: "Receptive language disorder",
    },
    goal: {
      description:
        "Improve receptive language skills to facilitate functional communication and play.",
    },
    appointment: {
      nextAppointmentDate: "3 Oct 2023",
      appointedTime: "08:35 am",
      repeat: "Weekly",
    },
  },
];

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="flex justify-end items-end px-4 mb-10">
        <div className="w-40">
          <Button buttonText="Add student" className="text-white" />
        </div>
      </div>
      <DashboardCard studentDetails={studentDetails} />
    </DashboardLayout>
  );
};
export default Dashboard;
