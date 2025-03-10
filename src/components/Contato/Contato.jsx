import { useRef } from "react";
import { useInView } from "../../hooks/useInView";
import "./ContatoStyle.css";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contato() {
  const refTituloContato = useRef(null);
  const refContatos = useRef(null);

  const isTituloContatoVisible = useInView(refTituloContato);
  const isContatoVisible = useInView(refContatos);

  return (
    <section
      id="contato"
      className="w-full bg-stone-950 py-32 text-stone-300 flex flex-col items-center justify-center space-y-32 overflow-hidden"
    >
      <h2
        className={`${
          isTituloContatoVisible
            ? "titulo-contato-visivel"
            : "titulo-contato-invisivel"
        } text-6xl text-center`}
        ref={refTituloContato}
      >
        Contato
      </h2>
      <div
        className={`${
          isContatoVisible ? "contato-visivel" : "contato-invisivel"
        } flex sm:justify-around text-center w-3/5 text-2xl font-bold sm:flex-row flex-col space-y-6 sm:space-y-0 justify-center items-center`}
        ref={refContatos}
      >
        <article className="sm:w-1/3 flex flex-col items-center space-y-10">
          <Mail className="text-cyan-400" size={150} />
          <h5>andreifscosta@gmail.com</h5>
        </article>
        <article className="sm:w-1/3 flex flex-col items-center space-y-10">
          <Phone className="text-purple-700" size={150} />
          <h5>(55) 99983-8609</h5>
        </article>
        <article className="sm:w-1/3 flex flex-col items-center space-y-10">
          <MapPin className="text-pink-700" size={150} />
          <h5>Formigueiro - Rio Grande do Sul - Brasil</h5>
        </article>
      </div>
    </section>
  );
}
