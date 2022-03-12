import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FiDribbble } from 'react-icons/fi';
import styles from './Header.module.css';

const HeaderSocials = () => {
  return (
    <div className={styles.header__socials}>
      <a href="https://linkedin.com" target="_blank" rel="noreferrer">
        <BsLinkedin />
      </a>
      <a href="https://github.com" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
      <a href="https://dribble.com" target="_blank" rel="noreferrer">
        <FiDribbble />
      </a>
    </div>
  );
};

export default HeaderSocials;
