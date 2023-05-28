import { Checkbox } from "rsuite";

function Step2() {
  return (
    <section>
      <div className="flex flex-col gap-1 mb-4">
        <span className="font-bold">CEP</span>
        <input
          className="border-2 rounded-lg w-full py-3 px-4 outline-none focus:border-black transition-all"
          placeholder="Ex: 00000-000"
          value={"05266-110"}
        />
        <div className="flex items-center gap-2 mt-1">
          <Checkbox/>
          <label className="ml-1 text-sm font-medium text-gray-400">
            Não sei meu CEP
          </label>
        </div>
      </div>
      <div className="flex flex-col gap-1 mb-4">
        <span className="font-bold">Logradouro</span>
        <input
          readOnly
          className="border-2 bg-gray-200 border-gray-200 cursor-not-allowed rounded-lg w-full py-3 px-4 outline-none transition-all"
          placeholder="Ex: Rua Roberto Donat"
        />
      </div>
      <div className="flex w-full gap-2">
        <div className="flex w-full flex-col gap-1 mb-4">
          <span className="font-bold">Número</span>
          <input
            value={"3"}
            className="border-2 rounded-lg w-full py-3 px-4 outline-none focus:border-black transition-all"
            placeholder="Ex: 123"
          />
        </div>
        <div className="flex w-full flex-col gap-1 mb-4">
          <span className="font-bold">Bairro</span>
          <input
            readOnly
            value={"Parque esperança"}
            className="border-2 bg-gray-200 border-gray-200 cursor-not-allowed rounded-lg w-full py-3 px-4 outline-none transition-all"
          />
        </div>
      </div>
    </section>
  );
}

export default Step2;
