import React from "react";
import ReactDOM from "react-dom";

var headerElement = React.createElement("h1", { id: "title" }, "Nick Nish");

ReactDOM.render(headerElement, document.getElementById("app"));
