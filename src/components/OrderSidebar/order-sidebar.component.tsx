import SubtitleSection from "../SubtitleSection/subtitle-section.component";
import ItemSubtotal from "./parts/item-subtotal.part";
import Hamburguer from "../../assets/img/1.png";
import Hamburguer2 from "../../assets/img/2.png";
import Hamburguer3 from "../../assets/img/3.png";
import Hamburguer4 from "../../assets/img/4.png";
import { useCart } from "../../hooks/useCart";
import { MdOutlineClose } from "react-icons/md";

export default function OrderSidebar() {
  const { isCartVisible, setIsCartVisible } = useCart();

  return (
    <div
      className={`w-full ${
        !isCartVisible ? "translate-x-[100%] md:translate-x-0" : "translate-x-0"
      } h-screen w-full z-30 md:w-3/12 bg-white p-8 fixed md:relative overflow-y-hidden  flex flex-col transition-all ease-linear`}
    >
      <div className="flex justify-between items-center">
        <SubtitleSection firstWord="Subtotal do " secondWord="Pedido" />
        <button
          onClick={() => setIsCartVisible(false)}
          className="block md:hidden text-gray-400 hover:text-red-500 transition-all"
        >
          <MdOutlineClose size={32} />
        </button>
      </div>
      <div className="flex flex-col mt-8 flex-grow ">
        <div className="max-h-[250px] overflow-y-scroll">
          <ItemSubtotal
            title="Hambúrguer Triplo"
            price="R$ 29,90"
            img={Hamburguer}
            total={1}
            priceTotal="R$ 29,90"
          />
          <ItemSubtotal
            title="Hambúrguer Cheese"
            price="R$ 19,40"
            img={Hamburguer2}
            total={2}
            priceTotal="R$ 38,80"
          />
          <ItemSubtotal
            title="Hambúrguer Triplo 2"
            price="R$ 34,50"
            img={Hamburguer3}
            total={1}
            priceTotal="R$ 34,50"
          />
          <ItemSubtotal
            title="Hambúrguer Frango"
            price="R$ 29,90"
            img={Hamburguer4}
            total={1}
            priceTotal="R$ 29,90"
          />
          <ItemSubtotal
            title="Hambúrguer Frango"
            price="R$ 29,90"
            img={Hamburguer4}
            total={1}
            priceTotal="R$ 29,90"
          />
          <ItemSubtotal
            title="Hambúrguer Frango"
            price="R$ 29,90"
            img={Hamburguer4}
            total={1}
            priceTotal="R$ 29,90"
          />
          <ItemSubtotal
            title="Hambúrguer Frango"
            price="R$ 29,90"
            img={Hamburguer4}
            total={1}
            priceTotal="R$ 29,90"
          />
          <ItemSubtotal
            title="Hambúrguer Frango"
            price="R$ 29,90"
            img={Hamburguer4}
            total={1}
            priceTotal="R$ 29,90"
          />
        </div>
        <div className="flex flex-row justify-between mt-8">
          <span className="text-xs font-bold">Sub Total</span>
          <span className="text-xs font-bold">R$ 133,10</span>
        </div>
        <div className="flex flex-row justify-between mt-2">
          <span className="text-xs font-light">Taxa (5%)</span>
          <span className="text-xs font-light">R$ 6,65</span>
        </div>
      </div>
      <div className="flex flex-col mb-16">
        <a href="/checkout">
          <button className="bg-primary p-3 w-full rounded-lg">
            <span className="font-bold text-white text-lg">
              Pagar R$ 133,10
            </span>
          </button>
        </a>
      </div>
    </div>
  );
}
