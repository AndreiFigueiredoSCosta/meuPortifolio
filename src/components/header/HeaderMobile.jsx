import { MenuIcon, X } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { Link } from "react-scroll";
import "./HeaderStyle.css";

export default function HeaderMobile() {
  const [menuAberto, setMenuAberto] = useState(false);
  const menuRef = useRef(null);

  const abrirMenu = () => {
    setMenuAberto(!menuAberto);
  };

  useEffect(() => {
    const handleClickFora = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuAberto(false);
      }
    };

    if (menuAberto) {
      document.addEventListener("mousedown", handleClickFora);
    } else {
      document.removeEventListener("mousedown", handleClickFora);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickFora);
    };
  }, [menuAberto]);

  return (
    <header
      className={`${
        menuAberto ? "menu-aberto" : "menu-fechado"
      } overflow-hidden fixed sm:hidden text-stone-300 w-screen z-50 font-mono text-2xl items-center justify-center flex flex-col`}
      ref={menuRef}
    >
      <button
        className="z-50 bg-black w-screen flex justify-center h-[100%] py-8"
        onClick={abrirMenu}
      >
        {menuAberto ? <X size={40} /> : <MenuIcon size={40} />}
      </button>
      <div className={` w-screen flex flex-col items-center justify-center`}>
        <ul
          className={` flex flex-col nav-links w-full items-center justify-center space-y-8 z-40 pb-8  bg-black`}
        >
          <li>
            <Link
              className="cursor-pointer  hover:text-cyan-400 transition delay-75"
              to="inicio"
              smooth={true}
              onClick={() => setMenuAberto(false)}
            >
              Início
            </Link>
          </li>
          <li>
            <Link
              className="cursor-pointer  hover:text-cyan-800 transition delay-75"
              to="sobremim"
              smooth={true}
              onClick={() => setMenuAberto(false)}
            >
              Sobre mim
            </Link>
          </li>
          <li>
            <Link
              className="cursor-pointer  hover:text-purple-700 transition delay-75"
              to="servicos"
              smooth={true}
              onClick={() => setMenuAberto(false)}
            >
              Serviços
            </Link>
          </li>
          <li>
            <Link
              className="cursor-pointer  hover:text-pink-800 transition delay-75"
              to="projetos"
              smooth={true}
              onClick={() => setMenuAberto(false)}
            >
              Projetos
            </Link>
          </li>
          <li>
            <Link
              className="cursor-pointer  hover:text-red-900 transition delay-75"
              to="contato"
              smooth={true}
              onClick={() => setMenuAberto(false)}
            >
              Contato
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
