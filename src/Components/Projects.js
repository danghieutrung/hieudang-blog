// src/Components/Projects.js
import React from "react";

const Projects = () => {
  return (
    <section className="work section" id="projects">
      <h2 className="section__title">RECENT WORKS</h2>

      <div className="work__container container grid">
        <article className="work__card">
          <a
            href="https://squerrydb-frontend-production.up.railway.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="work__link"
          >
            <h2 className="work__title">SquerryDB</h2>
            <p className="work__description">
              Visualizing App for IMDb Movie Series. PostgreSQL, GraphQL API, Next.js
            </p>

            <img
              src="/img/recent_works/project_squerrydb.png"
              alt=""
              className="work__img"
            />

            <i className="ri-arrow-right-line"></i>
          </a>
        </article>

        <article className="work__card">
          <a
            href="https://www.sciencedirect.com/science/article/abs/pii/S2212095524002475"
            target="_blank"
            rel="noopener noreferrer"
            className="work__link"
          >
            <h2 className="work__title">Published Paper</h2>
            <p className="work__description">
              Impact of rainfall on air temperature, humidity and thermal comfort in tropical urban parks
            </p>

            <img
              src="/img/recent_works/project_urbanclimate.jpg"
              alt=""
              className="work__img"
            />

            <i className="ri-arrow-right-line"></i>
          </a>
        </article>

        <article className="work__card">
          <a
            href="#projects"
            target="_blank"
            rel="noopener"
            className="work__link"
          >
            <h2 className="work__title">T2 GAN</h2>
            <p className="work__description">
              GAN for T2 (0.45°C MAE). Work unavailable
            </p>

            <img
              src="/img/recent_works/project_T2GAN.png"
              alt=""
              className="work__img"
            />

            <i className="ri-arrow-right-line"></i>
          </a>
        </article>

        <article className="work__card">
          <a
            href="https://summerofcode.withgoogle.com/programs/2023/projects/O5hVJAO1"
            target="_blank"
            rel="noopener noreferrer"
            className="work__link"
          >
            <h2 className="work__title">Google Summer of Code 2023</h2>
            <p className="work__description">http4s Ember WebSocket Client</p>

            <img
              src="/img/recent_works/project_gsoc.png"
              alt=""
              className="work__img"
            />

            <i className="ri-arrow-right-line"></i>
          </a>
        </article>

        <article className="work__card">
          <a
            href="https://public.tableau.com/app/profile/hieu.dang5562/vizzes"
            target="_blank"
            rel="noopener noreferrer"
            className="work__link"
          >
            <h2 className="work__title">imdb-tableau</h2>
            <p className="work__description">
              Interactive Tableau Dashboard displaying IMDB series ratings
            </p>

            <img
              src="/img/recent_works/project_imdb_tableau.png"
              alt=""
              className="work__img"
            />

            <i className="ri-arrow-right-line"></i>
          </a>
        </article>

        <article className="work__card">
          <a
            href="https://github.com/danghieutrung/covid-19-mortality-analysis/tree/main/data"
            target="_blank"
            rel="noopener noreferrer"
            className="work__link"
          >
            <h2 className="work__title">U.S. COVID-19 Mortality Analysis</h2>
            <p className="work__description">
              School Project Lead. COVID-19 data analysis and forecasting
            </p>

            <img
              src="/img/recent_works/project_covid19.png"
              alt=""
              className="work__img"
            />

            <i className="ri-arrow-right-line"></i>
          </a>
        </article>
      </div>
    </section>
  );
};

export default Projects;
