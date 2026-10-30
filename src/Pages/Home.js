// src/Pages/Home.js
import React from "react";
import ContactMe from "../Components/ContactMe";
import Head from "../Components/Head";
import SiteHeader from "../Components/SiteHeader";
import HomeSection from "../Components/HomeSection";
import Footer from "../Components/Footer";
import MyInfo from "../Components/MyInfo";
import Experience from "../Components/Experience";
import Projects from "../Components/Projects";
import Services from "../Components/Services";
import ScrollUpButton from "../Components/ScrollUpButton";

const links = [
  { href: "#home", label: "Home" },
  { href: "#info", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
  { href: "/blogs/", label: "Blog", external: true },
];

function Home() {
  return (
    <div>
      <Head />
      <SiteHeader links={links} />
      <main className="main">
        <HomeSection
          imgUrl={"/img/ava/me_nba.jpg"}
          profession={"Environmental consultant · Data & AI"}
        />
        <MyInfo />
        <Experience />
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
