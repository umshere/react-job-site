import React from "react";
import JobListings from "../components/JobListings";

function JobsPage() {
  return (
    <section>
      <JobListings isHome={false}></JobListings>
    </section>
  );
}

export default JobsPage;
