import React, { useState } from "react";
import Footer from "../Components/Footer";
import VideosSection from "../Components/VideoSection";
import InternationalWeddingPlanner from "../Components/InternationalWeddingPlanner";

import WelcomeSection from "../Components/WelcomeSection";
import Carousel from "../Components/Carousel";
import AppNavbar from "../Components/AppNavbar";
import Container from "../Components/Container";
import OurServices from "../Components/OurServices";
import Service from "../Components/OurServices";

const HomePage = () => {
  const [data, setData] = useState([]);
  return (
    <>
      <AppNavbar data={data} setData={setData} />
      <Carousel />
      <WelcomeSection />
      <Service />
      <InternationalWeddingPlanner />
      <Container data={data} setData={setData} />
      <VideosSection />

      <Footer />
    </>
  );
};

export default HomePage;
