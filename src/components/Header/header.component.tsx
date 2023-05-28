import Logo from "../Logo/logo.component";
import { RiMenu4Fill } from "react-icons/ri";
import { BsHandbag } from "react-icons/bs";
import { useCart } from "../../hooks/useCart";
import { useSidebar } from "../../hooks/useSidebar";

export default function Header() {
  const { setIsOpenSideBar } = useSidebar();
  const { setIsCartVisible } = useCart();

  return (
    <header className="fixed z-10 bg-white py-4 px-10 h-20  w-full flex items-center justify-between md:hidden">
      <button onClick={() => setIsOpenSideBar(true)}>
        <RiMenu4Fill size={28} />
      </button>
      <Logo />
      <button className="relative" onClick={() => setIsCartVisible(true)}>
        <div className="flex items-center justify-center absolute -top-1 -right-2 bg-red-600 text-white text-center font-bold rounded-full text-[12px] w-5 h-5">
          <span>2</span>
        </div>
        <BsHandbag size={28} />
      </button>
    </header>
  );
}
