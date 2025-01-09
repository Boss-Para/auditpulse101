import React from 'react';
import "./About.css";
import images from '../../constants/images';

const About = () => {
  return (
    <section className='about section-p bg-dark' id = "about">
        <div className='container'>
            <div className='about-content grid text-center'>
                <div className = "content-left">
                    <img src = {images.about_main_img} alt = "" />
                </div>
                <div className='content-right'>
                    <div className='section-t'>
                        <h3>About Us</h3>
                    </div>
                    <p className = "text">AuditPulse is a cybersecurity company founded by engineering graduates, specializing in vulnerability assessments of URLs through API integrations. We offer solutions to identify and mitigate risks, providing expert assistance in areas like network and cloud security to help clients safeguard their digital assets from potential cyber threats.</p>
                    <p className='text'>"AuditPulse offers an AI-powered chatbot for instant client support, along with direct access to cybersecurity experts for personalized assistance."</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About