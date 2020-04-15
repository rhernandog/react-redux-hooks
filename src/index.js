import React from "react";
import { render } from "react-dom";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import appReducer from "./reducers";

import MyComponent from "./components/myComponent";
import Updater from "./components/Updater";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const appMiddleware = applyMiddleware();
const appStore = createStore(appReducer, composeEnhancers(appMiddleware));

const App = () => {
	return <Provider store={appStore}>
		<div className="container">
			<div className="row">
				<div className="col-12">
					<h1 className="text-center">React & Redux Using Hooks </h1>
					<p className="lead">Simple example of using React, Redux & Hooks.</p>
					<hr />
				</div>
			</div>
			<Updater />
			<div className="row">
				<div className="col-12">
					<hr />
				</div>
			</div>
			<MyComponent />
		</div>
	</Provider>
};

render(
	<App />, document.getElementById("root")
);
