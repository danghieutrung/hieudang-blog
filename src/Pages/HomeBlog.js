// src/Pages/HomeBlog.js
import React from "react";
import ContactMe from "../Components/ContactMe";
import Head from "../Components/Head";
import Footer from "../Components/Footer";
import SiteHeader from "../Components/SiteHeader";
import HomeBlogList from "./Blogs/HomeBlogList";
import ScrollUpButton from "../Components/ScrollUpButton";

const links = [
  { href: "#home", label: "Blog" },
  { href: "#contact", label: "Contact" },
];

function HomeBlog() {
  return (
    <div>
      <Head title="Blog · Dang Trung Hieu" />
      <SiteHeader links={links} back={{ href: "/", label: "Main page" }} />
      <main className="main">
        <section className="page-hero" id="home">
          <div className="container">
            <p className="section__eyebrow">Blog</p>
            <h1 className="page-hero__title">Notes on data, charts and music</h1>
            <p className="page-hero__lead">
              Personal data projects, written up with the charts that tell the
              story.
            </p>
          </div>
        </section>
        <HomeBlogList />
        <ContactMe />
      </main>
      <Footer />
      <ScrollUpButton />
    </div>
  );
}

export default HomeBlog;
