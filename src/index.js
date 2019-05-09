import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import DeepRFC from './components/Template/Deepgram/DeepRFC'

// ReactDOM.render( <Router> <App /> </Router>, document.getElementById("root"));
ReactDOM.render( <DeepRFC />, document.getElementById("root"));