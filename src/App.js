import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";  // Import the Home component
import About from "./pages/About";  // Import the About component
import "./css/style.css"; 

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />  {/* Home Page Route */}
          <Route path="/about" element={<About />} />  {/* About Us Page Route */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
