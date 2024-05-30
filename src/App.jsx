import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Doing from "./Doing";
import Sponsor from "./Sponsor";
import Introduce from "./Introduce";
import Footer from "./Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./MainPage";
import ScrollToTop from "./ScrollToTop"; // ScrollToTop 컴포넌트 import

function App() {
  const [isHideMenuOpen, setIsHideMenuOpen] = useState(false);

  const toggleHideMenu = () => {
    setIsHideMenuOpen(!isHideMenuOpen);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Header toggleHideMenu={toggleHideMenu} />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/doing" element={<Doing />} />
          <Route path="/sponsor" element={<Sponsor />} />
          <Route path="/introduce" element={<Introduce />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
