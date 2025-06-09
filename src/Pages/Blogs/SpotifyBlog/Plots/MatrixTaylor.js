// src/Pages/Blogs/SpotifyBlog/Plots/MatrixTaylor.js
import { useState, useEffect } from "react";
import Papa from "papaparse";

const MatrixTaylor = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    Papa.parse("/data/5_taylor_top_10.csv", {
      download: true,
      header: true,
      complete: function (results) {
        setData(results.data);
      },
    });
  }, []);

  const createPlotData = (data) => {
    if (!data || data.length === 0) return [];

    return data.map((row, index) => (
      <tr key={index} className="table-row">
        <td className="table-cell">{row.n}</td>
        <td className="table-cell">{row.most_played}</td>
        <td className="table-cell">{row.fav_10}</td>
        <td className="table-cell">{row.RS_ranked}</td>
        <td className="table-cell">{row.RS_top_10}</td>
      </tr>
    ));
  };

  return (
    <div className="plot">
      <table>
        <thead>
          <tr>
            <th className="table-header">no.</th>
            <th className="table-header">My Most-played</th>
            <th className="table-header">
              <a
                href="https://open.spotify.com/playlist/3Q1Vt4eFvd9Buu4jsRiyLv"
                target="_blank"
                rel="noopener noreferrer"
              >
                My Fav 10
              </a>
            </th>
            <th className="table-header">
              <a
                href="https://www.rollingstone.com/music/music-lists/taylor-swift-songs-ranked-rob-sheffield-201800/"
                target="_blank"
                rel="noopener noreferrer"
              >
                RS Ranked
              </a>
            </th>
            <th className="table-header">
              <a
                href="https://www.rollingstone.com/music/music-lists/taylor-swift-songs-ranked-rob-sheffield-201800/dear-john-2010-2-205457/"
                target="_blank"
                rel="noopener noreferrer"
              >
                RS Top 10
              </a>
            </th>
          </tr>
        </thead>
        <tbody>{createPlotData(data)}</tbody>
      </table>
    </div>
  );
};

export default MatrixTaylor;
