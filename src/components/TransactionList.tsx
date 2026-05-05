import { type Transaction } from "../types/types";

type TransactionListProps = {
  transactions: Transaction[];
  onRemove: (id: string) => void;
};

const TransactionList = ({ transactions, onRemove }: TransactionListProps) => {
  return (
    <div className="bg-slate-900 rounded-xl overflow-hidden shadow-xl border border-slate-800">
      <div className="p-6">
        <h3 className="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-4">
          Histórico de Movimentações
        </h3>

        <div className="space-y-1">
          {transactions.length === 0 ? (
            <p className="text-slate-500 text-center py-8 italic">
              Nenhuma transação registrada.
            </p>
          ) : (
            transactions.map((transaction) => (
              <div
                key={transaction.id}
                className="flex justify-between items-center py-4 px-2 border-b border-slate-800 last:border-0 group transition-colors hover:bg-slate-800/50"
              >
                {/* Lado Esquerdo: Nome e ID */}
                <div className="flex flex-col">
                  <span className="text-slate-200 font-medium text-lg">
                    {transaction.name}
                  </span>
                  <span className="text-xs text-slate-500 font-mono">
                    #{transaction.id.slice(0, 8).toUpperCase()}
                  </span>
                </div>

                {/* Lado Direito: Valor e Ações */}
                <div className="flex items-center gap-6">
                  <span
                    className={`font-bold text-lg ${
                      transaction.value >= 0
                        ? "text-emerald-400"
                        : "text-rose-400"
                    }`}
                  >
                    {new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(transaction.value)}
                  </span>

                  <button
                    onClick={() => onRemove(transaction.id)}
                    className="opacity-0 group-hover:opacity-100 transition-all duration-200 bg-rose-500/10 text-rose-500 text-xs font-bold px-3 py-1.5 rounded-md hover:bg-rose-500 hover:text-white"
                  >
                    APAGAR
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default TransactionList;
