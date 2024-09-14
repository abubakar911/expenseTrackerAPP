'use client';

import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Balance: React.FC = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction: { amount: number }) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div className="text-center mt-4">
      <h4>Your Balance</h4>
      <h1>{total}<small className="h6">PKR</small></h1>
    </div>
  );
};
