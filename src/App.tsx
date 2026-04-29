import { useState } from "react";
import type { Transaction } from "./types/types";
import TransactionForm from "./components/TransactionForm";

function App() {
  const [incomes, setIncomes] = useState<Transaction[]>([]);
  const [expenses, setExpenses] = useState<Transaction[]>([]);

  return (
    <div>
      <TransactionForm onAdd={setIncomes} />
    </div>
  );
}

export default App;
