import { MdAddCircleOutline } from "react-icons/md";

type Props = {
  img: string;
  title: string;
  price: string;
};

export default function ItemOrder({ img, title, price }: Props) {
  return (
    <div className="relative w-full px-2 md:w-36 max-h-[300px] py-5 rounded-lg bg-white shadow-lg flex flex-col  items-center mx-2 mb-4">
      <div className="w-24 h-24 rounded-full bg-tertiary flex justify-center items-center">
        <img src={img} className="w-18 h-18" />
      </div>
      <div className="flex h-full flex-col mt-3 items-center justify-between text-center">
        <div className="flex flex-col mt-3 items-center text-center">
          <span className="font-bold text-sm">{title}</span>
          <span className="font-light text-xs text-gray-400 mt-1">{price}</span>
        </div>
        <button className="flex justify-center hover:bg-primary hover:text-white font-bold items-center gap-2 rounded-md mt-4 border border-primary w-full text-primary  py-2">
            <MdAddCircleOutline size={22} />
            <span>Adicionar</span>
        </button>
      </div>
    </div>
  );
}
