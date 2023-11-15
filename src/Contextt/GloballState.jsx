import { createContext, React, useContext, useReducer } from "react";
import { InitialState, AppReducer } from "./ReducerApp";
const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, InitialState);
  return (
    <GlobalContext.Provider
      value={{ basket: state.basket, user: state.user, dispatch: dispatch }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(GlobalContext);
};
