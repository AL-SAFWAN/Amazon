import React, { createContext, useContext, useReducer } from "react";

//Prepare the dataLayer
export const StateContext = createContext();

//Wrap the app to provide the data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// pull data from the data layer
export const useStateValue = () => useContext(StateContext);
