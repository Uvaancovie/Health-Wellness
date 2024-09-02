import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('your_service_id', 'your_template_id', e.target, 'your_user_id')
      .then((result) => {
          alert('Message Sent!');
      }, (error) => {
          alert('An error occurred, Please try again');
      });

    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h3>Contact Us</h3>
      <input 
        type="text" 
        name="name" 
        placeholder="Your Name" 
        value={formData.name}
        onChange={handleChange}
        required 
      />
      <input 
        type="email" 
        name="email" 
        placeholder="Your Email" 
        value={formData.email}
        onChange={handleChange}
        required 
      />
      <textarea 
        name="message" 
        placeholder="Your Message" 
        value={formData.message}
        onChange={handleChange}
        required
      ></textarea>
      <button type="submit">Send Message</button>
    </form>
  );
};

export default ContactForm;
