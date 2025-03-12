import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import cvFile from "../../../src/assets/cv/MUHAMMED ANAS P (1).pdf";
import {
  RiLinkedinFill,
  RiGithubLine,
  RiCircleFill,
  RiDownloadLine,
  RiWhatsappLine,
  RiInstagramLine,
} from "@remixicon/react";
import profile from "../../assets/images/about/profile.png";
import partner1 from "../../assets/images/client-logos/partner1.png";
import partner2 from "../../assets/images/client-logos/partner2.png";
import partner3 from "../../assets/images/client-logos/partner3.png";
import partner4 from "../../assets/images/client-logos/partner4.png";
import SlideUp from "../../utlits/animations/slideUp";

const Hero = () => {
  return (
    <section id="about" className="about-area">
      <div className="container">
        <div className="row">
          {/* <!-- START ABOUT IMAGE DESIGN AREA --> */}
          <div className="col-lg-4">
            <SlideUp>
              <div className="about-image-part">
                <img src={profile} alt="About Me" />
                <h3>Muhammed Anas</h3>
                <p>Software Developer based in Kerala</p>
                <div className="about-social text-center">
                  <ul>
                    <li>
                      <Link to="https://www.instagram.com/ibnnn.anas/">
                        <RiInstagramLine size={20} />
                      </Link>
                    </li>
                    <li>
                      <Link to="https://wa.me/+918113847950">
                        <RiWhatsappLine size={20} />
                      </Link>
                    </li>
                    <li>
                      <Link to="https://www.linkedin.com/in/muhammed-anasp/">
                        <RiLinkedinFill size={20} />
                      </Link>
                    </li>
                    <li>
                      <Link to="https://github.com/anasask2001">
                        <RiGithubLine size={20} />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </SlideUp>
          </div>
          {/* <!-- / END ABOUT IMAGE DESIGN AREA -->
                    <!-- START ABOUT TEXT DESIGN AREA --> */}
          <div className="col-lg-8">
            <SlideUp>
              <div className="about-content-part">
                <p>Hello there!</p>
                <h3>
                  I’m Muhammed Anas, a MERN Stack Developer with expertise in
                  SQL, building scalable and high-performance web applications.
                </h3>

                <div className="adress-field">
                  <ul>
                    <li className="d-flex align-items-center">
                      <i>
                        <RiCircleFill size={14} />
                      </i>{" "}
                      Available for Freelancing
                    </li>
                  </ul>
                </div>
                <div className="hero-btns">
  <a href={cvFile} download className="theme-btn">
    Download CV{" "}
    <i>
      <RiDownloadLine size={16} />
    </i>{" "}
  </a>
</div>

              </div>
            </SlideUp>
            <SlideUp>
              <div className="about-content-part-bottom">
                <h2>Company I Worked With</h2>
                <div className="company-list">
                  <div className="scroller">
                    <div className="scroller__inner">
                      <Marquee>
                        <img src={partner1} alt="" />
                        <img src={partner2} alt="" />
                        <img src={partner3} alt="" />
                        <img src={partner4} alt="" />
                        <img src={partner3} alt="" />
                      </Marquee>
                    </div>
                  </div>
                </div>
              </div>
            </SlideUp>
          </div>
          {/* <!-- / END ABOUT TEXT DESIGN AREA --> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
