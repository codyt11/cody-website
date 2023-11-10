import {React, useState} from "react";
import { FaLinkedin, FaGithubSquare, FaGitlab } from "react-icons/fa";
import "./about-me.scss"; // Ensure your SCSS is being compiled correctly

// Props are now passed to the component
function AboutMe({ isModalOpen, setIsModalOpen }) {
    document.addEventListener('DOMContentLoaded', (event) => {
        const spans = document.querySelectorAll('.modal-left span');
        spans.forEach((span, index) => {
          // The delay increases by 0.1s for each subsequent span
          const delay = index * 0.2; // Adjust the multiplier to control the speed of the "chain" animation
          span.style.animationDelay = `${delay}s`;
          span.classList.add('animate-span');
        });
      });
      

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
      });
    
      // Handle input changes
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
      };
    
      // Handle form submission
      const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Log the formData to the console
        console.log(formData);
    
        // Send the formData to your API
        try {
            const response = await fetch('http://localhost:3000/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
    
            // Check if the request was successful
            if (response.ok) {
                console.log('Email sent successfully');
                // Clear form after successful submission
                setFormData({name: '', email: '', message: ''});
            } else {
                console.log('Failed to send email');
            }
        } catch (error) {
            console.error('Error sending email:', error);
        }
    };
    

  return (
    <div id="contactModal" className={`modal ${isModalOpen ? "open" : ""}`}>
      <div className="modal-content">
        <div className="modal-left">
            <div className="big-about">About</div>
            <h1>About Me</h1>
          <p className="about-text">Hello! <span>I'm</span> <span>Cody</span> <span>Townley,</span> <span>a</span> <span>fervent</span> <span>developer</span> <span>with</span> <span>a</span> <span>rich</span> <span>background</span> <span>in</span> <span>healthcare.</span> <span>At</span> <span>33,</span> <span>I've</span> <span>embraced</span> <span>the</span> <span>power</span> <span>of</span> <span>change</span> <span>and</span> <span>am</span> <span>ardently</span> <span>pursuing</span> <span>my</span> <span>lifelong</span> <span>dream.</span> <span>With</span> <span>a</span> <span>heart</span> <span>once</span> <span>dedicated</span> <span>to</span> <span>nurturing</span> <span>others,</span> <span>I</span> <span>now</span> <span>channel</span> <span>that</span> <span>same</span> <span>passion</span> <span>into</span> <span>the</span> <span>art</span> <span>of</span> <span>problem-solving</span> <span>within</span> <span>the</span> <span>tech</span> <span>realm.</span> <span>There's</span> <span>a</span> <span>unique</span> <span>joy</span> <span>I</span> <span>find</span> <span>in</span> <span>breathing</span> <span>life</span> <span>into</span> <span>designs</span> <span>and</span> <span>transforming</span> <span>visions</span> <span>into</span> <span>reality.</span> <span>Let's</span> <span>create</span> <span>something</span> <span>special</span> <span>together.</span>
</p>
          <div className="social-links">
          <a href="https://github.com/codyt11" className="social-link" title="@codyt11 on github" rel="noreferrer" target="_blank">
              <FaGithubSquare />
            </a>
            <a href="https://www.linkedin.com/in/cody-townley/" className="social-link" title="@codyt11 on linked in" rel="noreferrer" target="_blank">
              <FaLinkedin />
            </a>
            <a href="https://gitlab.com/cwtownley" className="social-link" title="@cwtownley on gitlab" rel="noreferrer" target="_blank">
              <FaGitlab />
            </a>
          </div>
        </div>
        <div className="modal-right">
        <div className="close-button" onClick={() => setIsModalOpen(false)}>
            &times;
        </div>
        <form onSubmit={handleSubmit} className="contact-form">
      <h2>Contact Me</h2>

      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
      />

      <button type="submit">Send Message</button>
    </form>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
