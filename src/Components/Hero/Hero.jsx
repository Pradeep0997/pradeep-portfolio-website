import React from 'react';
import './Hero.css';
import profile_img from '../../assets/profile_1_.jpeg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {

    return (

        <div id='home' className="hero">
            <img src={profile_img} alt="" />
            <h1><span>I'm Pradeep Reddy Settipalle</span><br /> Fullstack developer based in India. </h1>
            <p>Full-Stack Developer from Kadapa, A.P. &nbsp;
                Two years of practical experience building robust web applications through internships.</p>
            <div className="hero-action">
                <div className="hero-connect">
                    <AnchorLink className='anchor-link' offset={50} href='#contact'>
                        Connect with me
                    </AnchorLink>
                </div>
                <div className="hero-resume">
                    <a
                        href="https://drive.google.com/file/d/11eHJopoGd-mwBg7-yOxxjaocRlsdqfuA/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        My Resume
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero;
