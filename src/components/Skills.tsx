import "./../styles/Skills.css";
import pythonIcon from "../assets/icons/python.svg";
import javascriptIcon from "../assets/icons/javascript.svg";
import reactIcon from "../assets/icons/react.svg";
import cIcon from "../assets/icons/c.svg";
import cppIcon from "../assets/icons/cplusplus.svg";
import cssIcon from "../assets/icons/css.svg";
import htmlIcon from "../assets/icons/html5.svg";
import linuxIcon from "../assets/icons/linux.svg";
import gitIcon from "../assets/icons/git.svg";
import mongodbIcon from "../assets/icons/mongodb.svg";
import postgresqlIcon from "../assets/icons/postgresql.svg";
import rIcon from "../assets/icons/r.svg";


const Skills = () => {
  return (
    <section className="skills">
        <div className="skills-container">
            <div className="skills-text">
                <h2>TECHNICAL SKILLS</h2>
                <p>
                    I'm proficient in various programming languages, frameworks, and tools, with a strong focus on software engineering and data science.
                </p>
            </div>

            <div className="skills-grid">
                <div className="skill"><img src={pythonIcon} alt="Python" /><span>Python</span></div>
                <div className="skill"><img src={javascriptIcon} alt="JavaScript" /><span>JavaScript</span></div>
                <div className="skill"><img src={reactIcon} alt="React" /><span>React</span></div>
                <div className="skill"><img src={cIcon} alt="React" /><span>C</span></div>
                <div className="skill"><img src={cppIcon} alt="React" /><span>C++</span></div>
                <div className="skill"><img src={cssIcon} alt="React" /><span>CSS3</span></div>
                <div className="skill"><img src={htmlIcon} alt="React" /><span>HTML5</span></div>
                <div className="skill"><img src={linuxIcon} alt="React" /><span>Linux</span></div>
                <div className="skill"><img src={gitIcon} alt="React" /><span>Git</span></div>
                <div className="skill"><img src={mongodbIcon} alt="MongoDB" /><span>MongoDB</span></div>
                <div className="skill"><img src={postgresqlIcon} alt="PostgreSQL" /><span>PostgreSQL</span></div>
                <div className="skill"><img src={rIcon} alt="R" /><span>R</span></div>
            </div>
        </div>
    </section>
  );
};

export default Skills;