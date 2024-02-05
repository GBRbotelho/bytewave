import React from "react";
import styles from "./Container7.module.css";

export default function Container7() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>O que nossos clientes dizem</h2>
        </div>
        <div className={styles.cards}>
          <div className={styles.card}>
            <p>
              Entendemos como seu negócio funciona, qual seu publico idela, seus
              principais concorrentes e quais{" "}
            </p>
            <div className={styles.dataCard}>
              <div className={styles.circle}></div>
              <p>Pedro henrique</p>
              <span>CEO</span>
            </div>
          </div>
          <div className={styles.card}>
            <p>
              Entendemos como seu negócio funciona, qual seu publico idela, seus
              principais concorrentes e quais{" "}
            </p>
            <div className={styles.dataCard}>
              <div className={styles.circle}></div>
              <p>Pedro henrique</p>
              <span>CEO</span>
            </div>
          </div>
          <div className={styles.card}>
            <p>
              Entendemos como seu negócio funciona, qual seu publico idela, seus
              principais concorrentes e quais{" "}
            </p>
            <div className={styles.dataCard}>
              <div className={styles.circle}></div>
              <p>Pedro henrique</p>
              <span>CEO</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
