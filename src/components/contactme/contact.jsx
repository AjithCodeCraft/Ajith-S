import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaMobileAlt } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
import classes from './contact.module.css';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_5tai48g', 'template_pih8roo', form.current, {
        publicKey: 'l4RnB_Z7j8Y0XO62y',
      })
      .then(
        () => {
          window.alert('SUCCESS!');
        },
        (error) => {
          window.alert('FAILED...', error.text);
        },
      );
  };

  return (
    <><div className={classes.box} id='contact'></div>
    <div className={classes.contactContainer}>
      <div className={classes.contactDetails}>
        <h2>Contact Details</h2>
        <div className={classes.contactInfo}>
          <div className={classes.contactItem}>
            <FaEnvelope className={classes.icon} />
            <p>ajithsa909@gmail.com</p>
          </div>
          <div className={classes.contactItem}>
            <AiFillLinkedin className={classes.icon} />
            <p>ajithsa007</p>
          </div>
          <div className={classes.contactItem}>
            <FaMobileAlt className={classes.icon} />
            <p>+91 773 6226 798</p>
          </div>
        </div>
      </div>
      <form className={classes.contactForm} ref={form} onSubmit={sendEmail}>
        <h2>Get in Touch</h2>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </div></>
  );
};

export default ContactUs;
