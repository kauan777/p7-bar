import { ItemProduct, useCart } from "../../../hooks/useCart";
import { valueToReal } from "../../../utils/convertToReal";

type Props = {
  product: ItemProduct;
};

export default function ItemSubtotal({ product }: Props) {
  const { handleIncrementQuantity, handleDecrementQuantity } = useCart();

  return (
    <div className="flex flex-row mb-5 border-b pb-4">
      <div className="w-14 py-2 bg-tertiary rounded-lg flex justify-center items-center">
        <img src={product.image.url} className="w-10 h-10" />
      </div>
      <div className="flex flex-col grow pl-3 items-start justify-center">
        <span className="font-bold text-xs truncate w-[125px]">
          {product.title}
        </span>
        <span className="font-light text-xs text-gray-400 mt-1">
          {valueToReal(product.price)}
        </span>
      </div>
      <div className="flex flex-col mr-4 pl-2 items-start justify-center">
        <span className="font-bold text-xs">{product.quantity}x</span>
        <span className="font-light text-xs text-gray-400">100</span>
      </div>
      <div className="flex mx-2 flex-col gap-2">
        <button
          onClick={() => handleIncrementQuantity(product.id)}
          className="px-2 bg-green-400 rounded text-green-600 font-bold"
        >
          +
        </button>
        <button
          onClick={() => handleDecrementQuantity(product.id, product.quantity)}
          className="px-2 bg-red-400 rounded text-red-600 font-bold"
        >
          -
        </button>
      </div>
    </div>
  );
}
