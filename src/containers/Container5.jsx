import React from "react";
import styles from "./Container5.module.css";

//Icons
import icon1 from "../assets/imgs/8.svg";
import icon2 from "../assets/imgs/9.svg";
import icon3 from "../assets/imgs/10.svg";
import icon4 from "../assets/imgs/11.svg";

export default function Container5() {
  return (
    <section className={styles.section}>
      <div className={styles.title}>
        <h2>Como fazemos nosso processo ?</h2>
      </div>
      <div className={styles.divCard}>
        <div className={styles.card}>
          <div className={styles.titleCard}>
            <div className={styles.contentTitle}>
              <div className={styles.icon}>
                <img src={icon1} alt="" />
              </div>
              <div className={styles.textTitle}>
                <h2>Ideia</h2>
                <p>Passo 1</p>
              </div>
            </div>
          </div>
          <div className={styles.textCard}>
            <p>
              Entendemos como seu negócio funciona, qual seu publico idela, seus
              principais concorrentes e quais estrategias de rentenção podemos
              usar para tranformar seu negocio
            </p>
          </div>
        </div>
      </div>
      <div className={styles.divCard}>
        <div className={styles.card}>
          <div className={styles.textCard}>
            <p>
              Com base nas informações coletadas no passo 1, criamos 2 opções
              viaveis para você escolher.
            </p>
          </div>
          <div className={styles.titleCard2}>
            <div className={styles.contentTitle}>
              <div className={styles.icon}>
                <img src={icon2} alt="" />
              </div>
              <div className={styles.textTitle}>
                <h2>MVP</h2>
                <p>Passo 2</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.divCard}>
        <div className={styles.card}>
          <div className={styles.titleCard}>
            <div className={styles.contentTitle}>
              <div className={styles.icon}>
                <img src={icon3} alt="" />
              </div>
              <div className={styles.textTitle}>
                <h2>Construção</h2>
                <p>Passo 3</p>
              </div>
            </div>
          </div>
          <div className={styles.textCard}>
            <p>
              Entendemos como seu negócio funciona, qual seu publico idela, seus
              principais concorrentes e quais estrategias de rentenção podemos
              usar para tranformar seu negocio
            </p>
          </div>
        </div>
      </div>
      <div className={styles.divCard}>
        <div className={styles.card}>
          <div className={styles.textCard}>
            <p>
              Entendemos como seu negócio funciona, qual seu publico idela, seus
              principais concorrentes e quais estrategias de rentenção podemos
              usar para tranformar seu negocio
            </p>
          </div>
          <div className={styles.titleCard2}>
            <div className={styles.contentTitle}>
              <div className={styles.icon}>
                <img src={icon4} alt="" />
              </div>
              <div className={styles.textTitle}>
                <h2>Entrega</h2>
                <p>Passo Final</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
