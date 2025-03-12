import React from 'react'
import profile from "../../assets/images/about/profile.png"
import { RiMailSendLine } from '@remixicon/react'
import SlideUp from '../../utlits/animations/slideUp'
import { Link } from 'react-router-dom'
const Summery = () => {
    return (
        <section id="about" className="about-single-area innerpage-single-area">
            <div className="container">
                <div className="row">
                    {/* <!-- START ABOUT IMAGE DESIGN AREA --> */}
                    <div className="col-lg-4">
                        <SlideUp>
                            <div className="about-image-part">
                                <img src={profile} alt="About Me" />
                            </div>
                        </SlideUp>
                    </div>
                    {/* <!-- / END ABOUT IMAGE DESIGN AREA -->
                    <!-- START ABOUT TEXT DESIGN AREA --> */}
                    <div className="col-lg-8">
                        <SlideUp>
                            <div className="about-content-part">
                                <h3>
                                  I’m Muhammed Anas, a MERN Stack Developer
                                </h3>
                                <p>
    I am a Kerala-based MERN Stack Developer specializing in web development, database management, and scalable architecture. 
    With a diverse range of experience, I have worked across various industries, building efficient and high-performance web applications.
</p>

<p>
    As a skilled MERN Stack Developer, I specialize in building dynamic and scalable web solutions using MongoDB, Express.js, React.js, and Node.js. 
    From crafting seamless user interfaces to optimizing backend performance, I bring a holistic approach to web development. Passionate about innovation 
    and problem-solving, I thrive in collaborative environments and continuously push the boundaries of modern technology. Let's connect to create impactful 
    digital experiences.
</p>



                                <div className="hero-btns">
                                    <Link to="/contact" className="theme-btn">Get In touch<i> <RiMailSendLine size={16} /> </i></Link>
                                </div>
                            </div>
                        </SlideUp>
                    </div>
                    {/* <!-- / END ABOUT TEXT DESIGN AREA --> */}
                </div>
            </div>
        </section>
    )
}

export default Summery