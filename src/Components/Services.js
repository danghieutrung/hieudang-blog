// src/Components/Services.js
import React from "react";

const Services = () => {
  return (
    <section className="services section" id="services">
      <h2 className="section__title">SERVICES</h2>

      <div className="services__container container grid">
        <article className="services__card">
          <i className="ri-code-box-line services__icon"></i>

          <h3 className="services__title">Data Preprocessing and Modelling</h3>
          <p className="services__description">
            Large, multi-table data cleaning and modelling
          </p>
        </article>

        <article className="services__card">
          <i className="ri-pencil-ruler-2-line services__icon"></i>

          <h3 className="services__title">Data Analysis and Visualization</h3>
          <p className="services__description">
            Statistical analysis & data visualizations
          </p>
        </article>

        <article className="services__card">
          <i className="ri-layout-2-line services__icon"></i>

          <h3 className="services__title">BI Tools</h3>
          <p className="services__description">
            Experience with Excel, Tableau, and Power BI
          </p>
        </article>

        <article className="services__card">
          <i className="ri-seo-line services__icon"></i>

          <h3 className="services__title">ML/AI</h3>
          <p className="services__description">Experience with AI in CV and NLP</p>
        </article>
      </div>
    </section>
  );
};

export default Services;
