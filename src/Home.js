import React from "react";
import firebase from "firebase";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import FormContainer from "./components/Forms/FormContainer.jsx";

const Home = () => {
  return (
    <div>
      <button onClick={() => firebase.auth().signOut()}> Sign Out </button>
      <Link exact to="/form" component={FormContainer}>
        {" "}
        Complain{" "}
      </Link>
      <Switch>
        <Route exact path="/" component={Home} />

        <Route exact to="/form" component={FormContainer} />
        <Route
          path="/blog"
          children={({ match }) => (
            <li className={match ? "active" : ""}>
              <Link to="/blog">Blog</Link>
            </li>
          )}
        />
        <Route render={() => <h1>Page not found</h1>} />
      </Switch>
    </div>
  );
};
export default Home;
