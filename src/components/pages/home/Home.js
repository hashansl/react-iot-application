import React from "react";
import Footer from "../../footer/Footer";
import HeroSection from "../../HeroSection";
import { homeObjOne } from "./Data";

function Home() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <Footer />
    </>
  );
}

export default Home;
