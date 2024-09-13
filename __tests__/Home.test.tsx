// Home.test.tsx
import { render, screen } from "@testing-library/react";
import Home from "@/app/page";
import { GlobalProvider } from "../context/GlobalState";

// Mock components
jest.mock("../components/Header", () => ({
  Header: () => <div data-testid="header">Header Component</div>,
}));

jest.mock("../components/Balance", () => ({
  Balance: () => <div data-testid="balance">Balance Component</div>,
}));

jest.mock("../components/IncomeExpenses", () => ({
  IncomeExpenses: () => (
    <div data-testid="income-expenses">IncomeExpenses Component</div>
  ),
}));

jest.mock("../components/TransactionList", () => ({
  TransactionList: () => (
    <div data-testid="transaction-list">TransactionList Component</div>
  ),
}));

jest.mock("../components/AddTransaction", () => ({
  AddTransaction: () => (
    <div data-testid="add-transaction">AddTransaction Component</div>
  ),
}));

describe("Home Page", () => {
  it("renders all components correctly", () => {
    // Arrange
    render(
      <GlobalProvider>
        <Home />
      </GlobalProvider>
    );

    // Act
    // (In this case, rendering the component is the action we're testing)

    
    // Asserts
    // Check if each component is rendered
    expect(screen.getByTestId("header")).toBeInTheDocument();
    expect(screen.getByTestId("balance")).toBeInTheDocument();
    expect(screen.getByTestId("income-expenses")).toBeInTheDocument();
    expect(screen.getByTestId("transaction-list")).toBeInTheDocument();
    expect(screen.getByTestId("add-transaction")).toBeInTheDocument();
  });
});
