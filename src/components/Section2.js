import React from "react";
import '../css/Section2.css'
const Section2 = () => {
  return (
    <div className="section2">
      <div className="section2-btn">
        <p>About Me</p>
      </div>
      <div className="para">
        <p>
          Here you'll discover additional insights about me, my expertise, and a
          comprehensive overview of my current programming and technological
          skills.
        </p>
      </div>
      <div className="section2-box">
        <div className="box-img">
          {/* Add an image or placeholder */}
          <img src="path-to-your-image.jpg" alt="Ritam Sundar Sandhaki" />
        </div>
        <div className="data">
          <h3>Ritam Sundar Sandhaki</h3>
          <h5>Web Developer || Frontend Developer || Software Developer</h5>
        </div>
        <div className="section2-icons">
          {/* Add social icons or other relevant content */}
        </div>
      </div>
      <div className="about-dec">
        <p>
          I’m a dedicated Software Developer with a passion for crafting
          efficient, scalable, and user-friendly applications. Proficient in
          JavaScript, React, and Node.js, I specialize in delivering solutions
          that combine functionality with seamless design.
          With experience in web development, backend systems, and responsive
          design, I focus on writing clean, maintainable code and continuously
          improving my skills to stay ahead in the ever-evolving tech
          landscape. Collaboration, problem-solving, and innovation drive my
          approach to development, ensuring every project meets high-quality
          standards.
        </p>
      </div>
    </div>
  );
};

export default Section2;
