
import React from "react";
import image1 from "../assets/Arrow1.png";
import image2 from "../assets/Arrow2.png";
import image3 from "../assets/Arrow3.png";
//import image2 from "../assets/kayya.png";
import "./index.css";

function Education() {
return (
  <section id="education" className="has-background-dark">

<h3 id="navh" className="ml-6 pl-6">Education</h3>
          <br /><br />

          <div className="columns">
            <div className="column is-one-third ml-6">

              <div className="columns">
                <div className="column is-two-thirds pt-0">
                  <div>
                    <img id="arrow" src={image1} />
                  </div>
                  <div>
                    <img id="arrow" src={image2} />
                  </div>
                  <div>
                    <img id="arrow" src={image3} />
                  </div>
                </div>
                <div className="column">
                  <span className="dot1"></span>
                  <div className="line1"></div>
                  <br />
                  <span className="dot2" ></span>
                  <div className="line2"></div>
                  <br />
                  <span className="dot3" ></span>
                  <div className="line3"></div>
                  <br />
                </div>
              </div>
            </div>
            <div className="column pr-6 mr-6">
              <br /><br />
              <p id="edtop1">Bsc.(Hons) in Information Systems</p>
              <p id="edtop2">University of Colombo</p>
              <br />
              <p id="edup">Currently reading for my Bachelors' Degree in
                Information Systems at University of Colombo
                School of Computing.</p>
                <br />

                <p id="edtop1">CMJD</p>
              <p id="edtop2">Institute of Java and Software Engineering</p>
              <br />
              <p id="edup">Successfully completed the course of Comprehensive
                Master in Java Developer with a  'A' grade.</p>
                <br /><br />

                <p id="edtop1">Primary and Secondary Education</p>
              <p id="edtop2">Mahinda College,Galle</p>
              <br />
              <p id="edup">Passed General Certificate of Education Ordinary
                Level Exam with 7A passes,1 B pass,1 C pass and
                Advanced Level Exam with 1 A pass and 2 B passes in Physical Science stream.</p>
                <br /><br />
            </div>
          </div>


  </section>
);
}

export default Education;
