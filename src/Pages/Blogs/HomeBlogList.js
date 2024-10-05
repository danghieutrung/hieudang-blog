// src/Components/HomeBlogList.js
import React from "react";

const HomeBlogList = () => {
  return (
    <section className="work section" id="blogs">
      <h2 className="section__title">My Blogs</h2>

      <div className="work__container container grid">
        <article className="work__card">
          <a
            href="/blogs/spotify/"
            className="work__link"
          >
            <h2 className="work__title"><b>1</b>. 5/10/2024: Inception</h2>
            <p className="work__description">
            Chasing Melodies: 163,000 Spotify Minutes in 10 Charts
            </p>
            <img
              src="/blog/thumbnail/blogThumbnail1.png"
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

export default HomeBlogList;
