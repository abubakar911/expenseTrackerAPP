'use client';

import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { useForm } from "react-hook-form";

type FormData = {
  text: string;
  amount: number;
};

export const AddTransaction: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (data: FormData) => {
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text: data.text,
      amount: +data.amount,
    };
    addTransaction(newTransaction);
  };

  return (
    <div className="container">
      <h3>Add new transaction</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="text">Role</label>
          <input
            type="text"
            {...register("text", { required: "This is a required field" })}
            placeholder="Enter role..."
          />
          {errors.text && <p className="text-danger">{errors.text.message}</p>}
        </div>
        <div>
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive + income)
          </label>
          <input
            type="number"
            {...register("amount", { required: "This is a required field" })}
            placeholder="Enter amount..."
          />
          {errors.amount && <p className="text-danger">{errors.amount.message}</p>}
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  );
};
