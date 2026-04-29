import { useState } from "react";

type TransactionFormProps = {
  onAdd: (name: string, value: number) => void;
};

const TransactionForm = ({ onAdd }: TransactionFormProps) => {
  const [name, setName] = useState("");
  const [value, setValue] = useState(0);

  return (
    <div>
      <div>
        Nome
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        Valor
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
        />
      </div>
      <div>
        <button
          onClick={() => onAdd(name, value)}
          className="cursor-pointer bg-gray-700 text-white rounded-md"
        >
          Cadastrar
        </button>
      </div>
    </div>
  );
};

export default TransactionForm;
