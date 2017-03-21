import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import thunk from "redux-thunk";

import rootReducer from "./reducers/root";

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept(() => {
      // eslint-disable-next-line global-require
      const nextRootReducer = require("./reducers/root").default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
