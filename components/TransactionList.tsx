'use client';

import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Transaction } from "./Transaction";

export const TransactionList: React.FC = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <div className="container">
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction: { id: number; text: string; amount: number }) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
};
