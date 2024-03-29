import React from "react";
import styles from "./@Index.module.css";

//Containers
import Navbar from "./@Navbar";
import Container1 from "./Container1";
import Container2 from "./Container2";
import Container3 from "./Container3";
import Container4 from "./Container4";
import Container5 from "./Container5";
import Container6 from "./Container6";
import Container7 from "./Container7";
import Container8 from "./Container8";
import Container9 from "./Container9";

export default function Index() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Container1 />
      <Container2 />
      <Container3 />
      <Container4 />
      <Container5 />
      <Container6 />
      {/* <Container7 /> */}
      <Container8 />
      <Container9 />
    </main>
  );
}
