'use client';

import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const IncomeExpenses: React.FC = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction: { amount: number }) => transaction.amount);

  const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);
  const expense = (amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1).toFixed(2);

  return (
    <div className="inc-exp-container container">
      <div>
        <h4>Income</h4>
        <h6 className="money plus">+{income}<small className="h6">RS</small></h6>
      </div>
      <div>
        <h4>Expense</h4>
        <h6 className="money minus">-{expense}<small className="h6">RS</small></h6>
      </div>
    </div>
  );
};
