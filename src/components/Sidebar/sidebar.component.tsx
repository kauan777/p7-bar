import Home from "../../assets/icons/home.png";
import Vendas from "../../assets/icons/vendas.png";
import Pedidos from "../../assets/icons/pedidos.png";
import Mensagens from "../../assets/icons/mensagens.png";
import Configuracoes from "../../assets/icons/configuracoes.png";
import Sair from "../../assets/icons/sair.png";
import ItemSidebar from "./parts/item-sidebar.part";
import { MdOutlineClose } from "react-icons/md";
import Logo from "../Logo/logo.component";
import { useSidebar } from "../../hooks/useSidebar";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const { isOpenSideBar, setIsOpenSideBar } = useSidebar();

  return (
    <div
      className={`fixed ${
        !isOpenSideBar
          ? "translate-x-[-100%] md:translate-x-0"
          : "translate-x-0"
      } md:relative z-20 items-center shadow-2xl md:shadow-sm h-full text-center w-4/12 md:w-1/12 bg-white p-6 md:flex flex-col transition-all ease-in`}
    >
      <button
        onClick={() => setIsOpenSideBar(false)}
        className="block mx-auto md:hidden text-gray-400 hover:text-red-500 transition-all"
      >
        <MdOutlineClose size={32} />
      </button>
      <div className="hidden md:block">
        <Logo />
      </div>
      <div className="flex-col flex-grow justify-start mt-4 items-center pt-6">
        <ItemSidebar icon={Home} label="Home" active={true} />
        <ItemSidebar
          icon={Mensagens}
          label="Mensagens"
          active={false}
          isLocked
        />
        <ItemSidebar icon={Pedidos} label="Pedidos" active={false} isLocked />
        <ItemSidebar
          icon={Configuracoes}
          label="Configurações"
          active={false}
          isLocked
        />
      </div>
      <Link to={"https://api.whatsapp.com/send?phone=5511946339136"} target="_blank" className="flex justify-center flex-col mt-auto">
        <div className="md:w-20 py-2 flex flex-col justify-center items-center">
          <BsWhatsapp color="#25D366" size={32} />
          <span className="text-xs text-[#25D366] mt-1">Whatsapp</span>
        </div>
      </Link>
      <Link to={"https://www.instagram.com/p7_bars/"} target="_blank" className="flex mt-5 justify-center flex-col mt-auto">
        <div className="md:w-20 py-2 flex flex-col justify-center items-center">
          <BsInstagram color="#d32579" size={32} />
          <span className="text-xs text-[#d32579] mt-1">Instagram</span>
        </div>
      </Link>
    </div>
  );
}
