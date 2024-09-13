'use client';

import React, { createContext, useReducer, ReactNode } from "react";
import AppReducer from "./AppReducer";

// Initial State
type Transaction = { id: number; text: string; amount: number };
type GlobalStateType = {
  transactions: Transaction[];
  deleteTransaction: (id: number) => void;
  addTransaction: (transaction: Transaction) => void;
};

const initialState: GlobalStateType = {
  transactions: [],
  deleteTransaction: () => {},
  addTransaction: () => {},
};

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
type GlobalProviderProps = {
  children: ReactNode;
};

export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  const deleteTransaction = (id: number) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };

  const addTransaction = (transaction: Transaction) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
