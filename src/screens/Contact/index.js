import React from "react";
import image1 from "../assets/pngwing.com (8) (1).png";
import image2 from "../assets/pngwing.com (7) (1).png";
import image3 from "../assets/pngwing.com (9).png";
import "./index.css";

function Contact() {
    return (
        <section id="contact" className="has-background-dark">
        <div className="columns -6">
          <div className="column is-one-third">
            <div className="rectangle1 mt-6 "></div>
          </div>
          <div className="column ml-6 pl-6 pb-6 pt-5"> <h1 id="navh"> Contact Me</h1></div>
          <div clasclassNames="column">
            <div className="rectangle2 mt-6"></div>
          </div>
        </div>

        <div className="columns">
          <div className="column is-half has-background-black-ter ml-6 pl-6 mr-2" id="cntct">
            <div className="columns">
              <div className="column is-one-fifth"><img src={image1} id="imgcon" /><br /></div>
              <div className="column"><p id="textcon">hettige@gmail.com</p></div>
            </div>
          </div>
          <div className="column is-half has-background-black-ter mr-6 pr-6 ml-2 pl-6" id="cntct">
            <div className="columns">
              <div className="column is-one-fifth"><img src={image2} id="imgcon" /><br /></div>
              <div className="column"><p id="textcon">+94(0) 127 4521</p></div>
            </div>

          </div>
        </div>

        <div className="columns mb-6">
          <div className="column is-one-third"></div>
          <div className="column has-background-black-ter mt-5 mb-6" id="cntct">
            <div className="columns ml-2 ">
              <div className="column is-one-fifth"><img src={image3} id="imgcon" /><br /></div>
              <div className="column"><p id="textcon">Galle, Sri Lanka</p></div>
            </div>
          </div>
          <div className="column"></div>
        </div>
        <div className="columns">
          <div className="column is-one-third">
            <div className="rectangle1 mt-5"> </div>
          </div>
          <div className="column pt-3  ml-6  pt-5" >

            <a href="https://www.facebook.com/binukanadun.kaveesha/">
            <button className="button is-large is-dark mb-4 ml-4 mr-4" id="linkbut2" >
              <span className="icon">
                <i className="fab fa-facebook fa-2x"></i>
              </span>
              </button></a>
              
              <a href="https://wa.me/<0766245650> ">
              <button className="button is-large is-dark mb-4 ml-4 mr-4" id="linkbut2" >
                <span className="icon">
                  <i className="fab fa-whatsapp fa-2x"></i>
                </span> 
              </button></a>
              
              <a href="https://github.com/kaveeshahettige">
              <button className="button is-large is-dark mb-4 ml-4 mr-4" id="linkbut2">
                <span className="icon">
                  <i className="fab fa-github fa-2x"></i>
                </span>
              </button></a>

              <a href="https://www.linkedin.com/in/kaveesha-hettige-b5307b257/">
              <button className="button is-large is-dark mb-4 ml-4 mr-4" id="linkbut2">
                <span className="icon">
                  <i className="fab fa-linkedin fa-2x"></i>
                </span>
              </button></a>
          </div>
          <div className="column">
            <div className="rectangle2 mt-5"> </div>
          </div>
        </div>
        <div className="has-background-black-ter  mb-6 pb-6" id="thnk"><br />"Thanks For Scrolling"
          <br /><br />
        </div>
      </section>

    );
}

export default Contact;