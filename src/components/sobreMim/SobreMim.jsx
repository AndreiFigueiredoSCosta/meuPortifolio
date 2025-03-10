import { useState, useRef } from "react";
import "./SobreMimStyle.css";
import "/src/components/Gerais/GeraisStyle.css";
import { useInView } from "../../hooks/useInView";
import { FileDown } from "lucide-react";

export default function SobreMim() {
  const [ativo, setAtivo] = useState(false);
  const [isClickable, setIsClickable] = useState(true);
  const timeoutRef = useRef(null);

  const refSobre = useRef(null);
  const refPerfil = useRef(null);
  const refConhecimentos = useRef(null);
  const refFormacao = useRef(null);
  const refButton = useRef(null);

  const isSobreVisible = useInView(refSobre);
  const isPerfilVisible = useInView(refPerfil);
  const isConhecimentosVisible = useInView(refConhecimentos);
  const isFormacaoVisible = useInView(refFormacao);
  const isButtonVisible = useInView(refButton);

  const baixarCurriculo = () => {
    if (!isClickable) return;

    setAtivo(true);
    setIsClickable(false);

    const link = document.createElement("a");
    link.href = "/andrei-figueiredo.pdf";
    link.download = "andrei-figueiredo.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    timeoutRef.current = setTimeout(() => {
      setAtivo(false);
      setIsClickable(true);
    }, 3000);
  };

  return (
    <section
      className={`w-full bg-stone-950 font-mono text-stone-300 flex flex-col items-center space-y-24 py-32 overflow-hidden `}
      id="sobremim"
    >
      <div className="sm:grid sm:grid-cols-4 sm:grid-rows-6 sm:w-3/5  w-4/5 sm:gap-x-20 sm:gap-y-10 space-y-8">
        <article
          ref={refSobre}
          className={`flex flex-col items-center space-x-6 sm:row-span-6 sm:col-span-4 space-y-10 ${
            isSobreVisible ? "sobreVisivel" : "sobreInvisivel"
          }`}
        >
          <h3 className="text-4xl text-center">Quem eu sou</h3>
          <div className="flex sm:flex-row flex-col items-center space-y-4 space-x-6">
            <img src="/minhaFoto.jpg" alt="" />
            <p className="flex items-center text-2xl">
              Meu nome é Andrei Figueiredo da Silva Costa, tenho 20 anos,
              brasileiro, gaúcho e atualmente estou me formando em Sistemas para
              Internet na Universidade Federal de Santa Maria e trabalhando na
              Compact JR.
            </p>
          </div>
        </article>

        <article
          id="perfil"
          ref={refPerfil}
          className={`space-y-10 row-span-2 col-span-2 ${
            isPerfilVisible ? "perfilVisivel" : "perfilInvisivel"
          }`}
        >
          <h3 className="text-4xl text-center">Perfil</h3>
          <ul className="space-y-4 text-2xl alternarCorDosCabecalhos ">
            <li>
              <h6>Nome:</h6> Andrei Figueiredo da Silva Costa
            </li>
            <li>
              <h6>Nascimento:</h6> 21/02/2005
            </li>
            <li>
              <h6>Cargo:</h6> Full stack/Freelancer
            </li>
            <li>
              <h6>E-mail:</h6> andreifscosta@gmail.com
            </li>
          </ul>
        </article>

        <article
          id="conhecimentos"
          ref={refConhecimentos}
          className={`space-y-10 row-span-2 col-span-2 ${
            isConhecimentosVisible
              ? "conhecimentosVisivel"
              : "conhecimentosInvisivel"
          }`}
        >
          <h3 className="text-4xl text-center">Conhecimentos</h3>
          <ul className="space-y-4 text-2xl alterarCorDasBolinhas flex flex-col items-center sm:items-start">
            <li>Html/css</li>
            <li>Tailwindcss</li>
            <li>JavaScript</li>
            <li>Nodejs</li>
            <li>React</li>
            <li>Java</li>
            <li>Spring</li>
            <li>Docker</li>
          </ul>
        </article>

        <article
          id="formacao"
          ref={refFormacao}
          className={`row-span-6 col-span-4 space-y-10 ${
            isFormacaoVisible ? "formacaoVisivel" : "formacaoInvisivel"
          }`}
        >
          <h3 className="text-4xl text-center">
            Formação e experiência profissional
          </h3>
          <div className="flex flex-col w-[100%] gap-x-6 text-center sm:flex-row space-y-6">
            <div className="xm:w-1/2 flex flex-col items-center space-y-4">
              <a href="https://www.ufsm.br/">
                <img src="/logoUFSM.jpg" alt="" />
              </a>
              <h4 className="text-2xl">
                Universidade Federal de Santa Maria-UFSM
              </h4>
              <h5>Sistemas para internet</h5>
              <p>2023-atualmente / 5° semestre</p>
            </div>
            <div className="sm:w-1/2 flex flex-col items-center space-y-4">
              <a href="https://compactjr.com/">
                <img src="/logoCompact.jpg" alt="" />
              </a>
              <h4 className="text-2xl">CompactJR</h4>
              <h5>
                Trabalhando como desenvolvedor de projetos e também como membro
                dos times de Administrativo-financeiro e Comercial
              </h5>
              <p>2024-atualmente</p>
            </div>
          </div>
        </article>
      </div>
      <div className="sm:w-2/5 w-3/5 flex justify-center">
        <button
          className={` ${ativo ? " button-after " : ""} ${
            isButtonVisible ? "buttonVisivel" : "buttonInvisivel"
          } flex justify-center items-center overflow-hidden rounded-[30px] relative `}
          ref={refButton}
        >
          <h1 className="text-3xl p-6" onClick={baixarCurriculo}>
            Baixe meu currículo
            <FileDown className="ml-3" />
          </h1>
        </button>
      </div>
    </section>
  );
}
