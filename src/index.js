import "./styles.css";
import React from "react";
import ReactDOM from "react-dom";

const Header = React.createElement("h1", { id: "title" }, "Hello World");

ReactDOM.render(Header, document.getElementById("app"));
