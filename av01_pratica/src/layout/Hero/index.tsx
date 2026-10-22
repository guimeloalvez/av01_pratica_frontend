import HeroImg from "../../../public/img/hero.png";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center py-20 font-display">
      <h1 className="mt-6 text-5xl max-w-160 font-black text-[#153229]">
        Cuidado completo em um só <span className="text-[#19b885]">lugar</span>
        <img src={HeroImg} alt="" />
      </h1>

      <p className="mt-6 max-w-120 gap-4">
        Clientes, pets e serviços organizados para o atendimento do dia a dia.
      </p>

      <div className="flex flex-col items-center justify-center gap-1">
        <p className="text-[12px] text-[#19b885]">
          Patinhas felizes, tutores tranquilos.
        </p>
      </div>
    </section>
  );
}
