// JS DEPENDENCIES
import React from "react"
import ReactDOM from "react-dom"
import Greeting from "./components/greeting/greeting.js"

// STYLESHEETS DEPENDENCIES
import 'bootstrap-less/bootstrap/bootstrap.less';
import "./app.less"

ReactDOM.render(
	<Greeting options={{value: "world"}}/>,
	document.getElementById("app")
);