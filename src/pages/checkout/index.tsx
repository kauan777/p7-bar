import { useState } from "react";
import { BsChevronLeft, BsChevronRight, BsPersonFill } from "react-icons/bs";
import { HiHome } from "react-icons/hi";
import { MdPayment } from "react-icons/md";
import { Steps } from "rsuite";
import "rsuite/dist/rsuite.css";
import Step1 from "../../components/Checkout/Step1";
import Step2 from "../../components/Checkout/Step2";
import Step3 from "../../components/Checkout/Step3";

export default function CheckoutScreen() {
  const [step, setStep] = useState(0);
  const onChange = (nextStep: number) => {
    setStep(nextStep < 0 ? 0 : nextStep > 3 ? 3 : nextStep);
  };

  const onNext = () => onChange(step + 1);
  const onPrevious = () => onChange(step - 1);

  return (
    <main className="flex flex-col h-screen px-6 max-w-[600px] mx-auto">
      <header className="flex items-center justify-between py-8">
        <a className="text-primary" href="/">
          <BsChevronLeft size={24} />
        </a>
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
      <div
        className={`flex items-center ${
          step == 0 ? "justify-end" : "justify-between"
        }`}
      >
        {step !== 0 && (
          <button
            onClick={onPrevious}
            className="p-3 flex text-primary items-center justify-center border border-primary rounded-lg focus:scale-[0.98] transition-all"
          >
            <BsChevronLeft size={24} />
          </button>
        )}
        {step !== 2 && (
          <button
            onClick={onNext}
            className="p-3 flex text-white items-center justify-center bg-primary rounded-lg focus:scale-[0.98] transition-all"
          >
            <BsChevronRight size={24} />
          </button>
        )}
      </div>
    </main>
  );
}
