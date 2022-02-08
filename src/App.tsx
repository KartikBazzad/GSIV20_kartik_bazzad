import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import DetailsPage from "./pages/DetailsPage";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="details/:id" element={<DetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
