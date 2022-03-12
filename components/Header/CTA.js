import React from 'react';
import styles from './Header.module.css';

const CTA = () => {
  return (
    <div className={styles.cta}>
      <a href="/assets/cv.pdf" download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let&apos;s Talk
      </a>
    </div>
  );
};

export default CTA;
