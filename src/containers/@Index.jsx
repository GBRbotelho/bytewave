import React from "react";

//Containers
import Navbar from "./@Navbar";
import Container1 from "./Container1";
import Container2 from "./Container2";

export default function Index() {
  return (
    <main>
      <Navbar />
      <Container1 />
      <Container2 />
    </main>
  );
}
