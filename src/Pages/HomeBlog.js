// src/Pages/HomeBlog.js
import React from "react";
import ContactMe from "../Components/ContactMe";
import Head from "../Components/Head";
import HomeBlogFooter from "./Blogs/HomeBlogFooter";
import HomeBlogHeader from "./Blogs/HomeBlogHeader";
import HomeBlogList from "./Blogs/HomeBlogList";
import HomeSection from "../Components/HomeSection";
import ScrollUpButton from "../Components/ScrollUpButton";

function HomeBlog() {
  return (
    <div>
      <Head />
      <HomeBlogHeader />
      <main className="main">
        <HomeSection
          imgUrl={"/img/ava/me_lkc.jpg"}
          profession={"Data Analyst"}
        />
        <HomeBlogList />
        <ContactMe />
      </main>
      <HomeBlogFooter />
      <ScrollUpButton />
    </div>
  );
}

export default HomeBlog;
