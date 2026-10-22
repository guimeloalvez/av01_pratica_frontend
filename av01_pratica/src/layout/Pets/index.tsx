import FetchImageSrc from "../../../public/img/hero.png";
import PetCard from "../../components/PetCard";

export default function Pets() {
  return (
    <section className="flex flex-col items-start justify-center py-20 font-display">
      <h3 className="text-3xl max-w-160 font-black text-[#153229]">Pets</h3>

      <p className="mt-6 max-w-120 gap-4">
        Clientes, pets e serviços organizados para o atendimento do dia a dia.
      </p>

      <div className="flex flex-col items-center justify-center gap-1">
        <p className="text-[12px]">Patinhas felizes, tutores tranquilos.</p>
      </div>
    </section>
  );
}
