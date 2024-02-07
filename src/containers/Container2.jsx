import React, { useEffect, useState } from "react";
import styles from "./Container2.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Container2() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    // Adiciona um ouvinte de evento para redimensionamento da janela
    window.addEventListener("resize", handleWindowResize);
  }, []);
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView={
            (windowWidth > 1000 && 4) ||
            (windowWidth > 650 && windowWidth <= 1000 && 3) ||
            (windowWidth <= 650 && 2)
          }
          autoplay={{ delay: 1000 }}
          loop={true}
          className={styles.swiperContainer}
        >
          <SwiperSlide>
            <p className={styles.p1}>Desenvolvimento</p>
          </SwiperSlide>
          <SwiperSlide>
            <p className={styles.p2}>Tecnologia</p>
          </SwiperSlide>
          <SwiperSlide>
            <p className={styles.p1}>Criatividade</p>
          </SwiperSlide>
          <SwiperSlide>
            <p className={styles.p2}>Inovação</p>
          </SwiperSlide>
          <SwiperSlide>
            <p className={styles.p1}>Compromisso</p>
          </SwiperSlide>
          <SwiperSlide>
            <p className={styles.p2}>Visibilidade</p>
          </SwiperSlide>
          <SwiperSlide>
            <p className={styles.p1}>Desenvolvimento</p>
          </SwiperSlide>
          <SwiperSlide>
            <p className={styles.p2}>Tecnologia</p>
          </SwiperSlide>
          <SwiperSlide>
            <p className={styles.p1}>Criatividade</p>
          </SwiperSlide>
          <SwiperSlide>
            <p className={styles.p2}>Inovação</p>
          </SwiperSlide>
          <SwiperSlide>
            <p className={styles.p1}>Compromisso</p>
          </SwiperSlide>
          <SwiperSlide>
            <p className={styles.p2}>Visibilidade</p>
          </SwiperSlide>
          <SwiperSlide>
            <p className={styles.p1}>Desenvolvimento</p>
          </SwiperSlide>
          <SwiperSlide>
            <p className={styles.p2}>Tecnologia</p>
          </SwiperSlide>
          <SwiperSlide>
            <p className={styles.p1}>Criatividade</p>
          </SwiperSlide>
          <SwiperSlide>
            <p className={styles.p2}>Inovação</p>
          </SwiperSlide>
          <SwiperSlide>
            <p className={styles.p1}>Compromisso</p>
          </SwiperSlide>
          <SwiperSlide>
            <p className={styles.p2}>Visibilidade</p>
          </SwiperSlide>
          <SwiperSlide>
            <p className={styles.p1}>Desenvolvimento</p>
          </SwiperSlide>
          <SwiperSlide>
            <p className={styles.p2}>Tecnologia</p>
          </SwiperSlide>
          <SwiperSlide>
            <p className={styles.p1}>Criatividade</p>
          </SwiperSlide>
          <SwiperSlide>
            <p className={styles.p2}>Inovação</p>
          </SwiperSlide>
          <SwiperSlide>
            <p className={styles.p1}>Compromisso</p>
          </SwiperSlide>
          <SwiperSlide>
            <p className={styles.p2}>Visibilidade</p>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
