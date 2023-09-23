import { useCheckout } from "../../hooks/useCheckout";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

interface ButtonsNavigation {
  onNext?: () => void;
  onPrevious?: () => void;
}

export default function ButtonsNavigation({
  onNext,
  onPrevious,
}: ButtonsNavigation) {
  const { step } = useCheckout();

  return (
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
  );
}
