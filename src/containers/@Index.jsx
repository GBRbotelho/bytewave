import React from "react";

//Containers
import Navbar from "./@Navbar";
import Container1 from "./Container1";
import Container3 from "./Container3";
import Container4 from "./Container4";

export default function Index() {
  return (
    <main>
      <Navbar />
      <Container1 />
      <Container3 />
      <Container4 />
    </main>
  );
}
