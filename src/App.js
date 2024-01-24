// App.js
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import Reservation from "./components/Reservation/Reservation";
import ConfirmedBooking from "./components/ConfirmedBooking";
function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
      </div>
      <Hero />
      <div className="container">
        <main>
          <Router>
            <Routes>
              <Route path="/" element={<Reservation />} />
              <Route path="/confirmed-booking" element={<ConfirmedBooking />} />
            </Routes>
          </Router>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
