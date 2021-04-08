export const initialState = {
  basket: [],
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_TO_BASKET":
      return { ...state, basket: [...state.basket, payload] };

    default:
      return state;
  }
};

export default reducer;