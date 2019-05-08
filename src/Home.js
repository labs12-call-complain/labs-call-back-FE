import React from "react";
import firebase from "firebase";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import FormContainer from "./components/Forms/FormContainer.jsx";

const Home = () => {
  return (
    <div>
      <button onClick={() => firebase.auth().signOut()}> Sign Out </button>
      
      
      
    </div>
  );
};
export default Home;
