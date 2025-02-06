import React from "react";
import banner from "../images/banner.webp"; // Import the image
import "../css/home.css"; // Import the CSS file
import { Link } from "react-router-dom"; // Import Link for internal navigation

const Home = () => {
  return (
    <div className="container">
      <div
        className="banner"
        style={{ backgroundImage: `url(${banner})` }} // Use the imported image
      >
        <div className="wrapper">
          <div className="bannerText">
            <h1>Artisan Accel Student Internship Program</h1>
            <p>Connecting Women-Led Businesses with Talent</p>
            <a href="https://www.example.com" target="_blank" rel="noopener noreferrer" className="button">
              JOIN NOW
            </a>
          </div>
        </div>
      </div>

      <div className="about-section">
        <div className="wrapper">
          <div className="about-section-text">
            <h2>Who We Are</h2>
            <p>
              Artisan Accel is a unique platform that bridges the gap between women-led businesses operating under NPOs and ambitious college students looking for hands-on experience. Our mission is to create a mutually beneficial ecosystem where businesses gain fresh perspectives and innovative ideas, while students acquire real-world experience, professional mentorship, and certification to advance their careers.
            </p>
            <p>
              We believe in empowering women entrepreneurs by equipping them with the right talent to accelerate their businesses, all while providing students with meaningful internships that go beyond just adding a line to their resumes. At Artisan Accel, we strive to create opportunities that foster growth, learning, and impact.
            </p>
            <Link to="/about" className="button">Read More</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
