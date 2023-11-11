import React from "react";
import me from "../../assets/mi.jpg";
import "./Home.css";
export default function Home() {
  return (
    <div className="Home-All">
      <div className="nav_bar"></div>
      <div className="Home-Inicio">
        <div className="title">
          <h1>Full Stack Developer</h1>
        </div>
        <div className="subtitle">
          <h2>
            I design and code beautifully simple things, and I love what I do.
          </h2>
        </div>
        <div className="img">
          <img src={me} alt="me" />
        </div>
        <div className="about_me">
          <h4>
            Hi my name is Nicolas Galarce, I'm full stack developer for
            more than 1 year. I'm quietly confident, naturally curious, and
            perpetually working on improving my chops one design problem at a
            time.I'm excited for the opportunity to contribute to meaningful projects and learn from a talented team in an environment that is
            projects and learn from a talented team in a professional environment.
            Ready to dive into new challenges and grow with an innovative team!
            with an innovative team!
          </h4>
        </div>
      </div>
    </div>
  );
}
