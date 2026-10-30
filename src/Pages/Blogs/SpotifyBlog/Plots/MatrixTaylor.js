// src/Pages/Blogs/SpotifyBlog/Plots/MatrixTaylor.js
import { useState } from "react";
import { ChartFigure, fmt, useCsv } from "../../../../theme/chartTheme";

const RS_URL =
  "https://www.rollingstone.com/music/music-lists/taylor-swift-songs-ranked-rob-sheffield-201800/";
const PLAYLIST_URL = "https://open.spotify.com/playlist/3Q1Vt4eFvd9Buu4jsRiyLv";

// Album and release year for every song in the CSV.
const albums = {
  Enchanted: ["Speak Now", 2010],
  "Sparks Fly": ["Speak Now", 2010],
  "Everything Has Changed": ["Red", 2012],
  "Begin Again": ["Red", 2012],
  Treacherous: ["Red", 2012],
  "I Almost Do": ["Red", 2012],
  "Back To December": ["Speak Now", 2010],
  "If This Was A Movie": ["Speak Now", 2010],
  "Love Story": ["Fearless", 2008],
  Fearless: ["Fearless", 2008],
  "I'd Lie": ["Unreleased", null],
  Superman: ["Speak Now", 2010],
  "All Too Well": ["Red", 2012],
  "New Romantics": ["1989", 2014],
  mirrorball: ["folklore", 2020],
  Delicate: ["reputation", 2017],
  august: ["folklore", 2020],
  "Long Live": ["Speak Now", 2010],
  Lover: ["Lover", 2019],
  "Blank Space": ["1989", 2014],
  marjorie: ["evermore", 2020],
  "Dear John": ["Speak Now", 2010],
};

// The source data spells "marjorie" as "majorie".
const clean = (song) => (song === "majorie" ? "marjorie" : song);

const AlbumTag = ({ song }) => {
  const [album, year] = albums[song] || [];
  if (!album) return null;
  return (
    <span className="album-tag">
      {album}
      {year && <span className="album-tag__year"> · {year}</span>}
    </span>
  );
};

const medianYear = (songs) => {
  const years = songs.map((song) => (albums[song] || [])[1]).filter(Boolean).sort();
  return years[Math.floor(years.length / 2)];
};

const MatrixTaylor = () => {
  const rows = useCsv("/data/5_taylor_top_10.csv");
  const [hovered, setHovered] = useState(null);

  if (rows.length === 0) return null;

  const mostPlayed = rows.map((row) => clean(row.most_played));
  const favourites = rows.map((row) => clean(row.fav_10));
  const rsTop = rows.map((row) => clean(row.RS_top_10));
  const maxMinutes = Math.max(...rows.map((row) => Number(row.mins)));
  const bestRs = rows.reduce((best, row) => (+row.RS_ranked < +best.RS_ranked ? row : best));

  const inBoth = (list, other) => list.filter((song) => other.includes(song)).length;

  const hoverProps = (song) => ({
    onMouseEnter: () => setHovered(song),
    onMouseLeave: () => setHovered(null),
    className: hovered === song ? "is-active" : "",
  });

  return (
    <div className="taste">
      <div className="stat-row">
        <div className="stat">
          <p className="stat__value">{inBoth(mostPlayed, favourites)} of 10</p>
          <p className="stat__label">of my most-played songs are also on my favourites list</p>
        </div>
        <div className="stat">
          <p className="stat__value">{inBoth(favourites, rsTop)} of 10</p>
          <p className="stat__label">songs shared between my favourites and Rolling Stone's top 10</p>
        </div>
        <div className="stat">
          <p className="stat__value">#{bestRs.RS_ranked}</p>
          <p className="stat__label">
            Rolling Stone's highest rank for any of my most-played ({clean(bestRs.most_played)})
          </p>
        </div>
      </div>

      <ChartFigure
        title="What I play most, and where Rolling Stone ranks it"
        subtitle="Minutes played by me, next to each song's position in Rolling Stone's full ranking (lower is better)."
        note={
          <>
            Rankings from{" "}
            <a href={RS_URL} target="_blank" rel="noopener noreferrer">
              Rob Sheffield's ranking of every Taylor Swift song
            </a>{" "}
            for Rolling Stone.
          </>
        }
      >
        <div className="matrix">
          <table className="matrix__table">
            <thead>
              <tr>
                <th className="matrix__num">#</th>
                <th>Song</th>
                <th>Minutes played</th>
                <th className="matrix__num">RS rank</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={row.n} {...hoverProps(mostPlayed[i])}>
                  <td className="matrix__num matrix__muted">{row.n}</td>
                  <td>
                    <span className="matrix__song">{mostPlayed[i]}</span>
                    <AlbumTag song={mostPlayed[i]} />
                  </td>
                  <td className="matrix__bar-cell">
                    <span
                      className="matrix__bar"
                      style={{ width: `${(100 * row.mins) / maxMinutes}%` }}
                    />
                    <span className="matrix__bar-value">{fmt(row.mins)}</span>
                  </td>
                  <td className="matrix__num">
                    <span className={`rank-pill ${+row.RS_ranked <= 50 ? "rank-pill--high" : ""}`}>
                      #{row.RS_ranked}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ChartFigure>

      <ChartFigure
        title="My favourite 10 vs Rolling Stone's top 10"
        subtitle={`My picks lean on early albums (median release ${medianYear(
          favourites
        )}); Rolling Stone's reach further into the later eras (median ${medianYear(rsTop)}).`}
      >
        <div className="versus">
          <div className="versus__col">
            <h4 className="versus__heading">
              <a href={PLAYLIST_URL} target="_blank" rel="noopener noreferrer">
                My favourite 10
              </a>
            </h4>
            <ol className="versus__list">
              {favourites.map((song) => (
                <li key={song} {...hoverProps(song)}>
                  <span className="matrix__song">{song}</span>
                  <AlbumTag song={song} />
                </li>
              ))}
            </ol>
          </div>
          <div className="versus__col">
            <h4 className="versus__heading">
              <a href={RS_URL} target="_blank" rel="noopener noreferrer">
                Rolling Stone top 10
              </a>
            </h4>
            <ol className="versus__list">
              {rsTop.map((song) => (
                <li key={song} {...hoverProps(song)}>
                  <span className="matrix__song">{song}</span>
                  <AlbumTag song={song} />
                </li>
              ))}
            </ol>
          </div>
        </div>
      </ChartFigure>
    </div>
  );
};

export default MatrixTaylor;
