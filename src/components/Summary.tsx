import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from "phosphor-react"; // Opcional: ícones dão um toque extra

type SummaryProps = {
  incomes: number;
  expenses: number;
  balance: number;
};

const Summary = ({ incomes, expenses, balance }: SummaryProps) => {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {/* Card Entradas */}
      <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 shadow-lg">
        <header className="flex items-center justify-between mb-4">
          <span className="text-slate-400 font-medium">Entradas</span>
          <div className="bg-emerald-500/10 p-2 rounded-lg">
            <ArrowCircleUp size={24} className="text-emerald-400" />
          </div>
        </header>
        <strong className="text-2xl md:text-3xl text-slate-100 block">
          {formatCurrency(incomes)}
        </strong>
      </div>

      {/* Card Saídas */}
      <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 shadow-lg">
        <header className="flex items-center justify-between mb-4">
          <span className="text-slate-400 font-medium">Saídas</span>
          <div className="bg-rose-500/10 p-2 rounded-lg">
            <ArrowCircleDown size={24} className="text-rose-400" />
          </div>
        </header>
        <strong className="text-2xl md:text-3xl text-slate-100 block">
          {formatCurrency(expenses)}
        </strong>
      </div>

      {/* Card Total */}
      <div
        className={`p-6 rounded-xl shadow-xl transition-colors ${
          balance >= 0 ? "bg-indigo-600" : "bg-rose-600"
        }`}
      >
        <header className="flex items-center justify-between mb-4">
          <span className="text-indigo-100 font-medium">Saldo Total</span>
          <div className="bg-white/20 p-2 rounded-lg">
            <CurrencyDollar size={24} className="text-white" />
          </div>
        </header>
        <strong className="text-2xl md:text-3xl text-white block">
          {formatCurrency(balance)}
        </strong>
      </div>
    </div>
  );
};

export default Summary;
