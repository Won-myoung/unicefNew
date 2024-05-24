import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Doing from "./Doing";
import Sponsor from "./Sponsor";
import Introduce from "./Introduce";
import Footer from "./Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./MainPage";

function App() {
  const [isHideMenuOpen, setIsHideMenuOpen] = useState(false);

  const toggleHideMenu = () => {
    setIsHideMenuOpen(!isHideMenuOpen);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Header toggleHideMenu={toggleHideMenu} />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/doing" element={<Doing />} />
          <Route path="/sponsor" element={<Sponsor />} />
          <Route path="/introduce" element={<Introduce />} />
          {/* TestMenu 컴포넌트를 라우터에 등록 */}
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
