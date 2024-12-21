import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import ViewAllJobs from "../components/ViewAllJobs";
import JobListings from "../components/JobListings";

function MainLayout() {
  return (
    <>
      <Navbar />
      <Outlet></Outlet>
    </>
  );
}

export default MainLayout;
