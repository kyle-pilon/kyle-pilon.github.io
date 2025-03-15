import "./../styles/About.css"; 
import familyPic from "../assets/family.jpg";

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
            <p>
              Outside of coding, I love playing Super Smash Bros., where my main is 
              Pokémon Trainer—Squirtle carries, of course! Whether I’m working on a 
              new project or competing in a friendly match, I bring the same mindset: 
              adaptability, strategy, and continuous improvement.
            </p>
          </div>
  
          {/* Right Side - Image */}
          <div className="about-image">
            <img src={familyPic} alt="Kyle and family" />
          </div>
        </div>
      </section>
    );
  };
  
  export default About;