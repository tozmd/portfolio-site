import React, {Component} from 'react'
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from "./pages/home-page";
import About from "./pages/about-page";
import Portfolio from "./pages/portfolio";
import Photos from "./pages/photos-page";
import NotFound from "./pages/not-found";
import ScrollToTop from './components/scrollToTop';

function App() {
    return (
      <div>
        <ScrollToTop/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About/>} />
            <Route path="/portfolio" element={<Portfolio/>} />
            <Route path="/photos" element={<Photos/>} />
            <Route path="*" element={<NotFound/>}/>
          </Routes>
      </div>
    )
}

export default App