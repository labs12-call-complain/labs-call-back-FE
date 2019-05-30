import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./home.css";
import axios from "axios";
import * as firebase from "firebase";

import { withAuthorization } from "../Session/session.js";
import Navigation from "../Navigation/navigation.js";

import ComplaintCard from "../Feeds/ComplaintCard.js";
import ComplaintCardNoAuth from "../Feeds/ComplaintCardNoAuth.js";
import Chart from "../Chart/Chart.js";
import { Spinner, Fade } from "reactstrap";

import MaterialIcon, { colorPalette } from "material-icons-react";

import { AuthUserContext } from "../Session/session.js";

const HomePage = () => (
  <AuthUserContext.Consumer>
    {authUser => (authUser ? <HomePageWithAuth /> : <HomePageNoAuth />)}
  </AuthUserContext.Consumer>
);

class HomePageWithAuth extends Component {
  state = {
    complaintFeed: [],
    loading: true
  };

  user = firebase.auth().currentUser;

  ProfilePush = () => {
    this.props.history.push(`/edit-profile`);
  };

  componentDidMount() {
    this.complaints();
    // console.log("is this working?");
  }

  user = firebase.auth().currentUser;

  ProfilePush = () => {
    this.props.history.push(`/edit-profile`);
  };

  StoreNamess = () => {
    return this.state.complaintFeed.map(item => {
      return item.StoreName;
    });
  };

  complaints = () => {
    axios
      .get("https://griipe.herokuapp.com/api/routes/posts")
      .then(response => {
        this.setState({ complaintFeed: response.data, loading: false });
      })
      .catch(error => {
        console.error(error);
      });
  };

  render() {
    return (
      <>
        {/* <Fade tag="h5" className="mt-3"> */}
        <Navigation />
        <div className="Homepage Container">
          <div class="button-container">
            <Link class="centered" to="/complaint-form">
              <button class="complaintButton">Leave A Review</button>
            </Link>
          </div>
          <h1 class="worstReviewed">Lowest Reviewed Companies</h1>
          <div class="HomeWrapper">
            <div>
              {this.state.complaintFeed.map((card, i) => {
                return <ComplaintCard key={i} card={card} />;
              })}
            </div>
            <div class="BarGraph">
              <Chart StoreArray={this.StoreNamess()} />
            </div>
          </div>
        </div>
      </>
    );
  }
}

class HomePageNoAuth extends Component {
  state = {
    complaintFeed: []
  };

  componentDidMount() {
    this.complaints();
    console.log("is this working?");
  }

  user = firebase.auth().currentUser;

  ProfilePush = () => {
    this.props.history.push(`/edit-profile`);
  };

  StoreNamess = () => {
    return this.state.complaintFeed.map(item => {
      return item.StoreName;
    });
  };

  complaints = () => {
    axios
      .get("https://griipe.herokuapp.com/api/routes/posts")
      .then(response => {
        this.setState({ complaintFeed: response.data });
      })
      .catch(error => {
        console.error(error);
      });
  };

  render() {
    console.log(this.StoreNamess());
    console.log("ssdfsdf");
    return (
      <>
        <Navigation />
        <div className="Homepage Container">
          <div class="button-container">
            <Link class="centered" to="/complaint-form">
              <button class="complaintButton">
                Leave A Review
                {/* <MaterialIcon icon="phone" /> */}
              </button>
            </Link>
          </div>
          <h1 class="worstReviewed">Lowest Reviewed Companies</h1>
          <div class="HomeWrapper">
            <div>
              {this.state.complaintFeed.map((card, i) => {
                return <ComplaintCardNoAuth key={i} card={card} />;
              })}
              {console.log(this.state.complaintFeed)}
            </div>
            <div class="BarGraph">
              <Chart StoreArray={this.StoreNamess()} />
            </div>
          </div>
        </div>
      </>
    );
  }
}

// const condition = authUser => !!authUser;

// export default withAuthorization(condition)(HomePage);
export default HomePage;
