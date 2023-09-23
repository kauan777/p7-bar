import { ButtonHTMLAttributes } from "react";
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  idGraph: string;
  title: string;
  active: boolean;
  icon: string;
}

export default function ItemCategory({ title, active, icon, ...props }: Props) {
  return active ? (
    <button
      {...props}
      className="flex flex-col shadow-xl justify-center items-center md:w-24 md:py-3 bg-secondary rounded-lg mr-5"
    >
      <div className="p-2 md:p-0 md:w-12 md:h-12 bg-white rounded-lg flex justify-center items-center">
        <img src={icon} className="w-6 h-6 object-cover" />
      </div>
      <div className="mt-1">
        <span className="text-black px-4 text-center text-xs font-semibold">
          {title}
        </span>
      </div>
    </button>
  ) : (
    <button
      {...props}
      className="flex flex-col justify-center bg-white border border-gray-100 items-center md:w-24 py-3 rounded-lg mr-5"
    >
      <div className="p-2 md:p-0 md:w-12 md:h-12 bg-white rounded-lg border border-gray-100 flex justify-center items-center">
        <img src={icon} className="w-6 h-6 object-cover" />
      </div>
      <div className="mt-1  justify-center flex">
        <span className="text-gray-400   px-4  text-xs font-semibold">
          {title}
        </span>
      </div>
    </button>
  );
}
