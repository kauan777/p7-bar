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
        <ItemSidebar icon={Vendas} label="Vendas" active={false} />
        <ItemSidebar icon={Mensagens} label="Mensagens" active={false} />
        <ItemSidebar icon={Pedidos} label="Pedidos" active={false} />
        <ItemSidebar
          icon={Configuracoes}
          label="Configurações"
          active={false}
        />
      </div>
      <div className="flex justify-center flex-col mt-auto">
        <div className="md:w-20 py-2 flex flex-col justify-center items-center">
          <img src={Sair} className="w-6 h-6" />
          <span className="text-xs text-gray-400 mt-1">Sair</span>
        </div>
      </div>
    </div>
  );
}
