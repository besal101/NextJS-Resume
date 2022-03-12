import React from 'react';
import styles from './Testimonial.module.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

const Testimonial = () => {
  return (
    <section id="testimonial">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className={`container ${styles.testimonials__container}`}
      >
        <SwiperSlide className={styles.testimonial}>
          <div className={styles.client__avatar}>
            <img src="/assets/avatar1.jpg" alt="Avatar" />
          </div>
          <h5 className={styles.client__name}>MasterCuts</h5>
          <small className={styles.client__review}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequatur voluptates quae nemo. Beatae distinctio, perferendis
            eaque nobis dolores ducimus veritatis, temporibus consequuntur
            consequatur atque ipsa perspiciatis vel, fugit nemo adipisci.
          </small>
        </SwiperSlide>
        <SwiperSlide className={styles.testimonial}>
          <div className={styles.client__avatar}>
            <img src="/assets/avatar2.jpg" alt="Avatar" />
          </div>
          <h5 className={styles.client__name}>MasterCuts</h5>
          <small className={styles.client__review}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequatur voluptates quae nemo. Beatae distinctio, perferendis
            eaque nobis dolores ducimus veritatis, temporibus consequuntur
            consequatur atque ipsa perspiciatis vel, fugit nemo adipisci.
          </small>
        </SwiperSlide>
        <SwiperSlide className={styles.testimonial}>
          <div className={styles.client__avatar}>
            <img src="/assets/avatar3.jpg" alt="Avatar" />
          </div>
          <h5 className={styles.client__name}>MasterCuts</h5>
          <small className={styles.client__review}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequatur voluptates quae nemo. Beatae distinctio, perferendis
            eaque nobis dolores ducimus veritatis, temporibus consequuntur
            consequatur atque ipsa perspiciatis vel, fugit nemo adipisci.
          </small>
        </SwiperSlide>
        <SwiperSlide className={styles.testimonial}>
          <div className={styles.client__avatar}>
            <img src="/assets/avatar4.jpg" alt="Avatar" />
          </div>
          <h5 className={styles.client__name}>MasterCuts</h5>
          <small className={styles.client__review}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequatur voluptates quae nemo. Beatae distinctio, perferendis
            eaque nobis dolores ducimus veritatis, temporibus consequuntur
            consequatur atque ipsa perspiciatis vel, fugit nemo adipisci.
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonial;
