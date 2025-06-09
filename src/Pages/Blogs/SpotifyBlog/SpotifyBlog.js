// src/Pages/Blogs/SpotifyBlog/SpotifyBlog.js
import React from "react";

import ContactMe from "../../../Components/ContactMe.js";
import HomeSection from "../../../Components/HomeSection.js";
import Head from "../../../Components/Head.js";
import ScrollUpButton from "../../../Components/ScrollUpButton.js";
import SingleBlogFooter from "../SingleBlogFooter.js";
import SingleBlogHeader from "../SingleBlogHeader.js";

import BarChartRaceArtists from "./Plots/BarChartRaceArtists.js";
import BarChartRaceSongs from "./Plots/BarChartRaceSongs.js";
import SankeyDiagram from "./Plots/SankeyDiagram.js";
import GanttArtist from "./Plots/GanttArtist.js";
import GanttSong from "./Plots/GanttSong.js";
import Sunburst from "./Plots/Sunburst.js";
import MatrixTaylor from "./Plots/MatrixTaylor.js";
import DivergingBar from "./Plots/DivergingBar.js";
import Treemap from "./Plots/Treemap.js";
import Waterfall from "./Plots/Waterfall.js";
import WindRose from "./Plots/WindRose.js";
import Dashboard from "./Plots/Dashboard.js";

import "./CSS/plots.css";

function SpotifyBlog() {
  return (
    <div>
      <Head />
      <SingleBlogHeader />
      <main className="main">
        <HomeSection
          imgUrl={"/img/ava/me_little.jpg"}
          profession={"5/10/2024"}
        />
        <div id="spotify-blog">
          <h1 className="blog-title">
            Chasing Melodies: 163,000 Spotify Minutes in 10 Charts
          </h1>
          <h2 className="plot-heading">
            1. Bar Chart Race: All-time Most-played Songs and Artists
          </h2>
          <BarChartRaceSongs />
          <BarChartRaceArtists />
          <h2 className="plot-heading">
            2. Sankey Diagram: 100 Most-played Songs
          </h2>
          <SankeyDiagram />
          <h2 className="plot-heading">
            3. Gantt Chart: Top Songs and Artists of the Month
          </h2>
          <GanttArtist />
          <GanttSong />
          <h2 className="plot-heading">
            4. Sunburst Chart: My Most-played Albums
          </h2>
          <p className="plot-text">
            <b>
              This chart only includes albums I have played at least 5 tracks
            </b>
          </p>
          <Sunburst />
          <h2 className="plot-heading">5. Matrix Table: My Taylor Top 10</h2>
          <MatrixTaylor />
          <h2 className="plot-heading">
            6. Diverging Bar Chart: Westlife vs Backstreet Boys
          </h2>
          <DivergingBar />
          <h2 className="plot-heading">7. Treemap Chart: Disney Songs</h2>
          <Treemap />
          <h2 className="plot-heading">
            8. Waterfall Chart: My Monthly Listening Activity
          </h2>
          <Waterfall />
          <h2 className="plot-heading">9. Wind Rose Chart: Listening Hour</h2>
          <WindRose />
          <h2 className="plot-heading">10. Dashboard: 163000 Minutes</h2>
          <Dashboard />
        </div>
        <ContactMe />
      </main>
      <SingleBlogFooter />
      <ScrollUpButton />
    </div>
  );
}

export default SpotifyBlog;
