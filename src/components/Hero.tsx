import "./../styles/Hero.css";

const Hero = () => {
  return (
    <section className="hero">
        <div className="hero-content">
            <div className="hero-text">
                <h1>Hi, I'm Kyle!</h1>
                <p> I'm a [your profession or passion], passionate about [key interest]. 
      I enjoy working on [key projects or skills] and strive to create impactful solutions. 
      Welcome to my portfolio!</p>
            </div>
            <div className="hero-image">
                <img src="/src/assets/professional.jpg" alt="Kyle Pilon" />
            </div>
        </div>

    </section>
  );
};

export default Hero;
