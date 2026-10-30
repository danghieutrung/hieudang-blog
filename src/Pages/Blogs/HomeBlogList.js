// src/Pages/Blogs/HomeBlogList.js
import React from "react";

const posts = [
  {
    href: "/blogs/spotify/",
    date: "5 Oct 2024",
    title: "163,000 Minutes on Repeat: Five Years of My Spotify in 10 Charts",
    excerpt:
      "Five years of listening history, from bar chart races to a wind rose of the hours I press play.",
    thumbnail: "/blog/thumbnail/spotify_gantt.png",
    tags: ["Spotify", "Plotly", "10 charts"],
  },
];

const HomeBlogList = () => {
  return (
    <section className="section section--tight" id="blogs">
      <div className="container blog-list">
        {posts.map((post) => (
          <article className="post-card" key={post.href}>
            <a href={post.href} className="post-card__link">
              <img src={post.thumbnail} alt="" className="post-card__img" />
              <div className="post-card__body">
                <time className="post-card__date">{post.date}</time>
                <h2 className="post-card__title">{post.title}</h2>
                <p className="post-card__excerpt">{post.excerpt}</p>
                <ul className="tags">
                  {post.tags.map((tag) => (
                    <li key={tag} className="tag">
                      {tag}
                    </li>
                  ))}
                </ul>
                <span className="post-card__more">
                  Read post <i className="ri-arrow-right-line"></i>
                </span>
              </div>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default HomeBlogList;
