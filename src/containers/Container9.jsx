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
            <p>Contato@bytewavedev.com.br</p>
            <span>Whatsapp</span>
            <a href="https://wa.me/19998631040">
              <p>+55 19 9 9863-1040</p>
            </a>
          </div>
          <div className={styles.social}>
            <span>Redes sociais</span>
            {/* <p>Facebook</p> */}
            <a href="https://www.instagram.com/bytewavedev/">
              <p>Instagram</p>
            </a>
            {/* <p>Linkedin</p> */}
          </div>
        </div>
      </div>
    </section>
  );
}
