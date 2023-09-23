import SubtitleSection from "../SubtitleSection/subtitle-section.component";
import ItemSubtotal from "./parts/item-subtotal.part";
import { useCart } from "../../hooks/useCart";
import { MdOutlineClose } from "react-icons/md";
import AnimationEmpty from "./parts/animation-cart-empty";
import { useEffect } from "react";
import { valueToReal } from "../../utils/convertToReal";
import { useNavigate } from "react-router-dom";

export default function OrderSidebar() {
  const {
    isCartVisible,
    setIsCartVisible,
    cart,
    setCurrentOrder,
    currentOrder,
  } = useCart();

  const navigate = useNavigate();

  function addItems() {
    setCurrentOrder({
      ...currentOrder!,
      items: cart,
    });
    navigate("/checkout");
  }

  useEffect(() => {
    const newTotal = cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );

    setCurrentOrder({
      ...currentOrder!,
      total: Number(newTotal.toFixed(2)),
    });
  }, [cart]);

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
      {cart.length > 0 ? (
        <>
          <div className="flex flex-col mt-8 flex-grow ">
            <div className="max-h-[250px] overflow-y-scroll">
              {cart.map((product) => (
                <ItemSubtotal key={product.id} product={product} />
              ))}
            </div>
            <div className="flex flex-row justify-between mt-8">
              <span className="text-xs font-bold">Sub Total</span>
              <span className="text-xs font-bold">
                {valueToReal(currentOrder!.total)}
              </span>
            </div>
            <div className="flex flex-row justify-between mt-2">
              <span className="text-xs font-light">Taxa de Entrega</span>
              <span className="text-xs font-light">R$ 6,00</span>
            </div>
          </div>
          <div className="flex flex-col mb-16">
            <button
              onClick={addItems}
              className="bg-primary p-3 w-full rounded-lg"
            >
              <span className="font-bold text-white text-lg">
                Pagar {valueToReal(currentOrder!.total + 6)}
              </span>
            </button>
          </div>
        </>
      ) : (
        <div className="relative flex-1 items-center justify-center">
          <div className="absolute text-center top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
            <AnimationEmpty />
            <span className="mt-6 block font-bold w-full">
              Seu carrinho está vazio
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
