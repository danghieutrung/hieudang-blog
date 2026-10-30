// src/Pages/ErrorPage.js
import React from "react";
import Head from "../Components/Head";
import Footer from "../Components/Footer";
import SiteHeader from "../Components/SiteHeader";

const ErrorPage = () => {
  return (
    <div>
      <Head title="Page not found · Dang Trung Hieu" />
      <SiteHeader links={[{ href: "/", label: "Home" }, { href: "/blogs/", label: "Blog" }]} />
      <main className="main">
        <section className="page-hero page-hero--center" id="home">
          <div className="container">
            <p className="section__eyebrow">404</p>
            <h1 className="page-hero__title">Page not found</h1>
            <p className="page-hero__lead">
              The page you're looking for doesn't exist or has moved.
            </p>
            <a href="/" className="button">
              Back to main page
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ErrorPage;
