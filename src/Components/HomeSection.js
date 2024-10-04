// src/Components/HomeSection.js
import React from "react";

const HomeSection = ({imgUrl, profession}) => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <img src={imgUrl} alt="Hieu" className="home__img" />
        <div className="home__data">
          <h1 className="home__name">
            Dang
            <br />
            Trung Hieu
          </h1>
          <h3 className="home__profession">{profession}</h3>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
