import React from 'react';
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg';
import profile_img from '../../assets/profile1.jpeg';

const About = ()=> {

    return(
        <div  id='about' className='about'>
            <div className="about-title">
                <h1>About me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I am a dedicated Fullstack Developer with one year of hands-on experience through internships and real-world projects.I enjoy building clean, responsive web applications using HTML, CSS, JavaScript, ReactJS, and Node.js. </p>
                        <p>I’m passionate about learning, collaborating, and delivering work that makes a real difference. </p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"> <p>HTML & CSS</p> <hr style={{width: "85%" }}/> </div>
                        <div className="about-skill"> <p>React JS</p><hr style={{width: "70%" }}/> </div>
                        <div className="about-skill"> <p>Node Js </p><hr style={{width: "65%" }}/> </div>
                       <div className="about-skill"> <p>Java</p> <hr style={{width: "55%" }}/> </div>
                       <div className="about-skill"> <p>SQL</p> <hr style={{width: "65%" }}/> </div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>1+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>5+</h1>
                    <p>PROJECTS COMPLETED </p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>2+</h1>
                    <p>HAPPY CLIENTS </p>
                </div>

            </div>
        </div>
    );
};

export default About;