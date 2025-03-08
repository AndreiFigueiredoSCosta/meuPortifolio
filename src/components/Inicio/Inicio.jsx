import { useInView } from "../../hooks/useInView";
import React, { useRef } from "react";
import CirculoDeFundo from "./CirculoDeFundo";
import "./InicioStyle.css";
import { Github, Instagram, Linkedin } from "lucide-react";

export default function Início() {
  const refInicio = useRef(null);
  const isVisible = useInView(refInicio);

  return (
    <section
      id="inicio"
      className={`${
        isVisible ? "visivel" : "invisivel"
      }w-screen overflow-hidden relative font-mono bg-stone-950 min-h-screen text-white flex flex-col items-center justify-center sm:py-72 py-60 sm:space-y-20 space-y-10`}
      ref={refInicio}
    >
      <h1 className="sm:text-9xl text-5xl sm:p-10 p-5 text-center mx-4">
        Andrei Figueiredo
      </h1>
      <h2 className="sm:text-5xl text-3xl animacaoPulsar">Full stack dev</h2>
      <div className="absolute ">
        <CirculoDeFundo cor="azul" />
        <CirculoDeFundo cor="roxo" />
        <CirculoDeFundo cor="rosa" />
      </div>
      <div id="links" className="z-30 flex space-x-5">
        <a href="https://www.linkedin.com/in/andrei-figueiredo-da-silva-costa-8022a82a2/">
          <Linkedin className="hover:text-cyan-400" size={30} />
        </a>
        <a href="https://www.instagram.com/andreifs_costa/">
          <Instagram className="hover:text-purple-700" size={30} />
        </a>
        <a href="https://github.com/AndreiFigueiredoSCosta">
          <Github className="hover:text-pink-700 transition" size={30} />
        </a>
      </div>
    </section>
  );
}
