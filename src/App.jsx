import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/header/Header";
import Início from "./components/Inicio/Inicio";
import SobreMim from "./components/sobreMim/SobreMim";
import Servicos from "./components/servicos/Servicos";
import Projetos from "./components/Projetos/Projetos";
import Contato from "./components/Contato/Contato";
import Footer from "./components/footer";
import React, { useRef } from "react";
import HeaderMobile from "./components/header/HeaderMobile";

function App() {
  return (
    <>
      <Header />
      <HeaderMobile />
      <Início />
      <SobreMim />
      <Servicos />
      <Projetos />
      <Contato />
      <Footer />
    </>
  );
}

export default App;
