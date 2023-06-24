export default function Step1() {

  // Comments testw

  return (
    <section>
      <div className="flex flex-col gap-1 mb-4">
        <span className="font-bold">Como devemos te chamar?</span>
        <input
          className="border-2 rounded-lg w-full py-3 px-4 outline-none focus:border-black transition-all"
          placeholder="Nome e sobrenome"
        />
      </div>
      <div className="flex flex-col gap-1 mb-4">
        <span className="font-bold">Whatsapp</span>
        <input
          className="border-2 rounded-lg w-full py-3 px-4 outline-none focus:border-black transition-all"
          placeholder="Digite seu número..."
        />
      </div>
    </section>
  );
}
