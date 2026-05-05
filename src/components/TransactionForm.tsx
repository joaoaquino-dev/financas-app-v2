import { useState } from "react";

type TransactionFormProps = {
  onAdd: (name: string, value: number) => void;
};

const TransactionForm = ({ onAdd }: TransactionFormProps) => {
  const [name, setName] = useState("");
  const [value, setValue] = useState(""); // Usei string para facilitar o controle do input

  const handleAdd = () => {
    // Validação básica para não cadastrar vazio
    if (!name.trim() || !value) return;

    onAdd(name, Number(value));

    // Limpa os campos após adicionar
    setName("");
    setValue("");
  };

  return (
    <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 shadow-xl mb-6">
      <h3 className="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-4">
        Nova Transação
      </h3>

      <div className="flex flex-col md:flex-row gap-4 items-end">
        {/* Campo Nome */}
        <div className="flex-1 w-full">
          <label className="block text-slate-500 text-xs mb-1 ml-1">
            Descrição
          </label>
          <input
            type="text"
            placeholder="Ex: Aluguel, Salário..."
            className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-slate-200 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Campo Valor */}
        <div className="w-full md:w-48">
          <label className="block text-slate-500 text-xs mb-1 ml-1">
            Valor (R$)
          </label>
          <input
            type="number"
            placeholder="0,00"
            className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-slate-200 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>

        {/* Botão Cadastrar */}
        <button
          onClick={handleAdd}
          className="w-full md:w-auto px-8 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg transition-colors shadow-lg shadow-indigo-500/20 active:scale-95"
        >
          ADICIONAR
        </button>
      </div>
    </div>
  );
};

export default TransactionForm;
