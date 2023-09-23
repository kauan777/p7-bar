import React, { useState } from "react";
import InputMask from "react-input-mask";
import ButtonsNavigation from "./ButtonsNavigation";
import { useCart } from "../../hooks/useCart";
import { useCheckout } from "../../hooks/useCheckout";
import { z } from "zod"; // Importe a biblioteca Zod

export default function Step1() {
  const { currentOrder, setCurrentOrder } = useCart();
  const [name, setName] = useState(currentOrder?.name || "");
  const [phone, setPhone] = useState(currentOrder?.phone || "");
  const { onNext } = useCheckout();

  // Defina um esquema Zod para validar o campo "name"
  const nameSchema = z.string().refine(
    (value: string) => {
      const parts = value.split(" ");
      return (
        parts.length >= 2 && parts.every((part: string) => part.length > 0)
      );
    },
    { message: "Digite seu nome e sobrenome" }
  );

  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  function onNextStep() {
    try {
      nameSchema.parse(name);
      const cleanedPhone = phone.replace(/\D/g, "");
      if (cleanedPhone.length !== 11) {
        setPhoneError("O número de telefone deve conter 11 dígitos");
        return;
      }
      setCurrentOrder({
        ...currentOrder!,
        name,
        phone,
      });
      onNext();
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Se houver um erro de validação, exiba a mensagem de erro
        console.log("error", error);
        setNameError(error.issues[0].message);
      }
    }
  }

  return (
    <section>
      <div className="flex flex-col gap-1 mb-4">
        <span className="font-bold">Como devemos te chamar?</span>
        <input
          className={`border-2 capitalize rounded-lg w-full py-3 px-4 outline-none focus:border-black transition-all ${
            nameError ? "border-red-500" : ""
          }`}
          placeholder="Nome e sobrenome"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setNameError("");
          }}
        />
        {nameError && <div className="text-red-500">{nameError}</div>}{" "}
        {/* Exiba a mensagem de erro */}
      </div>
      <div className="flex flex-col gap-1 mb-4">
        <span className="font-bold">Whatsapp</span>
        <InputMask
          mask="(99) 99999-9999"
          className="border-2 rounded-lg w-full py-3 px-4 outline-none focus:border-black transition-all"
          placeholder="Digite seu número..."
          value={phone}
          onChange={(e: any) => {
            setPhone(e.target.value);
            setPhoneError("");
          }}
        />
        {phoneError && <div className="text-red-500">{phoneError}</div>}{" "}
      </div>
      <ButtonsNavigation onNext={onNextStep} />
    </section>
  );
}
