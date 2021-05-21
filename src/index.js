import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "overmind-react";
import { createOvermind } from "overmind";
import { config } from "./overmind";
import { BrowserRouter, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import normalize from "normalize.css";
import Home from "./pages/Home";

const state = createOvermind(config);

const GlobalStyle = createGlobalStyle`
  ${normalize}
  body {
    font-family: "Inter", sans-serif;
    background: #2D3047;
    color: #FEFCFB;
  }
  a {
    color: #fefcfb;
    font-weight: bold; 
    text-decoration: none;
    :hover {
      text-decoration: underline;
    }
  }
`;

ReactDOM.render(
	<Provider value={state}>
		<GlobalStyle />
		<BrowserRouter>
			<Route>
				<Home path="/" />
			</Route>
		</BrowserRouter>
	</Provider>,
	document.getElementById("root")
);
