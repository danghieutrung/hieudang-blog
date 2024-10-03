// src/App.js
import { Routes, Route } from 'react-router-dom';
// import Blog from './Pages/BlogSpotify/Blog';
import SpotifyBlog from './Pages/Blogs/SpotifyBlog/SpotifyBlog';
import Home from "./Pages/Home";
import HomeBlog from './Pages/HomeBlog';
import ErrorPage from "./Pages/ErrorPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs/" element={<HomeBlog />} />
        <Route path="/blogs/spotify/" element={<SpotifyBlog />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default App;
