import { Github, Instagram, Linkedin } from "lucide-react";
export default function Footer() {
  return (
    <footer className="bg-black w-[100%] text-stone-300 flex sm:justify-around sm:flex-row items-center py-10 flex-col space-y-4 sm:space-y-0">
      <div>
        <h6>©Todos os direitos reservados - Andrei Figueiredo</h6>
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
    </footer>
  );
}
