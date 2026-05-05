type SummaryProps = {
  incomes: number;
  expenses: number;
  balance: number;
};

const Summary = ({ incomes, expenses, balance }: SummaryProps) => {
  const balanceColor = balance >= 0 ? "text-green-500" : "text-red-500";

  return (
    <div>
      <div>
        <h1>Entradas</h1>
        <span>{incomes}</span>
      </div>
      <div>
        <h1>Saídas</h1>
        <span>{expenses}</span>
      </div>
      <div>
        <h1>Saldo total</h1>
        <span className={`${balanceColor}`}>{balance}</span>
      </div>
    </div>
  );
};

export default Summary;
