import React from "react";
import styles from "./@Index.module.css";

//Containers
import Navbar from "./@Navbar";
import Container1 from "./Container1";
import Container3 from "./Container3";
import Container4 from "./Container4";
import Container5 from "./Container5";
import Container6 from "./Container6";

export default function Index() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Container1 />
      <Container3 />
      <Container4 />
      <Container5 />
      <Container6 />
    </main>
  );
}
