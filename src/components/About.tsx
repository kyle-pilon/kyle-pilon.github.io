import "./../styles/About.css"; 
import familyPic from "../assets/family.jpg";
import SquirtleScene from "./SquirtleModel";

const About = () => {
    return (
      <section className="about">
        <div className="about-container">
          <div className="about-text">
            <h2>About Me</h2>
            <p>
              Hey, I'm Kyle! I'm a software engineer and data enthusiast 
              passionate about building technology that enhances everyday life. 
              With a background in software development, AI, and data science, 
              I enjoy solving complex problems and creating intuitive, impactful solutions.
            </p>
          </div>
          <div className="about-image">
            <img src={familyPic} alt="Kyle and family" />
          </div>
        </div>

        <div className="about-container">
          <div className="about-model">
            <SquirtleScene />
          </div>
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