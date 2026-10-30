// src/Pages/Blogs/SpotifyBlog/Plots/BarChartRaceArtists.js
import React from "react";
import { ChartFigure } from "../../../../theme/chartTheme";

const BarChartRaceArtists = () => {
  return (
    <ChartFigure title="Most-played artists, all time" note="Cumulative minutes played, July 2019 to September 2024.">
      <video className="chart__video" autoPlay muted loop playsInline controls>
        <source src="/vizzes/1_bar_chart_race_artists.mp4" type="video/mp4" />
        Your browser does not support videos
      </video>
    </ChartFigure>
  );
};

export default BarChartRaceArtists;
