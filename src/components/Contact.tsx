import { useState } from 'react';
import './../styles/Contact.css';
import myPic from '../assets/beach.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://formspree.io/f/mvgqwedd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
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
            Have a question, project idea, or just want to connect? I'd love to hear from you!
          </p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleInputChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleInputChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows={5} 
                value={formData.message}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <button 
              type="submit" 
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {submitStatus === 'success' && (
              <div className="form-message success">
                Thanks! Your message has been sent successfully.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="form-message error">
                Sorry, there was an error sending your message. Please try again.
              </div>
            )}
          </form>
        </div>
      </div>

      <div className="contact-socials">
        <h3>Connect with me</h3>
        <div className="social-links">
          <a href="https://linkedin.com/in/kyle-pilon" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
            <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
          </a>
          <a href="https://github.com/kyle-pilon" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
            <FontAwesomeIcon icon={faGithub} className="social-icon" />
          </a>
          <a href="mailto:kyle@example.com" aria-label="Send Email">
            <FontAwesomeIcon icon={faEnvelope} className="social-icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;