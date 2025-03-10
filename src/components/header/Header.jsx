import { useEffect } from "react";
import { Link } from "react-scroll";

export default function Header() {
  return (
    <header className="hidden z-50 font-mono sm:flex justify-center text-2xl text-stone-300 bg-black w-full py-5 fixed">
      <ul className="flex space-x-20 nav-links">
        <li>
          <Link
            className="cursor-pointer  hover:text-cyan-400 transition delay-75"
            to="inicio"
            smooth={true}
          >
            Início
          </Link>
        </li>
        <li>
          <Link
            className="cursor-pointer  hover:text-cyan-800 transition delay-75"
            to="sobremim"
            smooth={true}
          >
            Sobre mim
          </Link>
        </li>
        <li>
          <Link
            className="cursor-pointer  hover:text-purple-700 transition delay-75"
            to="servicos"
            smooth={true}
          >
            Serviços
          </Link>
        </li>
        <li>
          <Link
            className="cursor-pointer  hover:text-pink-800 transition delay-75"
            to="projetos"
            smooth={true}
          >
            Projetos
          </Link>
        </li>
        <li>
          <Link
            className="cursor-pointer  hover:text-red-900 transition delay-75"
            to="contato"
            smooth={true}
          >
            Contato
          </Link>
        </li>
      </ul>
    </header>
  );
}
