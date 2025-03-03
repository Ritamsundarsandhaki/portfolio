import React from 'react';
import '../css/Section1.css'
import avatar from '../images/avatar.svg'
import my from '../images/picsvg_download.svg'

function Section1() {
  return (
    <section>
      <div className="section1">
        <div className="section1-sec1">
          <div className="part1">
            <h3> 👋 Hi, I Am Ritam Sundar Sandhaki</h3>
          </div>
          <div className="part2">
            <p>Having Experience as a</p>
            <h1>Web Developer</h1>
          </div>
          <div className="part3">
            <p>
              I am a passionate software developer with a knack for transforming complex problems into efficient, scalable solutions. With expertise in JavaScript, Python, and cloud computing, I thrive on building robust applications that prioritize user experience and performance.
            </p>
          </div>
          <div className="part4">
            <button>Schedule Call</button>
            <button>Download CV</button>
          </div>
        </div>
        <div className="section1-sec2">
          <img src={avatar} alt="Profile Picture" />
        </div>
      </div>
    </section>
  );
}

export default Section1;
