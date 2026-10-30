// src/Pages/Blogs/SpotifyBlog/Plots/GanttArtist.js
import MonthlyGantt from "./MonthlyGantt";

const GanttArtist = () => (
  <MonthlyGantt
    title="Most-played artist of the month"
    subtitle="Hover a bar for the month and minutes played."
    category="most_played_artist"
    yField="artist_y"
    minutesField="artist_duration"
    detailLabel="Artist"
    detailField="most_played_artist_original"
  />
);

export default GanttArtist;
