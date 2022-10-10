import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Import Routes dan Route di sini
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import custom pages
import CounterReducerContainer from "./containers/CounterReducerContainer";

// kita akan membuat store dari reduxnya
// fungsi dari redux namanya adalah "createStore"
// import { legacy_createStore as createStore } from "redux";
// reducernya disini :
// import { rootReducer, initialValue } from "./reducers/rootReducer";

import { Provider } from "react-redux";
import CounterReduxContainer from "./containers/CounterReduxContainer";
// context

// declare storenya disii :
// const store = createStore(rootReducer, initialValue);

// Redux Toolkit
// import store dari app/store
import { store } from "./app/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="use-reducer" element={<CounterReducerContainer />} />
            <Route path="react-redux" element={<CounterReduxContainer />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
