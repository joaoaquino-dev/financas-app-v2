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

  const totalIncomes = incomes.reduce((acc, curr) => {
    return acc + curr.value;
  }, 0);
  const totalExpenses = expenses.reduce((acc, curr) => {
    return acc + curr.value;
  }, 0);
  const balance = totalIncomes - totalExpenses;

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

  const removeIncome = (id: string) => {
    const updatedList = incomes.filter((item) => item.id !== id);

    setIncomes(updatedList);
  };
  const removeExpense = (id: string) => {
    const updatedList = expenses.filter((item) => item.id !== id);

    setExpenses(updatedList);
  };

  useEffect(() => {
    localStorage.setItem("incomes", JSON.stringify(incomes));
  }, [incomes]);
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  return (
    <div>
      <TransactionForm onAdd={handleAddIncome} />
      <TransactionForm onAdd={handleAddExpense} />
      <TransactionList transactions={incomes} onRemove={removeIncome} />
      <TransactionList transactions={expenses} onRemove={removeExpense} />
      <Summary
        incomes={totalIncomes}
        expenses={totalExpenses}
        balance={balance}
      />
    </div>
  );
}

export default App;
