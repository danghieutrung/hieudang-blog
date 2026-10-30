// src/Components/Projects.js
import React, { useState } from "react";
import Lightbox from "./Lightbox";

const projects = [
  {
    title: "Field data mobile app",
    category: "ESC Environment Singapore",
    description:
      "Company-wide app used by every surveyor on every project: GPS, timestamped photos, cloud sync and dashboards, replacing manual data transcription.",
    tags: ["Mobile app", "GPS", "Cloud sync", "Dashboards"],
    gallery: [
      { src: "/img/recent_works/field_app/survey_list.jpg", alt: "Survey list with sync status" },
      { src: "/img/recent_works/field_app/status_summary.jpg", alt: "Compiled flora data by SRDB3 conservation status" },
      { src: "/img/recent_works/field_app/inspection_checklist.jpg", alt: "Site inspection checklist with photo capture" },
    ],
  },
  {
    title: "AI-assisted EMMP proposals and reports",
    category: "ESC Environment Singapore",
    description:
      "LLM-assisted workflow that drafts EMMP proposals and monthly reports from documents and data in 10 minutes, with human review. Now used for all upcoming proposals and monthly reports.",
    tags: ["LLM workflows", "Automation", "Human review"],
    img: "/img/recent_works/project_emmp_ai.png",
  },
  {
    title: "SquerryDB",
    category: "Personal",
    description:
      "Full-stack app querying 11M IMDb movie and series records, charting every episode's rating season by season.",
    tags: ["PostgreSQL", "GraphQL", "FastAPI", "Next.js"],
    href: "https://squerrydb-frontend-production-ed50.up.railway.app/",
    img: "/img/recent_works/project_squerrydb.png",
  },
  {
    title: "163,000 Minutes on Repeat",
    category: "Personal",
    description:
      "Blog post analysing five years of my music streaming through ten interactive visualisations.",
    tags: ["Python", "Plotly", "React"],
    href: "/blogs/spotify/",
    img: "/blog/thumbnail/spotify_gantt.png",
  },
  {
    title: "Published paper: Urban Climate",
    category: "Publication",
    description:
      "Impact of rainfall on air temperature, humidity and thermal comfort in tropical urban parks.",
    tags: ["Python", "Statistics", "Climate data"],
    href: "https://www.sciencedirect.com/science/article/abs/pii/S2212095524002475",
    img: "/img/recent_works/project_urbanclimate.jpg",
  },
  {
    title: "Google Summer of Code 2023",
    category: "GSoC",
    description: "WebSocket client for the http4s Ember Scala web framework, with Scala Center.",
    tags: ["Scala", "http4s", "Open source"],
    href: "https://summerofcode.withgoogle.com/archive/2023/projects/O5hVJAO1",
    img: "/img/recent_works/project_gsoc.png",
  },
  {
    title: "bank.green",
    category: "bank.green",
    description: "Open-source contribution to a site that rates banks on their environmental harm.",
    tags: ["Open source", "Sustainability"],
    href: "https://bank.green/",
  },
  {
    title: "FYP: ML for membrane fouling",
    category: "Personal",
    description:
      "Final year project at NTU: machine learning to predict membrane fouling in water treatment.",
    tags: ["Machine learning", "Water treatment"],
  },
];

const Projects = () => {
  const [viewer, setViewer] = useState({ images: [], index: null });

  return (
    <section className="work section" id="projects">
      <div className="container">
        <p className="section__eyebrow">Projects</p>
        <h2 className="section__title">Selected work</h2>
      </div>

      <div className="work__container container">
        {projects.map((project) => {
          const isExternal = project.href && project.href.startsWith("http");
          const body = (
            <>
              {project.category && <span className="work__status">{project.category}</span>}
              <h3 className="work__title">{project.title}</h3>
              <p className="work__description">{project.description}</p>
              <ul className="tags work__tags">
                {project.tags.map((tag) => (
                  <li key={tag} className="tag">
                    {tag}
                  </li>
                ))}
              </ul>
              {project.gallery && (
                <div className="work__gallery">
                  {project.gallery.map((image, i) => (
                    <button
                      key={image.src}
                      className="work__shot"
                      onClick={() => setViewer({ images: project.gallery, index: i })}
                      aria-label={`View full size: ${image.alt}`}
                    >
                      <img src={image.src} alt={image.alt} loading="lazy" />
                      <i className="ri-zoom-in-line"></i>
                    </button>
                  ))}
                </div>
              )}
              {project.img && (
                <img
                  src={project.img}
                  alt=""
                  className="work__img"
                  // Hide the frame until the screenshot has been added.
                  onError={(e) => (e.currentTarget.style.display = "none")}
                />
              )}
              {project.href && <i className={isExternal ? "ri-arrow-right-up-line" : "ri-arrow-right-line"}></i>}
            </>
          );

          return (
            <article
              className={`work__card ${project.href ? "" : "work__card--static"}`}
              key={project.title}
            >
              {project.href ? (
                <a
                  href={project.href}
                  className="work__link"
                  {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
                >
                  {body}
                </a>
              ) : (
                body
              )}
            </article>
          );
        })}
      </div>

      <Lightbox
        images={viewer.images}
        index={viewer.index}
        onChange={(index) => setViewer((v) => ({ ...v, index }))}
        onClose={() => setViewer((v) => ({ ...v, index: null }))}
      />
    </section>
  );
};

export default Projects;
