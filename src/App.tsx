import { useState } from "react";
import type { Transaction } from "./types/types";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";

function App() {
  const [incomes, setIncomes] = useState<Transaction[]>([]);
  const [expenses, setExpenses] = useState<Transaction[]>([]);

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

  return (
    <div>
      <TransactionForm onAdd={handleAddIncome} />
      <TransactionForm onAdd={handleAddExpense} />
      <TransactionList transactions={incomes} />
      <TransactionList transactions={expenses} />
    </div>
  );
}

export default App;
