import { type Transaction } from "../types/types";

type TransactionListProps = {
  transactions: Transaction[];
  onRemove: (id: string) => void;
};
const TransactionList = ({ transactions, onRemove }: TransactionListProps) => {
  return (
    <div>
      <div>
        <div>
          {transactions.map((transaction) => (
            <div key={transaction.id}>
              {transaction.name} {transaction.value}
              <button onClick={() => onRemove(transaction.id)}>Apagar</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TransactionList;
