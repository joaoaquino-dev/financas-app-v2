import { type Transaction } from "../types/types";

type TransactionListProps = {
  transactions: Transaction[];
};
const TransactionList = ({ transactions }: TransactionListProps) => {
  return (
    <div>
      <div>
        <div>
          {transactions.map((transaction) => (
            <div key={transaction.id}>
              {transaction.name}
              {transaction.value}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TransactionList;
