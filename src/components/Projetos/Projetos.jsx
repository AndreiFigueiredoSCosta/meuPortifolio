import { useRef } from "react";
import Card from "./Card";
import "./ProjetoStyle.css";
import { useInView } from "../../hooks/useInView";

export default function Projetos() {
  const refTituloProjetos = useRef(null);
  const refProjetos = useRef(null);

  const isTituloProjetosVisible = useInView(refTituloProjetos);
  const isProjetoVisivel = useInView(refProjetos);

  return (
    <section
      id="projetos"
      className={`${
        isProjetoVisivel ? "projetoVisivel " : "projetoInvisivel "
      } bg-stone-950 py-32 flex justify-center overflow-hidden mt-0`}
      ref={refProjetos}
    >
      <div className="w-3/5 flex flex-col items-center sm:space-y-32 space-y-12">
        <h2
          className={`${
            isTituloProjetosVisible
              ? "tituloProjetosVisivel"
              : "tituloProjetosInvisivel"
          } text-5xl text-center text-white p-2`}
          ref={refTituloProjetos}
        >
          Projetos de estudo
        </h2>
        <div
          className={` flex justify-center items-center space-x-4 sm:flex-row flex-col space-y-6`}
        >
          <Card
            nome="Site de clima"
            sobre="Veja o clima em tempo real de qualquer cidade no mundo, feito utilizando React e com a OpenWeatherAPI"
            imagem="/projetoClima.png"
            linkGit="https://github.com/AndreiFigueiredoSCosta/SiteDeClima"
            linkVercel="https://site-de-clima.vercel.app/"
            cor="azul"
          />
          <Card
            nome="Catálogo de Filmes"
            sobre="Veja os filmes em catálogo de cada gênero e salve-os na sua lista de favoritos!"
            imagem="/projetoCatalogo.png"
            linkGit="https://github.com/AndreiFigueiredoSCosta/appDeCatalogoDeFilmes"
            linkVercel="https://app-de-catalogo-de-filmes.vercel.app/"
            cor="roxo"
          />
          <Card
            nome="Meu portifólio"
            sobre="Meu portifólio feito utilizando react e tailwindcss"
            imagem="/fotoPortfolio.png"
            linkGit="https://github.com/AndreiFigueiredoSCosta/MeuPortifolio"
            linkVercel=""
            cor="rosa"
          />
          <Card
            nome="Api de cadastro de livros"
            sobre="Uma api para cadastro de livros e autores construindo utilizando java, Spring, postgres e documentada utilizando springdoc"
            imagem="/projetoApi.png"
            linkGit="https://github.com/AndreiFigueiredoSCosta/apiLivro"
            linkVercel=""
            cor="vermelho"
          />
        </div>
      </div>
    </section>
  );
}
