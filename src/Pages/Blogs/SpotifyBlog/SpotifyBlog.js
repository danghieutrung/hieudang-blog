// src/Pages/Blogs/SpotifyBlog/SpotifyBlog.js
import ContactMe from "../../../Components/ContactMe.js";
import Head from "../../../Components/Head.js";
import Footer from "../../../Components/Footer.js";
import ScrollUpButton from "../../../Components/ScrollUpButton.js";
import SiteHeader from "../../../Components/SiteHeader.js";

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

const chapters = [
  {
    id: "bar-chart-race",
    title: "Bar chart race: all-time most-played songs and artists",
    lead: "How the leaderboard of songs and artists shifted month by month since July 2019.",
    charts: [<BarChartRaceSongs key="songs" />, <BarChartRaceArtists key="artists" />],
  },
  {
    id: "sankey",
    title: "Sankey diagram: my 100 most-played songs",
    lead: "Splitting the top 100 into instrumental and vocal tracks, then by genre and artist.",
    charts: [<SankeyDiagram key="sankey" />],
  },
  {
    id: "gantt",
    title: "Gantt chart: top artist and song of the month",
    lead: "Taylor Swift topped 36 of the 63 months, Ludovico Einaudi another 17.",
    charts: [<GanttArtist key="artist" />, <GanttSong key="song" />],
  },
  {
    id: "sunburst",
    title: "Sunburst chart: my most-played albums",
    lead: "Only albums with at least 5 tracks played are included. Click a slice to zoom in.",
    charts: [<Sunburst key="sunburst" />],
  },
  {
    id: "matrix",
    title: "Matrix table: my Taylor Swift taste vs Rolling Stone",
    lead: "My most-played and favourite Taylor Swift songs, compared with Rolling Stone's ranking. Hover a song to find it in both tables.",
    charts: [<MatrixTaylor key="matrix" />],
  },
  {
    id: "diverging",
    title: "Diverging bar chart: Westlife vs Backstreet Boys",
    lead: "Two boy bands head to head: total minutes played and each band's top four songs.",
    charts: [<DivergingBar key="diverging" />],
  },
  {
    id: "treemap",
    title: "Treemap: Disney songs",
    lead: "Every Disney song I played, grouped by film. Click a film to zoom in.",
    charts: [<Treemap key="treemap" />],
  },
  {
    id: "waterfall",
    title: "Waterfall chart: monthly listening activity",
    lead: "Each bar is the change from the month before; the top of each bar is that month's total.",
    charts: [<Waterfall key="waterfall" />],
  },
  {
    id: "wind-rose",
    title: "Wind rose: when I listen",
    lead: "Minutes played by hour of day. The quietest stretch runs from 2 AM to 6 AM.",
    charts: [<WindRose key="windrose" />],
  },
  {
    id: "dashboard",
    title: "Dashboard: 163,000 minutes",
    lead: "Everything above, on a single page.",
    charts: [<Dashboard key="dashboard" />],
  },
];

const links = [
  { href: "#home", label: "Post" },
  { href: "#contents", label: "Contents" },
  { href: "#contact", label: "Contact" },
];

function SpotifyBlog() {
  return (
    <div>
      <Head title="163,000 Minutes on Repeat · Dang Trung Hieu" />
      <SiteHeader links={links} back={{ href: "/blogs/", label: "All posts" }} />
      <main className="main">
        <article className="article" id="spotify-blog">
          <header className="article__header container--narrow" id="home">
            <p className="section__eyebrow">
              <time dateTime="2024-10-05">5 Oct 2024</time> · 10 charts
            </p>
            <h1 className="article__title">
              163,000 Minutes on Repeat: Five Years of My Spotify in 10 Charts
            </h1>
            <p className="article__lead">
              Five years of my Spotify listening history, from July 2019 to
              September 2024, told through ten different chart types.
            </p>
          </header>

          <nav className="toc container--narrow" id="contents" aria-label="Contents">
            <p className="toc__title">Contents</p>
            <ol className="toc__list">
              {chapters.map((chapter) => (
                <li key={chapter.id}>
                  <a href={`#${chapter.id}`}>{chapter.title.split(":")[0]}</a>
                </li>
              ))}
            </ol>
          </nav>

          {chapters.map((chapter, index) => (
            <section className="chapter" id={chapter.id} key={chapter.id}>
              <div className="container--narrow">
                <p className="chapter__number">{String(index + 1).padStart(2, "0")}</p>
                <h2 className="chapter__title">{chapter.title}</h2>
                <p className="chapter__lead">{chapter.lead}</p>
              </div>
              <div className="container--chart">{chapter.charts}</div>
            </section>
          ))}
        </article>
        <ContactMe />
      </main>
      <Footer />
      <ScrollUpButton />
    </div>
  );
}

export default SpotifyBlog;
