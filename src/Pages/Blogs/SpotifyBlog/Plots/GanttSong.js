// src/Pages/Blogs/SpotifyBlog/Plots/GanttSong.js
import MonthlyGantt from "./MonthlyGantt";

const GanttSong = () => (
  <MonthlyGantt
    title="Most-played song of the month"
    subtitle="Songs that topped only one month are grouped as “13 Others”; hover to see which."
    category="most_played_song"
    yField="song_y"
    minutesField="song_duration"
    detailLabel="Song"
    grouped="13 Others"
    detailField="most_played_song_original"
    shortLabels={{ "Everything Has Changed": "Everything Has Ch…" }}
  />
);

export default GanttSong;
