// src/Components/Experience.js
import React from "react";

const companies = [
  {
    company: "ESC Environment Singapore",
    mode: "Hybrid",
    roles: [
      {
        title: "Associate Consultant – Data, Software & AI Solutions",
        dates: "Feb 2026 – Present",
        points: [
          "Built the company-wide field data mobile app used by every surveyor on every project, with GPS, timestamped photos, cloud sync and dashboards, eliminating manual data transcription.",
          "Designed a standardised ecological database referencing NParks SDRB3 and the IUCN Red List, plus the data architecture and standards behind it.",
          "Supporting the migration of 20+ years of survey data (5TB+) into a centralised geospatial platform.",
          "Leading company-wide AI adoption; ran an AI automation workshop for 100+ staff across all country offices.",
          "Automated Python and R pipelines for analysis and exceedance detection of monitoring data across all EMMP projects.",
          "Automated camera trap video filtering with Addax AI (MegaDetector), removing false triggers at 95% validated accuracy.",
          "Built an LLM-assisted workflow that drafts EMMP proposals and monthly reports from documents and data in 10 minutes, with human review, now used for all upcoming proposals and monthly reports.",
          "Supported EIA reporting with biodiversity analysis (species richness and diversity) and noise, air and water quality assessments.",
        ],
      },
      {
        title: "Associate Consultant – EMMP Project Manager",
        dates: "Aug 2025 – Feb 2026",
        points: [
          "Managed 5 concurrent EMMP projects, from survey scheduling and client communication to deliverables.",
          "Conducted flora, fauna and intertidal biodiversity surveys, fieldwork and site inspections.",
          "Delivered the preconstruction workplan, monthly monitoring reports and winning EMMP tender proposals.",
          "Presented to clients and agencies including NParks, NEA, LTA and DSTA.",
        ],
      },
    ],
  },
  {
    company: "Singapore–MIT Alliance for Research and Technology",
    mode: "Hybrid",
    roles: [
      {
        title: "Machine Learning Engineer Intern",
        dates: "May 2024 – Aug 2024",
        points: [
          "Built a computer vision model to downscale (×64) Singapore temperature forecasts.",
          "Processed multi-dimensional meteorological data (NetCDF4).",
        ],
      },
      {
        title: "Data Analyst Intern",
        dates: "Jan 2024 – May 2024",
        points: [
          "Preprocessed and analysed 8 months of environmental sensor climate data in Python.",
          <>
            Produced the statistical analysis and figures for a{" "}
            <a
              href="https://www.sciencedirect.com/science/article/abs/pii/S2212095524002475"
              target="_blank"
              rel="noopener noreferrer"
            >
              paper published in Urban Climate
            </a>
            .
          </>,
          "Secured an extended internship on the strength of technical contributions.",
        ],
      },
    ],
  },
  {
    company: "Scala Center – Google Summer of Code",
    mode: "Remote",
    roles: [
      {
        title: "Software Developer",
        dates: "May 2023 – Aug 2023",
        points: [
          <>
            Implemented a{" "}
            <a
              href="https://summerofcode.withgoogle.com/archive/2023/projects/O5hVJAO1"
              target="_blank"
              rel="noopener noreferrer"
            >
              WebSocket API for the http4s Ember
            </a>{" "}
            Scala web framework.
          </>,
          "Delivered every project milestone and presented the work at the Northeast Scala Symposium.",
        ],
      },
    ],
  },
];

const Experience = () => {
  return (
    <section className="section section--tight" id="experience">
      <div className="container">
        <p className="section__eyebrow">Experience</p>
        <h2 className="section__title">Where I've worked</h2>

        <ol className="timeline">
          {companies.map((entry) => (
            <li className="timeline__company" key={entry.company}>
              <div className="timeline__head">
                <h3 className="timeline__name">{entry.company}</h3>
                <span className="timeline__mode">{entry.mode}</span>
              </div>
              {entry.roles.map((role) => (
                <div className="timeline__role" key={role.title}>
                  <div className="timeline__role-head">
                    <h4 className="timeline__title">{role.title}</h4>
                    <span className="timeline__dates">{role.dates}</span>
                  </div>
                  <ul className="timeline__points">
                    {role.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
