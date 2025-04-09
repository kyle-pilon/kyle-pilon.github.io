import './../styles/Contact.css';
import myPic from '../assets/beach.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact: React.FC = () => { 

  // Basic handler to prevent default form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    alert("Form submission logic needs to be implemented! Connect to EmailJS, Formspree, Netlify, or a backend.");
    // Add your form submission code here
    // Consider using FormData for easier access:
    // const formData = new FormData(event.currentTarget);
    // const name = formData.get('name');
    // const email = formData.get('email');
    // const message = formData.get('message');
    // console.log({ name, email, message });
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-image">
          <img src={myPic} alt="Kyle at the beach" />
        </div>

        <div className="contact-content">
          <h2>CONTACT ME</h2>
          <p>
            Have a question, project idea, or just want to connect? Feel free to reach out!
          </p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5} required></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>

          <div className="contact-socials">
            <h3>Or find me on:</h3>
            <ul>
              <li>
                <a href="YOUR_LINKEDIN_URL" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                  <FontAwesomeIcon icon={faLinkedin} className="social-fa-icon" />
                </a>
              </li>
              <li>
                <a href="YOUR_GITHUB_URL" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                  <FontAwesomeIcon icon={faGithub} className="social-fa-icon" />
                </a>
              </li>
              <li>
                <a href="mailto:your.email@example.com" aria-label="Send Email">
                  <FontAwesomeIcon icon={faEnvelope} className="social-fa-icon" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;