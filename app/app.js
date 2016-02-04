// JS DEPENDENCIES
import React from "react";
import ReactDOM from "react-dom";
import Greeting from "./greeting";

// STYLESHEETS DEPENDENCIES
import "./app.less";

ReactDOM.render(
	<Greeting name="World"/>,
	document.getElementById("app")
);