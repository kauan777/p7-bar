import { MdAddCircleOutline } from "react-icons/md";
import { valueToReal } from "../../../utils/convertToReal";
import { ItemProduct, useCart } from "../../../hooks/useCart";
import { toast } from "react-hot-toast";

type Props = {
  product: ItemProduct;
};

export default function ItemOrder({ product }: Props) {
  const { handleAddItemToCart } = useCart();

  return (
    <div className="relative  w-full px-2 md:w-36 max-h-[300px] py-5 rounded-lg bg-white shadow-lg flex flex-col  items-center mx-2 mb-4">
      <div className="rounded-full w-[90px] h-[90px] bg-tertiary p-2 flex justify-center items-center">
        <img
          style={{ width: "100%", height: "100%" }}
          src={product.image.url}
          className="rounded-full object-cover"
        />
      </div>
      <div className="flex h-full flex-col mt-3 items-center justify-between text-center">
        <div className="flex flex-col mt-3 items-center text-center">
          <span className="font-bold text-sm">{product.title}</span>
          <span className="font-light text-xs text-gray-400 mt-1">
            {valueToReal(product.price)}
          </span>
        </div>
        <button
          onClick={() => {
            handleAddItemToCart({
              ...product,
              quantity: 1,
            });
          }}
          className="flex justify-center hover:bg-primary hover:text-white font-bold items-center gap-2 rounded-md mt-4 border border-primary w-full text-primary  p-2"
        >
          <MdAddCircleOutline size={22} />
          <span>Adicionar</span>
        </button>
      </div>
    </div>
  );
}
