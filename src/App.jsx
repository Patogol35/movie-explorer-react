import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import NotFound from "./pages/NotFound";

export default function App({ mode, toggleMode }) {
  return (
    <Routes>
      <Route path="/" element={<Home mode={mode} toggleMode={toggleMode} />} />
      <Route path="/movie/:id" element={<MovieDetail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
