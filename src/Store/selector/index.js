export const getBasketTotal = (basket) => {
  return basket?.reduce((total, item) => total + item.price, 0);
};
