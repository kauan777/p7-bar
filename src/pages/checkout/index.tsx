import { useState } from "react";
import { BsChevronLeft, BsPersonFill } from "react-icons/bs";
import { HiHome } from "react-icons/hi";
import { MdPayment } from "react-icons/md";
import { Steps } from "rsuite";
import "rsuite/dist/rsuite.css";
import Step1 from "../../components/Checkout/Step1";
import Step2 from "../../components/Checkout/Step2";
import Step3 from "../../components/Checkout/Step3";
import { useCheckout } from "../../hooks/useCheckout";
import { Link } from "react-router-dom";

export default function CheckoutScreen() {
  const { step, setStep } = useCheckout();
  const onChange = (nextStep: number) => {
    setStep(nextStep < 0 ? 0 : nextStep > 3 ? 3 : nextStep);
  };

  const onNext = () => onChange(step + 1);

  return (
    <main className="flex flex-col h-screen px-6 max-w-[600px] mx-auto">
      <header className="flex items-center justify-between py-8">
        <Link className="text-primary" to="/">
          <BsChevronLeft size={24} />
        </Link>
        {step == 1 && (
          <button className="border text-primary font-bold border-primary py-3 px-4 rounded-full">
            Endereços salvos
          </button>
        )}
      </header>
      <section className="">
        <Steps current={step}>
          <Steps.Item icon={<BsPersonFill color="#000" size={24} />} />
          <Steps.Item icon={<HiHome color="#000" size={24} />} />
          <Steps.Item icon={<MdPayment color="#000" size={24} />} />
        </Steps>
        <hr />
      </section>

      <section className="flex flex-col gap-3">
        {step == 0 && <Step1 />}
        {step == 1 && <Step2 />}
        {step == 2 && <Step3 />}
      </section>
    </main>
  );
}
