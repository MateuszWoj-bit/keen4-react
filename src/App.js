import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DOSGame from "./components/DOSGame";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<DOSGame />} />
          <Route path="*" element={<Navigate to="/game"/>} />
          <Route path="/game" element={<DOSGame />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
