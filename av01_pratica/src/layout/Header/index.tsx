import { MdOutlinePets } from "react-icons/md";
import Button from "../../components/Button";

export default function Header() {
  return (
    <header className="px-20 py-6 flex items-center justify-between">
      <div className="flex gap-2">
        <MdOutlinePets size={24} color="#3F9271" />
        <p className="font-black text-[#1a1d1c]">Pet</p>
        <p className="font-black text-[#3F9271]">Care</p>
      </div>

      <Button
        text={"Lista dos Favoritos"}
        backgroundColor={"bg-[#3F9271]"}
        textColor={"text-white"}
        fontSize={"text-sm"}
        link=""
      />
    </header>
  );
}
