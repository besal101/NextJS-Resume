import React, { useState } from 'react';
import styles from './Nav.module.css';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { BiMessageSquareDetail } from 'react-icons/bi';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav className={styles.nav}>
      <a
        href="#"
        onClick={(e) => setActiveNav('#')}
        className={`${activeNav === '#' ? styles.active : ''} ${
          styles.navanchor
        }`}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={(e) => setActiveNav('#about')}
        className={`${activeNav === '#about' ? styles.active : ''} ${
          styles.navanchor
        }`}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={(e) => setActiveNav('#experience')}
        className={`${activeNav === '#experience' ? styles.active : ''} ${
          styles.navanchor
        }`}
      >
        <BiBook />
      </a>
      <a
        href="#services"
        onClick={(e) => setActiveNav('#services')}
        className={`${activeNav === '#services' ? styles.active : ''} ${
          styles.navanchor
        }`}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        onClick={(e) => setActiveNav('#contact')}
        className={`${activeNav === '#contact' ? styles.active : ''} ${
          styles.navanchor
        }`}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
