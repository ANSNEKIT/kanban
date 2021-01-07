import "core-js/features/map";
import "core-js/features/set";
import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
// import bridge from "@vkontakte/vk-bridge";

import * as backend from "./actions/index";
import * as router from "./router/index";
import AppContainer from "./components/App/AppContainer";
import { reducer } from "./reducers/reducer";

/* 
// Init VK  Mini App
bridge.send("VKWebAppInit"); */

const route = router.initialize();
backend.initialize();

const store = createStore(reducer, composeWithDevTools());

ReactDOM.render(<AppContainer router={route} store={store} />, document.getElementById("root"));

if (process.env.NODE_ENV === "development") {
  import("./eruda").then(({ default: eruda }) => {}); //runtime download
};
