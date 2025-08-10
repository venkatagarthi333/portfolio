// src/components/Contact.jsx
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" style={{textAlign: 'center'}}>
      <h2 className="section-title">Get In Touch</h2>
      <p>I'm currently open to new opportunities. Feel free to send me a message!</p>
      <p><strong>Email:</strong> venkatagarthi333@gmail.com</p>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required rows="5"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
