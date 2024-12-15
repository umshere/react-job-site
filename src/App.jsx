import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";

function App() {
  return (
    <>
      <Navbar />

      {/* <!-- Hero --> */}
      <Hero
        title="Shanku is SMART PCG "
        subtitle="Find the React job that fits your skills and needs"
      />
      <HomeCards />
    </>
  );
}

export default App;
