// src/Pages/ErrorPage.js
import React from "react";
import Head from "../Components/Head";
import Header from "../Components/Header";

const ErrorPage = () => {
  return (
    <div>
      <Head />
      <Header navLogo="/"/>
      <main className="main">
        <section className="home section" id="home">
          Page not found. Go back to{" "}
          <a href="/" target="_blank" rel="noopener noreferrer">
            <b>Main Page</b>
          </a>
        </section>
      </main>
    </div>
  );
};

export default ErrorPage;
