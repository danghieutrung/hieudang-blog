// src/Pages/Home.js
import React from "react";
import ContactMe from "../Components/ContactMe";
import Head from "../Components/Head";
import Header from "../Components/Header";
import HomeSection from "../Components/HomeSection";
import Footer from "../Components/Footer";
import MyInfo from "../Components/MyInfo";
import CurrentProjects from "../Components/CurrentProjects";
import Projects from "../Components/Projects";
import Services from "../Components/Services";
import ScrollUpButton from "../Components/ScrollUpButton";

function Home() {
  return (
    <div>
      <Head />
      <Header />
      <main className="main">
        <HomeSection
          imgUrl={"/img/ava/me_nba.jpg"}
          profession={"Data Analyst"}
        />
        <MyInfo />
        <CurrentProjects />
        <Projects />
        <Services />
        <ContactMe />
      </main>
      <Footer />
      <ScrollUpButton />
    </div>
  );
}

export default Home;
