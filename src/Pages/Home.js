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

function Home() {
  return (
    <div>
      <head>
        <Head />
      </head>
      <body>
        <Header />
        <main className="main">
          <HomeSection imgUrl={"/img/ava/me_nba.jpg"} />
          <MyInfo />
          <CurrentProjects />
          <Projects />
          <Services />
          <ContactMe />
        </main>
        <Footer />
      </body>
    </div>
  );
}

export default Home;
