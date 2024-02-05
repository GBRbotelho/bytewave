import React from "react";
import styles from "./@Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>LOGO BYTEWAVE</div>
      <div className={styles.menu}>
        <ul>
          <li>HOME</li>
          <li>SERVIÇOS</li>
          <li>CLIENTES</li>
          <li>SOBRE</li>
        </ul>
      </div>
      <div className={styles.button}>BOTÃO ORÇAMENTO</div>
    </nav>
  );
}
