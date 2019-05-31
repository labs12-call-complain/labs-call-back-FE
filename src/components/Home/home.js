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


  ProfilePush = () => {
    this.props.history.push(`/edit-profile`);
  };

  componentDidMount() {
    this.complaints();
    setTimeout(() => this.setState({isLoading: false}), 1000);
  }

  componentDidUnmount(){
    this.complaints();
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
    if(this.state.isLoading===true) {
      return (
      <div className="recording-loader loader">
        <h1>Griipe</h1>
        <br />
        <Spinner style={{ width: '3rem', height: '3rem' }} />
      </div>)
    };
    return (
      <>
      
        <Navigation />

        {this.state.loading ? 
        <div className="recording-loader loader">
                <h1>Griipe</h1>
                <br />
                <Spinner style={{ width: '3rem', height: '3rem' }} />
        </div> :

        <div className="Homepage Container">
          <div class="button-container">
            <Link class="centered" to="/complaint-form">
              <button class="complaintButton">Leave A Review</button>
            </Link>
          </div>
          <h1 class="worstReviewed">Lowest Reviewed Businesses</h1>
          <div class="HomeWrapper">
            <div>
              {this.state.complaintFeed.map((card, i) => {
                return <ComplaintCard complaintsCall={this.complaints}  key={i} card={card} />;
              })}
            </div>
            <div class="BarGraph">
              <Chart StoreArray={this.StoreNamess()} />
            </div>
          </div>
            </div> }


      </>
    );
  }
}

class HomePageNoAuth extends Component {
  state = {
    complaintFeed: [],
    loading: true
  };

  componentDidMount() {
    this.complaints();
    setTimeout(() => this.setState({isLoading: false}), 1000);
  }

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
    if(this.state.isLoading===true) {
      return (
      <div className="recording-loader loader">
        <h1>Griipe</h1>
        <br />
        <Spinner style={{ width: '3rem', height: '3rem' }} />
      </div>)
    };
      return (
          <>
          <Navigation />

          {this.state.loading ? <div className="recording-loader loader">
                <h1>Griipe</h1>
                <br />
                <Spinner style={{ width: '3rem', height: '3rem' }} />
                </div> :

              <div className='Homepage Container'>
                <div class="button-container">
              <Link class="centered" to='/complaint-form'>
                  <button class="complaintButton">
                      
                      Leave A Review 

                  </button>
              </Link>
                </div>            
                  <h1 class="worstReviewed">
                      Lowest Reviewed Businesses
                  </h1>
                  <div class="HomeWrapper">
                  <div>                    
                      {this.state.complaintFeed.map((card, i) => {
                          return <ComplaintCardNoAuth key={i} card={card}/> 
                      })}
                  </div>
                  <div class="BarGraph" >
                    <Chart StoreArray={this.StoreNamess()}/>
                  </div>
                  </div>
                    </div> }
          </>
      )
  }
}

// const condition = authUser => !!authUser;

// export default withAuthorization(condition)(HomePage);
export default HomePage;
