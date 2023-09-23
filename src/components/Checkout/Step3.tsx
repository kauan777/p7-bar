import { BsChevronDown, BsFillCreditCard2BackFill } from "react-icons/bs";
import { useState } from "react";
import { MdPix } from "react-icons/md";
import { FaMoneyBillWave } from "react-icons/fa";
import ButtonsNavigation from "./ButtonsNavigation";
import { useCheckout } from "../../hooks/useCheckout";
import { useCart } from "../../hooks/useCart";
import { format } from "date-fns-tz";
import { ptBR } from "date-fns/locale";
import { useNavigate } from "react-router-dom";

function Step3() {
  const [isOpenSelect, setIsOpenSelect] = useState(false);
  const { currentOrder, setCurrentOrder, setCart } = useCart();
  const route = useNavigate();
  const { onPrevious } = useCheckout();
  const [methodPayment, setMethodPayment] = useState("");
  const [methodPaymentError, setMethodPaymentError] = useState("");

  function getCurrentDateTimeInBrazil() {
    const brazilTimeZone = "America/Sao_Paulo";
    const brazilTime = new Date();
    const formattedBrazilTime = format(
      brazilTime,
      "cccc, dd/MM/yyyy HH:mm:ss",
      {
        timeZone: brazilTimeZone,
        locale: ptBR, // Use o locale em português
      }
    );

    // Coloque a primeira letra em maiúscula no nome do dia da semana
    const parts = formattedBrazilTime.split(", ");
    if (parts.length === 2) {
      const dayOfWeek = parts[0];
      const restOfDay = parts[1];
      const capitalizedDayOfWeek =
        dayOfWeek.charAt(0).toUpperCase() + dayOfWeek.slice(1);
      return `${capitalizedDayOfWeek}, ${restOfDay}`;
    }

    return formattedBrazilTime;
  }

  function generateOrder() {
    if (!currentOrder) return "";

    // Formate os dados do pedido em uma string
    const { name, phone, total, items, address } = currentOrder;

    const formattedItems = items.map((item, index) => {
      return `${index + 1}x ${item.title} - ${item.price}\n`;
    });

    const brazilDateTime = getCurrentDateTimeInBrazil();

    const orderMessage = `⭐ GOSTOU DE PEDIR NO NOSSO APP? ⭐
Não precisa baixar nada, faça o seu pedido online:
https://p7bar.com.br
---------------------------------------
Confira o pedido abaixo:
Pedido  #0021 - P7 Bar's
---------------------------------------

${formattedItems.join("")}
Subtotal: R$ ${total.toFixed(2)}
Taxa de entrega: +R$ 6,00}
Total: R$ ${(total + 6).toFixed(2)}

---------------------------------------

Tempo de entrega: de 50 minutos à 60 minutos

${name}
${phone}

${address.street}, ${address.number}
${address.neighborhood}, São Paulo/SP
${address.zipCode}

Pagamento: ${methodPayment}
Nome da conta Pix: Pedro Gabriel Silva Sousa
Chave Pix: 5511946339136


${
  methodPayment === "Pix"
    ? "Copie a chave e faça o pagamento através do Pix. O estabelecimento irá conferir o pagamento para liberação do seu pedido. Envie o comprovante para o estabelecimento."
    : methodPayment == "Cartão"
    ? "Durante a entrega, nosso entregador terá uma maquininha de cartão para você efetuar o pagamento."
    : "Durante a entrega, nosso entregador aceitará pagamento em dinheiro. Esteja pronto com o valor exato ou avise a quantidade em troco."
}


Pedido gerado por P7 Bar's às ${brazilDateTime}`;

    return orderMessage;
  }

  function openWhatsApp() {
    if (!methodPayment) {
      setMethodPaymentError("Escolha um método de pagamento");
      return;
    }
    const phoneNumber = "5511946339136";
    const message = generateOrder();
    console.log(message);
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
    setCart([]);
    setCurrentOrder(null);
    route("/");
    window.open(whatsappUrl, "_blank");
  }

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
          <span>
            {methodPayment === "" ? "Método de pagamento" : methodPayment}
          </span>
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
                setMethodPayment(payment.description);
                setIsOpenSelect(false);
                setMethodPaymentError("");
              }}
              className="w-full flex items-center gap-2 text-gray-500 py-4 px-4 border-b cursor-pointer hover:bg-primary hover:text-white transition-all"
            >
              {payment.icon}
              <span className="font-bold">{payment.description}</span>
            </li>
          ))}
        </ul>
      </div>
      {methodPaymentError && (
        <span className="inline-block text-red-500 mb-4">
          {methodPaymentError}
        </span>
      )}{" "}
      <button
        onClick={openWhatsApp}
        className={` bg-primary border border-primary hover:brightness-90 transition-all  px-4 text-white rounded-md font-semibold mb-4  w-full  py-4`}
      >
        <span>Gerar pedido</span>
      </button>
      <ButtonsNavigation onPrevious={onPrevious} />
    </section>
  );
}

export default Step3;
