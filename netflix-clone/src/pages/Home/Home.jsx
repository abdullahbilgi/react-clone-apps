import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import peaky_banner from "../../assets/peaky_banner.jpg";
import peaky_title from "../../assets/peaky_title.png";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
import TitleCards from "../../components/TittleCards/TitleCards";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={peaky_banner} alt="" className="banner-image" />

        <div className="hero-caption">
          <img src={peaky_title} alt="" className="caption-img" />
          <p>
            A notorious gang in 1919 Birmingham, England, is led by the fierce
            Tommy Shelby, a crime boss set on moving up in the world no matter
            the cost.
          </p>

          <div className="hero-btns">
            <button className="btn">
              <img src={play_icon} alt="" />
              Play
            </button>
            <button className="btn dark-btn">
              <img src={info_icon} alt="" />
              More Info
            </button>
          </div>

          <TitleCards />
        </div>
      </div>

      <div className="more-cards">
        <TitleCards title={"Blockbuster Movies"} category={"top_rated"} />
        <TitleCards title={"Only On Netflix"} category={"now_playing"} />
        <TitleCards title={"Upcoming"} category={"upcoming"} />
        <TitleCards title={"Top Pics For You"} category={"popular"} />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
