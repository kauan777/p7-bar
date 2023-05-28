import { BsChevronDown, BsFillCreditCard2BackFill } from "react-icons/bs";
import { useState } from "react";
import { MdPix } from "react-icons/md";
import { FaMoneyBillWave } from "react-icons/fa";

function Step3() {
  const [isOpenSelect, setIsOpenSelect] = useState(false);

  const POSSIBLE_MOTIVATIONS = [
    {
      id: 1,
      icon: <MdPix size={24} />,
      description: "Pix",
    },
    {
      id: 2,
      icon: <BsFillCreditCard2BackFill size={20} />,
      description: "Cartão",
    },
    {
      id: 3,
      icon: <FaMoneyBillWave size={20} />,
      description: "Dinheiro",
    },
  ];

  return (
    <section>
      <div className="relative mb-4 flex rounded-md gap-2 border border-primary ">
        <button
          onClick={() => setIsOpenSelect(!isOpenSelect)}
          className={`flex bg-white items-center px-4 text-primary rounded-md font-semibold justify-between w-full  py-4`}
        >
          <span>Método de pagamento</span>
          <BsChevronDown
            size={20}
            className={`${
              isOpenSelect ? "rotate-[180deg]" : ""
            } transition-all`}
          />
        </button>

        <ul
          className={`${
            !isOpenSelect && "hidden"
          } absolute z-20 w-full top-[100%] border-t border-primary mb-16 max-h-[190px] overflow-y-scroll bg-white shadow-md`}
        >
          {POSSIBLE_MOTIVATIONS.map((payment) => (
            <li
              key={payment.id}
              onClick={() => {
                setIsOpenSelect(false);
              }}
              className="w-full flex items-center gap-2 text-gray-500 py-4 px-4 border-b cursor-pointer hover:bg-primary hover:text-white transition-all"
            >
              {payment.icon}
              <span className="font-bold">{payment.description}</span>
            </li>
          ))}
        </ul>
      </div>
      <button
        className={` bg-primary border border-primary hover:brightness-90 transition-all  px-4 text-white rounded-md font-semibold mb-4  w-full  py-4`}
      >
        <span>Gerar pedido</span>
      </button>
    </section>
  );
}

export default Step3;
