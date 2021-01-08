import "core-js/features/map";
import "core-js/features/set";
import React from "react";
import ReactDOM from "react-dom";
// import bridge from "@vkontakte/vk-bridge";

import * as backend from "./api/index";
import * as router from "./router/index";
import AppContainer from "./components/App/AppContainer";
import { getStore } from "./store/index";

/* 
// Init VK  Mini App
bridge.send("VKWebAppInit"); */

const route = router.initialize();
const store = getStore();
backend.initialize();

ReactDOM.render(<AppContainer router={route} store={store} />, document.getElementById("root"));

if (process.env.NODE_ENV === "development") {
  import("./eruda").then(({ default: eruda }) => {}); //runtime download
};
