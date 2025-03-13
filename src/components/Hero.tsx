import "./../styles/Hero.css";
import profilePic from "../assets/professional.jpg";

const Hero = () => {
  return (
    <section className="hero">
        <div className="hero-container">
            <div className="hero-text">
                <h1>Hi, I'm Kyle!</h1>
                <p>
                    I'm a technology professional passionate about building intuitive and efficient software solutions. 
                    Welcome to my portfolio!
                </p>
            </div>
            <div className="hero-image">
                <img src={profilePic} alt="Kyle Pilon" />
            </div>
        </div>
        <div className="scroll-indicator">
            <span>↓ Scroll down to see my work!</span>
        </div>
    </section>
  );
};

export default Hero;
