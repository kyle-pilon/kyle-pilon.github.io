import "./../styles/About.css"; 
import familyPic from "../assets/family.jpg";
import SquirtleScene from "./SquirtleModel";

const About = () => {
    return (
      <section className="about">
        <div className="about-container">
          {/* Left Side - Text */}
          <div className="about-text">
            <h2>About Me</h2>
            <p>
              Hey, I'm Kyle! I'm a software engineer and data enthusiast 
              passionate about building technology that enhances everyday life. 
              With a background in software development, AI, and data science, 
              I enjoy solving complex problems and creating intuitive, impactful solutions.
            </p>
          </div>
          
          {/* Right Side - Image */}
          <div className="about-image">
            <img src={familyPic} alt="Kyle and family" />
          </div>
        </div>

        {/* Alternate Layout for 3D Model */}
        <div className="about-container reverse">
          {/* Left Side - 3D Model */}
          <div className="about-model">
            <SquirtleScene />
          </div>

          {/* Right Side - Gaming Paragraph */}
          <div className="about-text">
            <p>
              Outside of coding, I love playing Super Smash Bros., where my main is 
              Pokémon Trainer—Squirtle carries, of course! Whether I'm working on a 
              new project or competing in a friendly match, I bring the same mindset: 
              adaptability, strategy, and continuous improvement.
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;