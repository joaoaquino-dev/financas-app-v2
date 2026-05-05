import { useEffect, useState } from "react";
import type { Transaction } from "./types/types";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import Summary from "./components/Summary";

function App() {
  const [incomes, setIncomes] = useState<Transaction[]>(() => {
    const saved = localStorage.getItem("incomes");
    return saved ? JSON.parse(saved) : [];
  });

  const [expenses, setExpenses] = useState<Transaction[]>(() => {
    const saved = localStorage.getItem("expenses");
    return saved ? JSON.parse(saved) : [];
  });

  // Cálculos de Totais
  const totalIncomes = incomes.reduce((acc, curr) => acc + curr.value, 0);
  const totalExpenses = expenses.reduce((acc, curr) => acc + curr.value, 0);
  const balance = totalIncomes - totalExpenses;

  // Funções de Adição
  const handleAddIncome = (name: string, value: number) => {
    const newTransaction: Transaction = {
      id: crypto.randomUUID(),
      name,
      value,
    };
    setIncomes([...incomes, newTransaction]);
  };

  const handleAddExpense = (name: string, value: number) => {
    const newTransaction: Transaction = {
      id: crypto.randomUUID(),
      name,
      value,
    };
    setExpenses([...expenses, newTransaction]);
  };

  // Funções de Remoção
  const removeIncome = (id: string) => {
    const updatedList = incomes.filter((item) => item.id !== id);
    setIncomes(updatedList);
  };

  const removeExpense = (id: string) => {
    const updatedList = expenses.filter((item) => item.id !== id);
    setExpenses(updatedList);
  };

  // Persistência
  useEffect(() => {
    localStorage.setItem("incomes", JSON.stringify(incomes));
  }, [incomes]);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            Minhas Finanças
          </h1>
          <p className="text-slate-400">Controle de entradas e saídas</p>
        </header>

        {/* Componente de Resumo (Cards) */}
        <Summary
          incomes={totalIncomes}
          expenses={totalExpenses}
          balance={balance}
        />

        {/* Área de Formulários */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div>
            <h2 className="text-emerald-400 font-semibold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
              Nova Entrada
            </h2>
            <TransactionForm onAdd={handleAddIncome} />
          </div>
          <div>
            <h2 className="text-rose-400 font-semibold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-rose-400 rounded-full"></span>
              Nova Despesa
            </h2>
            <TransactionForm onAdd={handleAddExpense} />
          </div>
        </div>

        {/* Listas de Transações */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <section>
            <h2 className="text-slate-400 text-sm font-bold uppercase mb-4">
              Lista de Entradas
            </h2>
            <TransactionList transactions={incomes} onRemove={removeIncome} />
          </section>
          <section>
            <h2 className="text-slate-400 text-sm font-bold uppercase mb-4">
              Lista de Despesas
            </h2>
            <TransactionList transactions={expenses} onRemove={removeExpense} />
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
