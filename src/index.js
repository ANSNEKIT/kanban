import "core-js/features/map";
import "core-js/features/set";
import React from "react";
import ReactDOM from "react-dom";
// import bridge from "@vkontakte/vk-bridge";

import * as backend from "./actions/index";
import * as router from "./router/index";
import AppContainer from "./components/App/AppContainer";
import { createStore } from "redux";
import { reducer } from "./reducers/reducer";

const route = router.initialize();
backend.initialize();

const store = createStore(reducer);

/* 
// Init VK  Mini App
bridge.send("VKWebAppInit"); */

ReactDOM.render(<AppContainer router={route} />, document.getElementById("root"));

if (process.env.NODE_ENV === "development") {
  import("./eruda").then(({ default: eruda }) => {}); //runtime download
}
