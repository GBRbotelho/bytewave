import React from "react";
import styles from "./Container4.module.css";

import icon from "../assets/imgs/7.svg";

export default function Container4() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>
            Esta na duvida do qual dessas soluções você realmente precisa?
          </h2>
        </div>
        <div className={styles.button}>
          <a href="https://wa.me/19974026227">
            <button>
              <img src={icon} alt="Icone Especialista" />
              conversar com um especialista
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
