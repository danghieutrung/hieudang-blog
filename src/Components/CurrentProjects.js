// src/Components/CurrentProjects.js
import React from "react";

const CurrentProjects = () => {
  const handleClick = (event) => {
    event.preventDefault();
  };

  return (
    <section className="work section" id="projects">
      <h2 className="section__title">ONGOING PROJECTS</h2>

      <div className="work__container container grid">
        <article className="work__card">
          <a className="work__link" href="#projects" onclick={handleClick}>
            <h2 className="work__title">FYP: ML in Membrane Fouling</h2>
            <p className="work__description">
              <b>Lead Author</b>. Collaborate with NTU CEE Asst Prof. She
              Qianhong and MIT PhD Zi Hao Foo
            </p>
            <i className="ri-arrow-right-line"></i>
          </a>
        </article>

        <article className="work__card">
          <a className="work__link" href="#projects" onclick={handleClick}>
            <h2 className="work__title">Automated Grading System</h2>
            <p className="work__description">
              <b>LLM Team Lead</b> for NTU MLDA Club Project. <br />
              LLM, NLP, Vision Language, Langchain, Gradescope
            </p>
            <i className="ri-arrow-right-line"></i>
          </a>
        </article>
      </div>
    </section>
  );
};

export default CurrentProjects;
