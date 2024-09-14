import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

type TransactionProps = {
  transaction: {
    id: number;
    text: string;
    amount: number;
  };
};

export const Transaction: React.FC<TransactionProps> = ({ transaction }) => {
  const sign = transaction.amount < 0 ? "-" : "+";
  const { deleteTransaction } = useContext(GlobalContext);

  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}{" "}
      <span>
        {sign}
        {Math.abs(transaction.amount)}{" "}
        <small className="text-muted h6">RS</small>
      </span>
      <button
        onClick={() => deleteTransaction(transaction.id)}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
};
