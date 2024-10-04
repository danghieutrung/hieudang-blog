// src/Pages/ErrorPage.js
import React from "react";
import Head from "../Components/Head";
import ErrorHeader from "../Components/ErrorHeader";
import HomeSection from "../Components/HomeSection";

const ErrorPage = () => {
  return (
    <div>
      <Head />
      <ErrorHeader />
      <main className="main">
        <HomeSection imgUrl={"/img/ava/me_little.jpg"}/>
        <section className="home section" id="home">
          Page not found. Go back to{" "}
          <a href="/">
            <b>Main Page</b>
          </a>
        </section>
      </main>
    </div>
  );
};

export default ErrorPage;
