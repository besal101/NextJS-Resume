import React from 'react';
import styles from './Experience.module.css';
import { BsPatchCheckFill } from 'react-icons/bs';

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I have ?</h5>
      <h2>My Experience</h2>
      <div className={`container ${styles.experience__container}`}>
        <div className={styles.experience__frontend}>
          <h3>Frontend Development</h3>
          <div className={styles.experience__content}>
            <div className={styles.experience__details}>
              <BsPatchCheckFill className={styles.experience__details_icon} />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </div>
            <div className={styles.experience__details}>
              <BsPatchCheckFill className={styles.experience__details_icon} />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </div>
            <div className={styles.experience__details}>
              <BsPatchCheckFill className={styles.experience__details_icon} />
              <div>
                <h4>Javascript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </div>
            <div className={styles.experience__details}>
              <BsPatchCheckFill className={styles.experience__details_icon} />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Experienced</small>
              </div>
            </div>
            <div className={styles.experience__details}>
              <BsPatchCheckFill className={styles.experience__details_icon} />
              <div>
                <h4>Tailwind</h4>
                <small className="text-light">Experienced</small>
              </div>
            </div>
            <div className={styles.experience__details}>
              <BsPatchCheckFill className={styles.experience__details_icon} />
              <div>
                <h4>React</h4>
                <small className="text-light">Experienced</small>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.experience__backend}>
          <h3>Backend Development</h3>
          <div className={styles.experience__content}>
            <div className={styles.experience__details}>
              <BsPatchCheckFill className={styles.experience__details_icon} />
              <div>
                <h4>Node JS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </div>
            <div className={styles.experience__details}>
              <BsPatchCheckFill className={styles.experience__details_icon} />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </div>
            <div className={styles.experience__details}>
              <BsPatchCheckFill className={styles.experience__details_icon} />
              <div>
                <h4>PHP</h4>
                <small className="text-light">Experienced</small>
              </div>
            </div>
            <div className={styles.experience__details}>
              <BsPatchCheckFill className={styles.experience__details_icon} />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Experienced</small>
              </div>
            </div>
            <div className={styles.experience__details}>
              <BsPatchCheckFill className={styles.experience__details_icon} />
              <div>
                <h4>Python</h4>
                <small className="text-light">Experienced</small>
              </div>
            </div>
            <div className={styles.experience__details}>
              <BsPatchCheckFill className={styles.experience__details_icon} />
              <div>
                <h4>React</h4>
                <small className="text-light">Experienced</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
