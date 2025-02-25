import React from 'react';
import '../styles/Form.css';

function ContactUsPage() {
  return (
    <div className="form-page">
      <h2>Contact Us</h2>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ContactUsPage;
