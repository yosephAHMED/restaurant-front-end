import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app/App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
//import store from "./store";
import * as serviceWorker from "./serviceWorker";
import {createStore} from "redux";
import allReducers from "./reducers"

const store = createStore(
  allReducers, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store ={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
