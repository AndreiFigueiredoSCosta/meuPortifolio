import { Earth, PanelsLeftBottom, Server, Wallpaper } from "lucide-react";
import { useRef } from "react";
import { useInView } from "../../hooks/useInView";
import "./ServicosStyle.css";
export default function Servicos() {
  const refServico = useRef(null);
  const refTituloSer = useRef(null);

  const isServicoVisible = useInView(refServico);
  const isTituloServicoVisible = useInView(refTituloSer);

  return (
    <section
      id="servicos"
      className="flex flex-col justify-center items-center bg-stone-950 py-32 text-stone-300 space-y-32 my-0"
    >
      <h2
        className={`${
          isTituloServicoVisible
            ? "tituloServicoVisivel"
            : "tituloServicoInvisivel"
        } text-6xl text-center animacaoPulsar `}
        ref={refTituloSer}
      >
        Serviços
      </h2>
      <div
        className={`${
          isServicoVisible ? "servicosVisivel" : "servicosInvisivel"
        } w-3/5 flex justify-around text-center text-2xl font-bold flex-col sm:flex-row space-y-6 sm:space-y-0`}
        ref={refServico}
      >
        <article className="sm:w-1/3 flex flex-col items-center space-y-10">
          <Earth className="text-cyan-400" size={150} />
          <h5>Sistemas web completos</h5>
        </article>
        <article className="sm:w-1/3 flex flex-col items-center space-y-10">
          <Wallpaper className="text-purple-700 " size={150} />
          <h5>Landing pages</h5>
        </article>
        <article className="sm:w-1/3 flex flex-col items-center space-y-10">
          <Server className="text-pink-700 " size={150} />
          <h5>API´s rest</h5>
        </article>
      </div>
    </section>
  );
}
