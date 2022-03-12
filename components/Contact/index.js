import React, { useRef } from 'react';
import styles from './Contact.module.css';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.SERVICEID,
        process.env.TEMPLATEID,
        form.current,
        process.env.USERID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className={`container ${styles.contact__container}`}>
        <div className={styles.contact__options}>
          <article className={styles.contact__option}>
            <MdOutlineEmail className={styles.contact__option_icon} />
            <h4>Email</h4>
            <h5>hello@bishalkhatri.com</h5>
            <a
              href="mailto:hello@bishalkhatri.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className={styles.contact__option}>
            <RiMessengerLine className={styles.contact__option_icon} />
            <h4>Messenger</h4>
            <h5>bishal.chhh</h5>
            <a href="https://m.me/bishal.chhh" rel="noreferrer">
              Send a message
            </a>
          </article>
          <article className={styles.contact__option}>
            <BsWhatsapp className={styles.contact__option_icon} />
            <h4>Whatsapp</h4>
            <h5>+971 567-126874</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+971567126874"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form className={styles.form} ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            className={styles.form__input}
            placeholder="Your Full Name"
            required
          />
          <input
            type="email"
            className={styles.form__input}
            name="email"
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className={styles.form__input}
            rows="7"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
