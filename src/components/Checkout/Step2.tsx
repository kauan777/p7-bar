import { Checkbox } from "rsuite";
import ButtonsNavigation from "./ButtonsNavigation";
import { useEffect, useState } from "react";
import { useCart } from "../../hooks/useCart";
import InputMask from "react-input-mask";
import { useCheckout } from "../../hooks/useCheckout";

function Step2() {
  const { currentOrder, setCurrentOrder } = useCart();
  const [cep, setCep] = useState(currentOrder?.address?.zipCode || "");
  const [cepError, setCepError] = useState("");
  const [isEditAddress, setIsEditAddress] = useState(false);
  const [number, setNumber] = useState(currentOrder?.address?.number || "");
  const [numberError, setNumberError] = useState("");
  const [street, setStreet] = useState(currentOrder?.address?.street || "");
  const [streetError, setStreetError] = useState("");
  const [neighborhood, setNeighborhood] = useState(
    currentOrder?.address?.neighborhood || ""
  );
  const [complement, setComplement] = useState(
    currentOrder?.address?.complement || ""
  );
  const { onNext, onPrevious } = useCheckout();

  function onNextStep() {
    const cleanedCep = cep.replace(/\D/g, "");
    if (cleanedCep.length !== 8) {
      setCepError("O CEP deve conter 8 dígitos");
      return;
    }
    if (!street) {
      setStreetError("Esse campo é obrigatório");
      return;
    }
    if (!number) {
      setNumberError("Esse campo é obrigatório");
      return;
    }
    setCurrentOrder({
      ...currentOrder!,
      address: {
        zipCode: cep,
        isEditAddress,
        number,
        street,
        neighborhood,
        complement,
      },
    });
    onNext();
  }
  async function getAddressByCEP() {
    if (!cep) return "";
    const cepPattern = /^[0-9]{5}-[0-9]{3}$/;

    if (!cepPattern.test(cep)) {
      return;
    }
    const formattedCep = cep.replace("-", "");
    console.log(formattedCep);
    try {
      const response = await fetch(
        `https://viacep.com.br/ws/${formattedCep}/json/`
      );
      const data = await response.json();
      setStreet(data.logradouro);
      setNeighborhood(data.bairro);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    getAddressByCEP();
  }, [cep]);

  return (
    <section>
      <div className="flex flex-col gap-1 mb-4">
        <span className="font-bold">CEP</span>
        <InputMask
          mask="99999-999"
          className="border-2 rounded-lg w-full py-3 px-4 outline-none focus:border-black transition-all"
          placeholder="Ex: 00000-000"
          value={cep}
          onChange={(e) => {
            setCep(e.target.value);
            setCepError("");
          }}
        />
        {cepError && <div className="text-red-500">{cepError}</div>}{" "}
        <div className="flex items-center gap-2 mt-1">
          <Checkbox
            checked={isEditAddress}
            onChange={() => setIsEditAddress(!isEditAddress)}
          />
          <label className="-ml-2 text-sm font-medium text-gray-400">
            Não sei meu CEP
          </label>
        </div>
      </div>
      <div className="flex flex-col gap-1 mb-4">
        <span className="font-bold">Logradouro</span>
        <input
          readOnly={!isEditAddress}
          value={street}
          onChange={(e) => {
            setStreet(e.target.value);
            setStreetError("");
          }}
          className="border-2 capitalize read-only:bg-gray-200 read-only:border-gray-200 cursor-not-allowed rounded-lg w-full py-3 px-4 outline-none transition-all"
          placeholder="Ex: Avenida José Gladiador"
        />
        {streetError && <div className="text-red-500">{streetError}</div>}{" "}
      </div>
      <div className="flex w-full gap-2">
        <div className="flex w-full flex-col gap-1 mb-4">
          <span className="font-bold">Número</span>
          <input
            value={number}
            onChange={(e) => {
              setNumber(e.target.value);
              setNumberError("");
            }}
            className="border-2 rounded-lg w-full py-3 px-4 outline-none focus:border-black transition-all"
            placeholder="Ex: 123"
          />
          {numberError && <div className="text-red-500">{numberError}</div>}{" "}
        </div>
        <div className="flex w-full flex-col gap-1 mb-4">
          <span className="font-bold">Bairro</span>
          <input
            readOnly={!isEditAddress}
            value={
              neighborhood == "Parque esperança" ? "Morro Doce" : neighborhood
            }
            className="border-2 read-only:bg-gray-200 read-only:border-gray-200 cursor-not-allowed rounded-lg w-full py-3 px-4 outline-none transition-all"
          />
        </div>
      </div>
      <div className="flex flex-col gap-1 mb-4">
        <span className="font-bold">Complemento</span>
        <input
          value={complement}
          onChange={(e) => setComplement(e.target.value)}
          className="border-2  rounded-lg w-full py-3 px-4 outline-none transition-all"
          placeholder="Ex: Rosinha, Itaberaba..."
        />
        <span className="text-gray-400 text-xs mb-4 text-end">
          Não obrigatório
        </span>
      </div>
      <ButtonsNavigation onPrevious={onPrevious} onNext={onNextStep} />
    </section>
  );
}

export default Step2;
