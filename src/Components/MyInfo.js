// src/Components/MyInfo.js
import React from "react";

const MyInfo = () => {
  return (
    <section className="info section" id="info">
      <h2 className="section__title">MY INFO</h2>

      <div className="info__container container grid">
        {/* ABOUT */}
        <div className="about grid">
          <div className="about__content">
            <h3 className="info__title">About Me</h3>
            <p className="about__description">
              - I am a final-year student from Nanyang Technological University.
              <br /> - I am proficient in <b>data preprocessing</b>,{" "}
              <b>data analysis</b>, and <b>data visualization</b> with several
              completed projects and a published paper.
              <br /> - I have experience{" "}
              <b>developing and training AI models</b>{" "}
              during my last internship.
              <br /> - I also have familiarity with software development,
              including a completed <b>Google Summer of Code Project</b> and
              built web applications.
              <br /> - Feel free to check out my{" "}
              <a href="/blogs">Personal Blog</a>!
            </p>
            <a
              href="pdf/DangTrungHieu_CV.pdf"
              download
              target="_blank"
              className="button about__button"
            >
              Download CV
            </a>
          </div>
          <img
            src="img/ava/me_vnyarun.jpg"
            alt="Profile"
            className="about__img"
          />
        </div>

        {/* EXPERIENCE */}
        <div className="experience">
          <h3 className="info__title">Experience</h3>
          <div className="experience__content grid">
            <div className="experience__data grid">
              <h2 className="experience__company">Singapore-MIT</h2>
              <div>
                <h3 className="experience__profession">
                  Machine Learning Engineer
                </h3>
                <span className="experience__date">05/24 - 08/24</span>
                <p className="experience__description">
                  - GAN model for temperature downscaling
                </p>
                <p className="experience__description">
                  - Achieved 0.45°C MAE, exceeded target of 2°C
                </p>
              </div>
            </div>

            <div className="experience__data grid">
              <h2 className="experience__company">Singapore-MIT</h2>
              <div>
                <h3 className="experience__profession">Data Analyst</h3>
                <span className="experience__date">01/24 - 04/24</span>
                <p className="experience__description">
                  - Large, multitable data preprocessing
                </p>
                <p className="experience__description">
                  - Statistical analysis and visualizations
                </p>
                <p className="experience__description">
                  -{" "}
                  <a
                    href="https://www.sciencedirect.com/science/article/abs/pii/S2212095524002475"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Published paper
                  </a>{" "}
                  on Urban Climate Journal
                </p>
              </div>
            </div>

            <div className="experience__data grid">
              <h2 className="experience__company">Scala Center</h2>
              <div>
                <h3 className="experience__profession">Student Developer</h3>
                <span className="experience__date">05/23 - 08/23 (Remote)</span>
                <p className="experience__description">
                  -{" "}
                  <a
                    href="https://summerofcode.withgoogle.com/programs/2023/projects/O5hVJAO1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GSoC 2023
                  </a>
                  : http4s Ember WebSocket Client
                </p>
                <p className="experience__description">
                  -{" "}
                  <a
                    href="https://www.youtube.com/watch?v=3HAStrljVwY&ab_channel=NortheastScalaSymposium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Project Presentation
                  </a>{" "}
                  at Northeast Scala Symposium
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SKILLS */}
        <div className="skills">
          <h3 className="info__title">Skills</h3>
          <div className="skills__content grid">
            {[
              { src: "img/logo/info-python.svg", name: "Python" },
              { src: "img/logo/info-r.svg", name: "R" },
              { src: "img/logo/info-sql.svg", name: "SQL" },
              { src: "img/logo/info-scala.svg", name: "Scala" },
              { src: "img/logo/info-haskell.svg", name: "Haskell" },
              { src: "img/logo/info-pandas.svg", name: "Pandas" },
              { src: "img/logo/info-numpy.svg", name: "Numpy" },
              { src: "img/logo/info-netcdf4.svg", name: "NetCDF4" },
              { src: "img/logo/info-excel.svg", name: "Excel" },
              { src: "img/logo/info-powerbi.svg", name: "Power BI" },
              { src: "img/logo/info-tableau.svg", name: "Tableau" },
              { src: "img/logo/info-plotly.svg", name: "Plotly" },
              { src: "img/logo/info-sklearn.svg", name: "Scikit-learn" },
              { src: "img/logo/info-pytorch.svg", name: "PyTorch" },
              { src: "img/logo/info-tensorflow.svg", name: "Tensorflow" },
              { src: "img/logo/info-graphql.svg", name: "GraphQL" },
              { src: "img/logo/info-postgresql.svg", name: "PostgresQL" },
              { src: "img/logo/info-git.svg", name: "Git" },
              { src: "img/logo/info-linux.svg", name: "Linux" },
              { src: "img/logo/info-html.svg", name: "HTML" },
              { src: "img/logo/info-css.svg", name: "CSS" },
              { src: "img/logo/info-react.svg", name: "React" },
              { src: "img/logo/info-highcharts.svg", name: "HighCharts" },
              { src: "img/logo/info-flask.svg", name: "Flask" },
            ].map((skill, index) => (
              <div className="skills__box" key={index}>
                <img src={skill.src} alt={skill.name} className="skills__img" />
                <span className="skills__name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyInfo;
