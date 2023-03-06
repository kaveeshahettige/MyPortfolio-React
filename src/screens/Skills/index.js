import React from "react";
import image1 from "../assets/pngwing.com (15).png";
import image2 from "../assets/pngwing.com (14).png";
import image3 from "../assets/pngwing.com (17).png";
import image4 from "../assets/pngwing.com (19).png";
import image5 from "../assets/pngwing.com (16).png";
import image6 from "../assets/pngwing.com (18).png";
import "./index.css";

function Skills() {
  return (
    <section id="skills" className="has-background-dark">
    <h1 id="navh" align="center">My Skills</h1> <br /><br />
    <div className="columns">
      <div className="column is-one-third ml-6 ">
        <div className="has-background-black-ter css-cont pt-4" id="sklimg"><img src={image1} id="imgsk" /><br />
          <span id="sklLtr">HTML</span>
        </div>
        <br />
        <div className="has-background-black-ter css-cont pt-4" id="sklimg"><img src={image2} id="imgsk" />
          <br />
          <span id="sklLtr">Java</span></div>

      </div>
      <div className="column">
        <div className="has-background-black-ter css-cont pt-4" id="sklimg"><img src={image3} id="imgsk" />
          <br />
          <span id="sklLtr">CSS</span>
        </div>
        <br />
        <div className="has-background-black-ter css-cont pt-4" id="sklimg"><img src={image4} id="imgsk" />
          <br />
          <span id="sklLtr">Figma</span>
        </div>
      </div>
      

      <div className="column"> 
      <div className="has-background-black-ter css-cont pt-4" id="sklimg"><img src={image5}id="imgsk" />
        <br />
        <span id="sklLtr">Java Script</span></div>
      <br />
      <div className="has-background-black-ter css-cont pt-4" id="sklimg"><img src={image6} id="imgsk" />
        <br />
        <span id="sklLtr">MySQL</span></div></div>
      <div></div>
        <div></div>

    </div>
  </section>
  );
}

export default Skills;
