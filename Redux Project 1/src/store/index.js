import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter";
import authReducer from "./auth";

// const initialCounterState = { counter: 0, showCounter: true };

// const counterSlice = createSlice({
//   name: "counter",
//   initialState: initialCounterState,
//   reducers: {
//     increment(state) {
//       state.counter++;
//     },
//     decrement(state) {
//       state.counter--;
//     },
//     increase(state, action) {
//       // state.counter += action.amount; // Change while using redux toolkit use 'payload'
//       state.counter += action.payload;
//     },
//     toggleCounter(state) {
//       state.showCounter = !state.showCounter;
//     },
//   },
// });

// const initialAuthState = {
//   isAuthenticated: false,
// };

// const authSlice = createSlice({
//   name: "authentication",
//   initialState: initialAuthState,
//   reducers: {
//     login(state) {
//       state.isAuthenticated = true;
//     },
//     logout(state) {
//       state.isAuthenticated = false;
//     },
//   },
// });

/* // Without redux toolkit
const counterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter,
    };
  }
  if (action.type === "increase") {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  }
  if (action.type === "toggle") {
    return {
      showCounter: !state.showCounter,
      counter: state.counter,
    };
  }

  return state;
};

const store = createStore(counterReducer);
*/

// const store = configureStore({ reducer: counterSlice.reducer }); Can be used for one slice
// for multiple slice
const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});
// While using slice we can directly mutate state bcz behind the scene state still changes immutably
// Using the imgur library
// ConfigureStore for more than one slices and createStore for one Slice
// ConfigureStore we pass an object in createStore only on sliceName.reducer
// In configureStore if we have only one reducer we can omit the object
// const store = configureStore({ reducer: { counter: counterSlice.reducer } }); like this
// counterSlice.actions have different methods like increment, decrement and so on
// These methods are called action creators

// export const counterActions = counterSlice.actions;
// export const authActions = authSlice.actions;

export default store;
