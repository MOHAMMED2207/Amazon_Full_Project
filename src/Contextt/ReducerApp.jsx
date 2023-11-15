export const getBasketTotal = (basket) => {
  return basket.reduce((amount, items) => {
    return amount + items.price;
  }, 0);
};

export const InitialState = {
  basket: [],
  user: null,
};

export const AppReducer = (state = InitialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      const index = state.basket?.findIndex((items) => items.id === action.id);
      let NewIteams = [...state.basket];
      index >= 0 ? NewIteams.splice(index, 1) : console.log("error");
      return {
        ...state,
        basket: NewIteams,
      };
    default:
      return state;
  }
};
