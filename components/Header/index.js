import React from 'react';
import styles from './Header.module.css';
import CTA from './CTA';
import Image from 'next/image';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.header__container}`}>
        <h5>Hello I&apos;m</h5>
        <h1>Bishal Khatri</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className={styles.me}>
          <img src="/assets/me.png" alt="Bishal Khatri" />
        </div>
        <a href="#contact" className={styles.scroll__down}>
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
