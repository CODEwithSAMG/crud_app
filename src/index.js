import React from 'react';
import App from './App';
import { createRoot } from "react-dom/client";

import './index.css';

// import { Provider } from "react-redux";

const root = createRoot(document.getElementById("root"));
// const store = createStore(Reducer);

root.render(
  // <React.StrictMode>
  // <Provider store={store}>
  <App />
  // </Provider>
  // {/* </React.StrictMode> */}
);