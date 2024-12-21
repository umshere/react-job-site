import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import ViewAllJobs from "../components/ViewAllJobs";
import JobListings from "../components/JobListings";

function HomePage() {
  return (
    <>
      <Hero />
      <HomeCards />
      <JobListings isHome="true" />
      <ViewAllJobs />
    </>
  );
}

export default HomePage;
