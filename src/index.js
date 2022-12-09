import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from 'redux';
import usersReducer from "./features/users/usersSlice";
import { Provider } from 'react-redux';


const store = createStore(usersReducer);

ReactDOM.render(
 <Provider store={store}> // add imports and code
  <App />
  </Provider>,
 
  document.getElementById("root")
);
