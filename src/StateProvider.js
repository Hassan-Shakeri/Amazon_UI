import React, { createContext, useContext, useReducer } from "react";

//prepares the datalayer
export const StateContext = createContext();

//wrap our app and prode the data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//to pull information from datalayer
export const useStateValue = () => useContext(StateContext);
