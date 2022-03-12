import React from 'react';
import styles from './Portfolio.module.css';

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className={`container ${styles.portfolio__container}`}>
        <article className={styles.portfolio__item}>
          <div className={styles.portfolio__item_image}>
            <img src="/assets/portfolio1.jpg" alt="Bishal Khatri Works" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className={styles.portfolio__item_cta}>
            <a
              href="http://github.com"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="http://dribbble.com"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className={styles.portfolio__item}>
          <div className={styles.portfolio__item_image}>
            <img src="/assets/portfolio2.jpg" alt="Bishal Khatri Works" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className={styles.portfolio__item_cta}>
            <a
              href="http://github.com"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="http://dribbble.com"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className={styles.portfolio__item}>
          <div className={styles.portfolio__item_image}>
            <img src="/assets/portfolio3.jpg" alt="Bishal Khatri Works" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className={styles.portfolio__item_cta}>
            <a
              href="http://github.com"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="http://dribbble.com"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className={styles.portfolio__item}>
          <div className={styles.portfolio__item_image}>
            <img src="/assets/portfolio4.jpg" alt="Bishal Khatri Works" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className={styles.portfolio__item_cta}>
            <a
              href="http://github.com"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="http://dribbble.com"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className={styles.portfolio__item}>
          <div className={styles.portfolio__item_image}>
            <img src="/assets/portfolio5.png" alt="Bishal Khatri Works" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className={styles.portfolio__item_cta}>
            <a
              href="http://github.com"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="http://dribbble.com"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className={styles.portfolio__item}>
          <div className={styles.portfolio__item_image}>
            <img src="/assets/portfolio6.jpg" alt="Bishal Khatri Works" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className={styles.portfolio__item_cta}>
            <a
              href="http://github.com"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="http://dribbble.com"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
