// src/Pages/HomeBlog.js
import React from "react";
import ContactMe from "../Components/ContactMe";
import Head from "../Components/Head";
import HomeBlogFooter from "./Blogs/HomeBlogFooter";
import HomeBlogHeader from "./Blogs/HomeBlogHeader";
import HomeBlogList from "./Blogs/HomeBlogList";
import HomeSection from "../Components/HomeSection";

function HomeBlog() {
  return (
    <div>
      <head>
        <Head />
      </head>
      <body>
        <HomeBlogHeader />
        <main className="main">
        <HomeSection imgUrl={"/img/ava/me_gooner.jpg"} profession={"Data Servant"}/>
          <HomeBlogList />
          <ContactMe />
        </main>
        <HomeBlogFooter />
      </body>
    </div>
  );
}

export default HomeBlog;
