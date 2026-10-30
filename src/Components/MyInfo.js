// src/Components/MyInfo.js
import React from "react";

const highlights = [
  { icon: "ri-leaf-line", value: "20+", label: "EIA and EMMP projects worked on" },
  { icon: "ri-smartphone-line", value: "200+", label: "biodiversity surveys carried out with my field data app" },
  { icon: "ri-database-2-line", value: "10,000+", label: "survey records collected through the app" },
  { icon: "ri-map-2-line", value: "5TB+", label: "of survey data, 20+ years of it, being moved to one geospatial platform" },
  { icon: "ri-team-line", value: "100+", label: "staff trained in AI automation across all country offices" },
  { icon: "ri-timer-line", value: "10 min", label: "to draft an EMMP proposal or monthly report with my LLM workflow" },
];

const skillGroups = [
  {
    title: "Programming languages",
    skills: [
      { name: "Python", logo: "python" },
      { name: "R", logo: "r" },
      { name: "SQL", logo: "sql" },
      { name: "TypeScript / JavaScript" },
      { name: "Scala", logo: "scala" },
      { name: "HTML", logo: "html" },
      { name: "Haskell", logo: "haskell" },
    ],
  },
  {
    title: "Software and tools",
    skills: [
      { name: "QGIS" },
      { name: "PostgreSQL", logo: "postgresql" },
      { name: "FastAPI" },
      { name: "Next.js / React", logo: "react" },
      { name: "Git", logo: "git" },
      { name: "Power BI", logo: "powerbi" },
      { name: "Tableau", logo: "tableau" },
    ],
  },
  {
    title: "AI",
    skills: [
      { name: "Machine learning" },
      { name: "Computer vision" },
      { name: "LLM workflows" },
      { name: "AI coding assistants" },
    ],
  },
];

const MyInfo = () => {
  return (
    <section className="info section" id="info">
      <div className="info__container container">
        <p className="section__eyebrow">About</p>
        <h2 className="section__title">A bit about me</h2>

        <div className="about">
          <div className="about__content">
            <p className="about__description">
              I'm an Associate Consultant at <b>ESC Environment Singapore</b>,
              where I combine biodiversity fieldwork with data engineering and
              AI. I build the field data systems, automated survey pipelines
              and ecological AI workflows (camera trap ML, LLM tools) behind
              EIA and EMMP projects, working with agencies including NParks,
              NEA and LTA.
            </p>
            <p className="about__description">
              I graduated in <b>Environmental Engineering</b> from Nanyang
              Technological University (Honours, Merit) in 2025. Before that I
              worked on machine learning and climate data at the
              Singapore-MIT Alliance for Research and Technology, contributed a
              WebSocket client to http4s through <b>Google Summer of Code</b>,
              and won first place in the NTU PEAK Leadership: Sustainability
              competition.
            </p>
            <a
              href="/cv/DangTrungHieu_CV.docx"
              download
              target="_blank"
              className="button about__button"
            >
              <i className="ri-download-line"></i> Download CV
            </a>
          </div>
          <img
            src="/img/ava/me_ntupeak.jpg"
            alt="Dang Trung Hieu at the NTU PEAK Leadership competition"
            className="about__img"
          />
        </div>

        <div className="highlights">
          {highlights.map((item) => (
            <div className="highlight" key={item.value}>
              <i className={`${item.icon} highlight__icon`} aria-hidden="true"></i>
              <p className="highlight__value">{item.value}</p>
              <p className="highlight__label">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="skills">
          <h3 className="info__title">Tech stack</h3>
          <div className="skills__groups">
            {skillGroups.map((group) => (
              <div className="skills__group" key={group.title}>
                <p className="skills__group-title">{group.title}</p>
                <ul className="skills__content">
                  {group.skills.map((skill) => (
                    <li className="skills__box" key={skill.name}>
                      {skill.logo && (
                        <img
                          src={`/img/logo/info-${skill.logo}.svg`}
                          alt=""
                          className="skills__img"
                        />
                      )}
                      <span className="skills__name">{skill.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyInfo;
