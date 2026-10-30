// src/Components/Services.js
import React from "react";

const services = [
  {
    icon: "ri-smartphone-line",
    title: "Field data systems",
    description: "Mobile data collection apps, standardised databases and data architecture.",
  },
  {
    icon: "ri-flow-chart",
    title: "Automated pipelines",
    description: "Python and R pipelines for environmental analysis and exceedance detection.",
  },
  {
    icon: "ri-robot-2-line",
    title: "Ecological AI",
    description: "Camera trap ML, computer vision and LLM-assisted workflows.",
  },
  {
    icon: "ri-bar-chart-box-line",
    title: "Analysis and visualisation",
    description: "Statistical analysis, dashboards and GIS with Power BI, Tableau and QGIS.",
  },
];

const Services = () => {
  return (
    <section className="services section" id="services">
      <div className="container">
        <p className="section__eyebrow">Services</p>
        <h2 className="section__title">What I can help with</h2>
      </div>

      <div className="services__container container">
        {services.map((service) => (
          <article className="services__card" key={service.title}>
            <i className={`${service.icon} services__icon`}></i>
            <h3 className="services__title">{service.title}</h3>
            <p className="services__description">{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;
