import React from 'react';
import styles from './Services.module.css';
import { BiCheck } from 'react-icons/bi';

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className={`container ${styles.services__container}`}>
        <article className={styles.service}>
          <div className={styles.service__head}>
            <h3>UI/UX Design</h3>
          </div>
          <ul className={styles.service__list}>
            <li>
              <BiCheck className={styles.service__list_icon} />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className={styles.service__list_icon} />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className={styles.service__list_icon} />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className={styles.service__list_icon} />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className={styles.service__list_icon} />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className={styles.service__list_icon} />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className={styles.service__list_icon} />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className={styles.service__list_icon} />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
        <article className={styles.service}>
          <div className={styles.service__head}>
            <h3>Web Development</h3>
          </div>
          <ul className={styles.service__list}>
            <li>
              <BiCheck className={styles.service__list_icon} />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className={styles.service__list_icon} />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className={styles.service__list_icon} />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className={styles.service__list_icon} />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className={styles.service__list_icon} />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className={styles.service__list_icon} />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className={styles.service__list_icon} />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className={styles.service__list_icon} />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
        <article className={styles.service}>
          <div className={styles.service__head}>
            <h3>Content Creation</h3>
          </div>
          <ul className={styles.service__list}>
            <li>
              <BiCheck className={styles.service__list_icon} />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className={styles.service__list_icon} />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className={styles.service__list_icon} />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className={styles.service__list_icon} />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className={styles.service__list_icon} />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className={styles.service__list_icon} />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className={styles.service__list_icon} />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className={styles.service__list_icon} />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
