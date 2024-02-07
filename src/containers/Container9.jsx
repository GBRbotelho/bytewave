import React from "react";
import styles from "./Container9.module.css";

import Logo from "../assets/imgs/Bytewave.png";

export default function Container9() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={Logo} alt="" />
        </div>
        <div className={styles.data}>
          <div className={styles.contact}>
            <span>Email</span>
            <p>bytewave@bytewave.com</p>
            <span>Whatsapp</span>
            <p>19 9 8171 0544</p>
          </div>
          <div className={styles.social}>
            <span>Redes sociais</span>
            <p>Facebook</p>
            <p>Instagram</p>
            <p>Linkedin</p>
          </div>
        </div>
      </div>
    </section>
  );
}
