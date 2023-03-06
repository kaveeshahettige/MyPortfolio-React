import React from "react";
import image1 from "../assets/K.png";
import image2 from "../assets/kyyaa.png";
import "./index.css";

function Home() {
    return (

      <section id="home" className="has-background-dark">
      <nav className="navbar is-dark mt-2 mb-2" role="navigation" aria-label="main navigation">
          <div className="navbar-brand" id="klogo">
            <a className="navbar-item" href="">
              <img src={image1} width="80px" height="100px" />
            </a>
        
            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
        
          <div id="navbarBasicExample" class="navbar-menu">
            <div className="navbar-start" id="buttons">
              <a className="navbar-item ml-6 mr-" href="#home">
                Home
              </a>
        
              <a className="navbar-item mr-4" href="#about">
                About
              </a>

              <a className="navbar-item mr-4" href="#education">
                Education
              </a>

              <a className="navbar-item mr-4" href="#skills">
                  Skills
                </a>

                <a className="navbar-item mr-4" href="#contact">
                  Contact
                </a>
        
            </div>
          
        
            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons" id="dwnbut">
                  <a className="button is-black is-medium" id="dbut">
                    <strong>Download</strong>
                  </a>
                  
                </div>
              </div>
            </div>
          </div>
        </nav>



        <div className="columns">
          <div className="column is-5 mt-6 pt-6">
            <div className="has-background-black-ter pl-6 mr-4 ml-1" id="blk">
              <span id="hero1" className="mt-6 pt-6">I'M<br /></span>
              <span id="hero2" className="mt-6 ">KAVEESHA HETTIGE<br /></span>
              <span id="hero1" className="mt-6 ">Full Stack <br /> Developer</span>

              <br />
              <button className="button is-dark is-normal is-responsive mb-6 pb-6 mt-6 pt-6" id="hero3">Contact me</button>
              
            </div>
          </div>
          <div className="column is-5 ml-5 pl-5 mb-5">
            <img src={image2} />
          </div>
          <div className="column mt-6">
            <div className="lineH"></div>
            <br />

            <a href="https://www.facebook.com/binukanadun.kaveesha/">
            <button className="button is-large is-dark mb-4" id="linkbut">
                <span className="icon">
                  <i className="fab fa-facebook fa-2x"></i>
                </span>  
            </button></a><br />

            <a href="https://wa.me/<0766245650> ">
              <button className="button is-large mb-4" id="linkbut">
                <span className="icon">
                  <i className="fa-brands fa-whatsapp fa-2x"></i>
                </span>
            </button>
            </a><br />

            <a href="https://github.com/kaveeshahettige">
              <button className="button is-large is-dark mb-4" id="linkbut">
                <span className="icon">
                  <i className="fab fa-github fa-2x"></i>
                </span>
              </button>
            </a>
           <br />

           <a href="https://www.linkedin.com/in/kaveesha-hettige-b5307b257/">
            <button className="button is-large is-dark mb-4" id="linkbut">
              <span className="icon">
                <i className="fab fa-linkedin fa-2x"></i>
              </span>
            </button>
           </a>
            <br />
          </div>
        </div>

  </section >

    );
        
    }
    
    export default Home;