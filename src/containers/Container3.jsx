import React from "react";
import styles from "./Container3.module.css";

export default function Container3() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>O que desenvolvemos?</h2>
        <div className={styles.divCards}>
          <div className={styles.card}>
            <div></div>
            <h2>landpages</h2>
            <p>
              sites que são focados em vendas especificas desenvolvidos em 1
              unica pagina
            </p>
          </div>
          <div className={styles.card}>
            <div></div>
            <h2>Institucionais</h2>
            <p>
              sites que são focados em vendas especificas desenvolvidos em 1
              unica pagina
            </p>
          </div>
          <div className={styles.card}>
            <div></div>
            <h2>Blogs e portais</h2>
            <p>
              sites que são focados em vendas especificas desenvolvidos em 1
              unica pagina
            </p>
          </div>
          <div className={styles.card}>
            <div></div>
            <h2>sistemas</h2>
            <p>
              sites que são focados em vendas especificas desenvolvidos em 1
              unica pagina
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
