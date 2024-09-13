type Action =
  | { type: "DELETE_TRANSACTION"; payload: number }
  | { type: "ADD_TRANSACTION"; payload: { id: number; text: string; amount: number } };

type State = {
  transactions: { id: number; text: string; amount: number }[];
};

export default (state: State, action: Action): State => {
  switch (action.type) {
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(transaction => transaction.id !== action.payload),
      };
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    default:
      return state;
  }
};
