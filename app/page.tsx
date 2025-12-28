"use client";

import Link from "next/link";
import { useState } from "react";
import { CgSpinner } from "react-icons/cg";

export default function Home() {
  const [isFlipped1, setIsFlipped1] = useState(false);
  const [isFlipped2, setIsFlipped2] = useState(false);
  const [isFlipped3, setIsFlipped3] = useState(false);

  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [instagram, setInstagram] = useState("");

  function sendEmail() {
    setLoading(true);
    fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        instagram: instagram,
        email: email,
      }),
    });
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }
  return (
    <>
      <header className="w-screen h-screen flex flex-col justify-center items-center border-b-1 border-b-black text-center">
        <h1 className="text-2xl font-bold">Evolua sua presença digital!</h1>
        <h2 className="text-[12px]">
          Transforme sua marca e conecte-se com seu público
        </h2>

        <Link href="#register" className="shadow-gray-500 shadow-md p-4 bg-[#536271] w-50 rounded-4xl mt-15 text-white font-bold"> Saiba mais!</Link>
      </header>
      <main className="w-screen h-auto flex flex-col items-center gap-4">
        <section className="w-screen h-auto flex flex-col items-center gap-4 pt-10 pb-10">
          <h3 className="text-2xl font-bold">Duvidas</h3>
          <div className="flex max-[1000px]:flex-col gap-4">
            <div
              onClick={() => setIsFlipped1(!isFlipped1)}
              className={
                isFlipped1
                  ? "animate-flipped shadow-gray-500 shadow-md w-80 h-45 bg-[#6A687A] rounded-2xl flex justify-center items-center text-white text-center p-3"
                  : "animate-not-flipped shadow-gray-500 shadow-md w-80 h-45 bg-[#6A687A] rounded-2xl flex justify-center items-center text-white text-center p-3"
              }
            >
              {!isFlipped1 ? (
                <strong>Este diagnóstico é realmente gratuito?</strong>
              ) : (
                "Sim, totalmente gratuito!"
              )}
            </div>
            <div
              onClick={() => setIsFlipped2(!isFlipped2)}
              className={
                isFlipped2
                  ? "animate-flipped shadow-gray-500 shadow-md w-80 h-45 bg-[#6A687A] rounded-2xl flex justify-center items-center text-white text-center p-3"
                  : "animate-not-flipped shadow-gray-500 shadow-md w-80 h-45 bg-[#6A687A] rounded-2xl flex justify-center items-center text-white text-center p-3"
              }
            >
              {!isFlipped2 ? (
                <strong>
                  Eu não tenho muito tempo. Quanto tempo este processo realmente
                  vai tomar de mim?
                </strong>
              ) : (
                "Exatamente 10 minutos. Meu compromisso é fazer com que esses 10 minutos sejam um dos melhores investimentos de tempo que você fará no seu negócio esta semana."
              )}
            </div>
            <div
              onClick={() => setIsFlipped3(!isFlipped3)}
              className={
                isFlipped3
                  ? "animate-flipped shadow-gray-500 shadow-md w-80 h-45 bg-[#6A687A] rounded-2xl flex justify-center items-center text-white text-center p-3"
                  : "animate-not-flipped shadow-gray-500 shadow-md w-80 h-45 bg-[#6A687A] rounded-2xl flex justify-center items-center text-white text-center p-3"
              }
            >
              {!isFlipped3 ? (
                <strong>
                  Eu não entendo nada de tecnologia. Vou conseguir aplicar as
                  sugestões que você me der?
                </strong>
              ) : (
                "Com certeza. Minha especialidade é justamente traduzir o 'tecniquês' em estratégias práticas para profissionais da saúde."
              )}
            </div>
          </div>
        </section>
        <section className="w-screen h-screen flex flex-col justify-center items-center text-center border-b-1 border-b-black">
          <h2 className="text-2xl font-bold mt-4">Saia na frente em 2026!</h2>
          <h3 className="text-[12px]">
            Coloque o seu investimento no topo do google com essas dicas
          </h3>
        </section>
        <section id="register" className="w-screen h-screen flex flex-col justify-center items-center text-center pt-10 pb-10 flex flex-col gap-5">
          <h2 className="text-2xl font-bold">Cadastre-se</h2>
          <div className="flex flex-col items-start">
            <label className="text-[12px] ml-3" htmlFor="email">
              email:
            </label>
            <input
              className="w-70 h-10 rounded-4xl p-3 border-1 border-black"
              type="text"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col items-start">
            <label className="text-[12px] ml-3" htmlFor="instagram">
              instagram:
            </label>
            <input
              className="w-70 h-10 rounded-4xl p-3 border-1 border-black"
              type="text"
              placeholder="instagram"
              onChange={(e) => setInstagram(e.target.value)}
            />
          </div>
          <button className="shadow-gray-500 shadow-md p-4 bg-[#536271] w-50 rounded-4xl text-white font-bold flex items-center justify-center"
          onClick={sendEmail}>
            {loading ? <CgSpinner className="animate-spin" size={20} /> : "Quero minhas dicas!"}
          </button>
        </section>
        <footer className="w-screen shadow-gray-500 shadow-sm h-40 bg-[#6A687A]">
          <h4 className="text-white text-center pt-16 opacity-30">
            © 2025 Desenvolvido por Daniel Silva
          </h4>
        </footer>
      </main>
    </>
  );
}
