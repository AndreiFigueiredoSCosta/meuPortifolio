import { useRef, useState, useEffect } from "react";

export default function Card(props) {
  const [virado, setVirado] = useState(false);
  const cardRef = useRef(null);
  const virarCard = () => {
    setVirado(!virado);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        setVirado(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="card w-[250px] h-[400px]" ref={cardRef}>
      <div
        className={`${
          virado ? "virar-card" : ""
        } flip w-[100%] h-[100%] relative`}
        onClick={virarCard}
      >
        <div
          className={`w-[100%] h-[100%] absolute frente flex flex-col items-center borda-${props.cor} rounded-[30px] bg-black`}
        >
          <img className="w-[92%] rounded-md mt-4 " src={props.imagem} alt="" />
          <div className="h-[60%] w-3/5 flex flex-col justify-between text-center">
            <h6 className="text-white text-2xl mt-8 ">{props.nome}</h6>
            <h6
              className={`texto-${props.cor} text-2xl borda-${props.cor} rounded-[20px] p-3`}
            >
              Saiba mais
            </h6>
          </div>
        </div>
        <div
          className={`w-[100%] h-[100%] absolute verso rounded-[30px] fundo-${props.cor} text-center flex flex-col items-center justify-between`}
        >
          <p className="text-xl mx-2 my-4">{props.sobre}</p>
          <div className="w-[100%] h-[100%] space-y-2 flex flex-col items-center justify-center">
            <div className="text-black p-3 text-xl font-bold rounded-[20px] border-black border-4 w-2/3 transition hover:scale-105">
              <a href={props.linkGit}>link Git</a>
            </div>
            <div
              className={`${
                props.linkVercel == ""
                  ? "hidden"
                  : "text-black p-3 text-xl font-bold rounded-[20px] border-black border-4 w-2/3 transition hover:scale-105"
              }`}
            >
              <a href={props.linkVercel}>Link Vercel</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
