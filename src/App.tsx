import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useAuth0 } from "./contexts/Auth0-Context";

const App: React.FC = () => {
  const { loading, isAuthenticated, loginWithRedirect, user } = useAuth0();
  if (!loading) {
    if (isAuthenticated) {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <p>You are logged in as: {user.name}</p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      );
    } else {
      loginWithRedirect({});
      return <></>;
    }
  } else {
    return <> Loading...</>;
  }
};

export default App;
