export const initialState = {
  basket: [],
  user: null,
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_TO_BASKET":
      return { ...state, basket: [...state.basket, payload] };
    case "EMPTY_BASKET":
      return { ...state, basket: [] };
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex((item) => item.id === payload);
      const newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `cant remove the product id:${payload} as it is not in the basket`
        );
      }
      return {
        ...state,
        basket: newBasket,
      };
    case "SET_USER":
      return { ...state, user: payload };
    default:
      return state;
  }
};

export default reducer;
