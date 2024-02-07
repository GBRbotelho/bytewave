import React, { useEffect, useState } from "react";
import styles from "./@Navbar.module.css";
import Logo from "../assets/imgs/Bytewave.png";
import Wpp from "../assets/imgs/1.svg";
import MenuHamburger from "../assets/imgs/hamburger.svg";
import Close from "../assets/imgs/close.svg";

export default function Navbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, visible]);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    // Limita o desaparecimento da barra de navegação após rolar 120px
    const scrollThreshold = 55;

    if (currentScrollPos < scrollThreshold) {
      setVisible(true); // Mantém a barra de navegação visível
    } else {
      const visible = prevScrollPos > currentScrollPos;
      setVisible(visible);
    }

    setPrevScrollPos(currentScrollPos);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setDropdownOpen(false); // Fechar o dropdown após clicar em um item
    }
  };
  return (
    <nav
      className={`${styles.nav} ${visible ? styles.visible : styles.hidden}`}
    >
      <div className={styles.logo}>
        <img src={Logo} alt="" />
      </div>
      <div className={styles.menu}>
        <ul>
          <li onClick={() => scrollToSection("home")}>HOME</li>
          <li onClick={() => scrollToSection("servicos")}>SERVIÇOS</li>
          <li onClick={() => scrollToSection("clientes")}>CLIENTES</li>
          <li onClick={() => scrollToSection("sobre")}>SOBRE</li>
        </ul>
      </div>
      <div className={styles.button}>
        <button>
          {" "}
          <img src={Wpp} alt="" />
          ORÇAMENTO
        </button>
      </div>
      <div onClick={toggleDropdown} className={styles.hamburger}>
        <img src={isDropdownOpen ? Close : MenuHamburger}></img>
      </div>
      <div
        className={`${styles.dropdown} ${isDropdownOpen ? styles.open : ""}`}
      >
        <ul>
          <li onClick={() => scrollToSection("home")}>HOME</li>
          <li onClick={() => scrollToSection("servicos")}>SERVIÇOS</li>
          <li onClick={() => scrollToSection("clientes")}>CLIENTES</li>
          <li onClick={() => scrollToSection("sobre")}>SOBRE</li>
          <a>
            <div className={styles.button}>
              <button>
                <img src={Wpp} alt="" />
                ORÇAMENTO
              </button>
            </div>
          </a>
        </ul>
      </div>
    </nav>
  );
}
