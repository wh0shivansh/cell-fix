import Intro from "./Components/Intro/Intro";
import Navbar from "./Components/Navbar/Navbar";
import Works from "./Components/Works/Works";
import Promise from "./Components/Promises/Promise";
import Testimonials from "./Components/Testimonials/Testimonials";
import Service from "./Components/Service/Service";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import AndroidDevices from "./Components/Intro/AndroidDevice";
import IosDevices from "./Components/Intro/IosDevice";
import AndroidIssue from "./Components/Intro/AndroidIssue";
import IosIssue from "./Components/Intro/IosIssue";
import AboutPage from "./Components/AboutPage/AboutPage";
import Offers from "./Components/Offers/Offers";
import Review from "./Components/Review/Review";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/android-devices" element={<AndroidDevices />} />
          <Route path="/ios-devices" element={<IosDevices />} />
          <Route path="/android-issue" element={<AndroidIssue />} />
          <Route path="/ios-issue" element={<IosIssue />} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/offers" element={<Offers/>} />
          <Route path="/review" element={<Review/>} />
        </Routes>
      <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
