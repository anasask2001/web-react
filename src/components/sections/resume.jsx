import { RiBookLine } from '@remixicon/react'
import React from 'react'
import SlideUp from '../../utlits/animations/slideUp'

const Resume = () => {
    return (
        <section id="resume" className="resume-area">
            <div className="container">
                <div className="resume-items">
                    <div className="row">
                        {/* <!-- START EXPERIENCE RESUME DESIGN AREA --> */}
                        <div className="col-xl-6 col-md-6">
                            <div className="single-resume">
                                <h2>Experience</h2>
                                <div className="experience-list">
                                    <Card year={'2025 - Present'} title={'Backend - Developer'} institution={'IMIT PARK Thrissur, Irinjalakuda, Kerala'} />
                                    <Card year={'2024 - 2025'} title={'Fullstack - Developer '} institution={'Bridgeon Solutions Calicut, kerala'} />
                                    <Card year={'2023'} title={'Web Designer'} institution={'Freelancer'} />
                                </div>
                            </div>
                        </div>
                        {/* <!-- // END EXPERIENCE RESUME DESIGN AREA -->
                        <!-- START EDUCATION RESUME DESIGN AREA --> */}
                        <div className="col-xl-6 col-md-6">
                            <div className="experience-list">
                                <div className="single-resume">
                                    <h2>Education</h2>
                                    <Card year={'2020 - 2023'} title={'Bachelor of Commerce'} institution={'University of Calicut'} />
                                    <Card year={'2016 - 2018'} title={'Higher secoundery Education'} institution={'Premium College United VC'} />
                                    <Card year={'2023'} title={'Front-end Devolopment'} institution={'Self-learning'} />
                                </div>
                            </div>
                        </div>
                        {/* <!-- // END EDUCATION RESUME DESIGN AREA --> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resume


const Card = ({ year, title, institution }) => {
    return (
        <SlideUp>
            <div className="resume-item">
                <div className="icon">
                    <RiBookLine />
                </div>
                <div className="content">
                    <span className="years">{year}</span>
                    <h4>{title}</h4>
                    <span className="company"> {institution} </span>
                </div>
            </div>
        </SlideUp>
    )
}