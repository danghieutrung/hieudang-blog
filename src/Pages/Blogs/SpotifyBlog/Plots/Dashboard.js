// src/Pages/Blogs/SpotifyBlog/Plots/Dashboard.js
import { ChartFigure } from "../../../../theme/chartTheme";

const Dashboard = () => {
  return (
    <ChartFigure note="Click the image to open it at full size.">
      <a href="/blog/vizzes/10_dashboard_background.jpg" target="_blank" rel="noopener noreferrer">
        <img
          className="chart__image"
          src="/blog/vizzes/10_dashboard_background.jpg"
          alt="Dashboard summarising 163,000 minutes of Spotify listening"
          loading="lazy"
        />
      </a>
    </ChartFigure>
  );
};

export default Dashboard;
