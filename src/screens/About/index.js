import React from "react";
import image1 from "../assets/rnd.jpg";
import "./index.css";

function About() {
  return (
    <section id="about" className="has-background-dark">

    <div className="columns">
      <div className="column is-one-third ml-6 pl-6">
        <figure>
          <img id="roundimg" src={image1} />

        </figure>
        
        <span className="ml-5 pl-1" id="se1">Software Engineer</span>
        <br />
        <span className="ml-5 " id="kav">Kaveesha Hettige</span>
        <br /><br /><br />
      </div>
      <div className="column">
        
          <h2 className="mt-5" id="navh">About</h2>
          <br />
          
          <div className="ml-0 mr-6 pr-6">
            <div className="columns">
              <div className="column is-one-fifth"><hr id="hrcolor" /></div>
              <div className="column">
                <p>I’m a freelance full-stack developer who can build both the front-end and the back-end of a website, with over 3 years of experience.  
                </p>
                <br />
                <p>I always take the responsibility for the direction. I look more badly at the whole business.  
                </p>
              </div>
            </div>
            </div>
          
        
      </div>
    </div>
    <div>
      <div className="columns ml-6 pl-6 mr-6 pr-6">
        <div className="column is-half">
         
          <div className="columns">
            <div className="column is-two-fifths">
              <ul className="no-bullets" id="listg">
                <li>Name &nbsp;  :</li>
                <li>Birthday &nbsp;  :</li>
                <li>Age  &nbsp; :</li>
                <li>Address &nbsp; : </li>
              </ul>
            </div>
            <div className="column ">
              <ul className="no-bullets" id="listw">
                <li>Kaveesha Hettige</li>
                <li>27th of December</li>
                <li>22 y/o</li>
                <li>Galle,Sri Lanka</li>
              </ul>
            </div>
          </div>
        </div>

        
        <div className="column is-one-quarter ml-6 pl-6">
          <ul className="no-bullets" id="listg">
            <li>University &nbsp;:</li>
            <li>E-mail&nbsp; :</li>
            <li>GitHub &nbsp;:</li>
            <li>freelance &nbsp;:</li>
          </ul>
        </div>
        <div className="column mr- ml-0pl-0">
          <ul className="no-bullets" id="listw">
            <li>University of Colombo</li>
            <li>kaveesha.hettige@gmail.com</li>
            <li>@kaveeshahettige</li>
            <li>Available</li>
          </ul>
        </div>

        </div>
      </div>
      <br />
  </section>
  );
}

export default About;
