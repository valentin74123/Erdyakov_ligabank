import React from "react";
import ReactDOM from "react-dom";
import "./sass/style.scss";
import {createAPI} from "./services/api";
import {createStore, applyMiddleware} from "redux";
import rootReducer from "./store/root-reducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {loadExchangeRate} from "./store/api-actions";
import {Provider} from "react-redux";
import App from "./components/app/app";

const api = createAPI();

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

Promise.all([
  store.dispatch(loadExchangeRate(store.getState().CONVERTER.date)),
])
  .then(() => {
    ReactDOM.render(
        <Provider store={store}>
          <App />
        </Provider>,
        document.getElementById(`root`)
    );
  });
