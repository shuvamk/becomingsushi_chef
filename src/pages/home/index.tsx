import React from "react";
import Header from "../../components/header";
import "./home.css";
import shuvamPhoto from "../../assets/images/shuvam.png";
import Logo from "../../components/common/logo";
import { LogoIcon } from "../../assets/icons";

const HomePage = () => {
  return (
    <div className="homepage max-width">
      <div className="homepage-title absolute-center tracking-in-expand">
        {LogoIcon}
        Becomingsushi_chef
      </div>
      <div className="hp-photo-container">
        <img src={shuvamPhoto} className="homepage-photo" alt="Shuvam Kumar" />
        <div className="hp-floating-btn floating travel-btn cur-po vertical-align">
          <video
            muted={true}
            src={require("../../assets/videos/travel.mp4")}
            autoPlay={true}
            loop={true}
            className="hp-btn-lottie"
          ></video>
          I travel
        </div>
        <div className="hp-floating-btn floating overreacted-btn cur-po vertical-align">
          <video
            muted={true}
            src={require("../../assets/videos/youtube.mp4")}
            autoPlay={true}
            loop={true}
            className="hp-btn-lottie"
          ></video>
          Overreacted
        </div>
        <div className="hp-floating-btn floating about-btn cur-po vertical-align">
          <video
            muted={true}
            src={require("../../assets/videos/about-chef-hat.mp4")}
            autoPlay={true}
            loop={true}
            className="hp-btn-lottie"
          ></video>
          Who am I?
        </div>
      </div>
    </div>
  );
};

export default HomePage;
