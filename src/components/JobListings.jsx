import React from "react";
import jobsArr from "../assets/jobs.json";
import JobListing from "./JobListing";
import { useState, useEffect } from "react";
import { use } from "react";
import Spinner from "./Spinner";

function JobListings({ isHome = false }) {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const apiUri = isHome ? "/api/jobs?_limit=3" : "/api/jobs";
        const res = await fetch(apiUri);
        const jobs = await res.json();
        setJobs(jobs);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  return (
    <>
      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            {isHome ? "Recent jobs" : "Browse Jobs"}
          </h2>

          {/* <!-- Job Listings--> */}
          {loading ? (
            <Spinner loading={loading}></Spinner>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {jobs.map((job) => (
                <JobListing key={job.id} job={job}></JobListing>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default JobListings;
