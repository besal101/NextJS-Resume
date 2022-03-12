import React from 'react';
import styles from './About.module.css';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className={`container ${styles.about__container}`}>
        <div className={styles.about__me}>
          <div className={styles.about__me_image}>
            <img src="/assets/me-about.jpg" alt="Who is Bishal Khatri?" />
          </div>
        </div>
        <div className={styles.about__content}>
          <div className={styles.about__cards}>
            <div className={styles.about__card}>
              <FaAward className={styles.about__icon} />
              <h5>Experience</h5>
              <small>5+ Years Working</small>
            </div>
            <div className={styles.about__card}>
              <FiUsers className={styles.about__icon} />
              <h5>Clients</h5>
              <small>200+ Satisfied Clients</small>
            </div>
            <div className={styles.about__card}>
              <VscFolderLibrary className={styles.about__icon} />
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            accusamus aliquid a fugit cumque fugiat dicta quod quas vel dolor,
            nam magni eveniet obcaecati nemo quo. Illum minus molestiae amet.
          </p>
          <a href="#contact" className={`btn btn-primary`}>
            Let&apos;s Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
