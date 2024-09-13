import "./globals.css";

import { Header } from "../../components/Header";
import { Balance } from "../../components/Balance";
import { IncomeExpenses } from "../../components/IncomeExpenses";
import { TransactionList } from "../../components/TransactionList";
import { AddTransaction } from "../../components/AddTransaction";
import { GlobalProvider } from "../../context/GlobalState";


export default function Home() {
  return (
    <div className="container">
      <GlobalProvider>
        <Header />
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </GlobalProvider>
    </div>
  );
}
