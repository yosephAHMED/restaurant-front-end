import { ADD_TO_CART, REMOVE_FROM_CART, SUB_QUANTITY, ADD_QUANTITY } from "./action-types/cart-actions";

//add cart action
export const addToCart = (foodid) => {
  return {
    type: ADD_TO_CART,
    foodid,
  };
};

//remove item action

export const removeItem = (foodid) => {
  return {
    type: REMOVE_FROM_CART,
    foodid,
  };
};

// subtract quantity action
export const subtractQuantity = (foodid) => {
    return {
        type: SUB_QUANTITY,
        foodid,
    };
};

// add quantity action
export const addQuantity = (foodid) => {
    return {
        type: ADD_QUANTITY,
        foodid,
    };
};
