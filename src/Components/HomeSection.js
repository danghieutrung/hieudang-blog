// src/Components/HomeSection.js
import React from "react";

const HomeSection = ({ imgUrl, profession }) => {
  return (
    <section className="home" id="home">
      <div className="home__container container">
        <div className="home__data">
          <p className="section__eyebrow">{profession}</p>
          <h1 className="home__name">Dang Trung Hieu</h1>
          <p className="home__description">
            I combine biodiversity fieldwork with data engineering and AI,
            building field data systems, automated survey pipelines and
            ecological AI workflows for environmental projects in Singapore.
          </p>
          <div className="home__actions">
            <a href="#projects" className="button">
              See my work
            </a>
            <a href="/blogs/" className="button button--ghost">
              Read the blog
            </a>
          </div>
        </div>
        <img src={imgUrl} alt="Dang Trung Hieu" className="home__img" />
      </div>
    </section>
  );
};

export default HomeSection;
