import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Auth0Provider } from "./contexts/Auth0-Context";
import history from "./utils/history";

const onRedirectCallback = (result: RedirectLoginResult) => {
  history.push("/");
  // result.appState && result.appState.targetUrl
  //   ? result.appState.targetUrl
  //   : window.location.pathname
  // );
};

const auth0Domain = process.env.REACT_APP_AUTH0_DOMAIN || "";
const auth0ClientId = process.env.REACT_APP_AUTH0_CLIENT_ID || "";

ReactDOM.render(
  <Auth0Provider
    domain={auth0Domain}
    client_id={auth0ClientId}
    redirect_uri={process.env.REACT_APP_AUTH0_REDIRECT_URI}
    onRedirectCallback={onRedirectCallback}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
