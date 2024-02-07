import React from "react";
import styles from "./Container6.module.css";

export default function Container6() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.text}>
          <p>
            O que acha de ter um site que realmente te leve a um novo patamar no
            seu negocio ?
          </p>
        </div>
        <div className={styles.button}>
          <a href={`https://wa.me/19998631040?}`}>
            <button>Eu quero</button>
          </a>
        </div>
      </div>
    </section>
  );
}
