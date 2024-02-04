import React from "react";
import styles from "./Container1.module.css";

export default function Container1() {
  return (
    <section className={styles.section}>
      <div className={styles.div1}>
        <div className={styles.cardDiv1}>
          <h1>utilize nossas soluções para expandir sua empresa</h1>
          <p>Faça agora um orçamento com um dos nossos especialistas</p>
          <button>COMEÇAR</button>
        </div>
      </div>
      <div className={styles.div2}>
        <div className={styles.cardDiv2}>
          <div className={styles.cardImgs}>
            <div className={styles.divImgs1}>
              <div className={styles.img1}></div>
              <div className={styles.img2}></div>
            </div>
            <div className={styles.divImgs2}>
              <div className={styles.img3}></div>
              <div className={styles.img4}></div>
            </div>
          </div>
          <div className={styles.divBottom}>
            <h1>mais clientes</h1>
          </div>
        </div>
      </div>
    </section>
  );
}
