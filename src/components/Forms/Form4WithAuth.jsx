import React, { Component } from "react";
import { withRouter } from "react-router";
import * as firebase from "firebase";
import axios from "axios";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton";
import { Spinner, Fade, NavLink } from "reactstrap";
import CloudDoneIcon from "@material-ui/icons/CloudDone";

class Form4WithAuth extends Component {
  state = {
    isLoading: true
  };

  componentDidMount() {
    setTimeout(() => this.setState({ isLoading: false }), 1000);
  }

  tweetAndRoute = async () => {
    let data = {
      DisplayName: firebase.auth().currentUser.displayName,
      Email: firebase.auth().currentUser.email,
      UID: firebase.auth().currentUser.uid,
      StoreName: this.props.StoreName,
      StoreLocation: this.props.StoreAddress,
      StorePhoneNumber: this.props.StorePhone,
      StoreGoogleRating: this.props.StoreGoogleRating,
      StoreWebsite: this.props.StoreWebsite,
      tweet: this.props.confirmationTranscription,
      upVote: 0,
      downVote: 0
    };
    let time = new Date();
    let tweetdata = {
      status: `${
        this.props.StoreName
      }, your customer just complained about you on griipe.me  We added you to our #worstcustomerservice leaderboard at ${time}`
    };
    try {
      let { data: post } = await axios.post(
        `https://griipe.herokuapp.com/api/routes/makeatweet`,
        tweetdata
      );
    } catch {
      this.props.history.push("/tweet-confirmation");
    }

    axios
      .post(`https://griipe.herokuapp.com/api/routes/makepost`, data)
      .then(res => {
        console.log("It worked 1:", res);
      })
      .catch(err => console.log("It broke 2:", err));
    this.props.history.push("/tweet-confirmation", tweetdata);
  };

  render() {
    const { values, handleChange } = this.props;
    if (this.state.isLoading === true) {
      return (
        <div className="recording-loader loader">
          <h1>Griipe</h1>
          <br />
          <Spinner style={{ width: "3rem", height: "3rem" }} />
        </div>
      );
    }
    return (
      <MuiThemeProvider>
        <Fade in={this.state.fadeIn} tag="h5" className="mt-3 form-container2">
          <h1 className="form-container-header">Confirmation</h1>
          <div className="conf-align">
            <div className="confirmation-container">
              <span className="confirmation-span">
                <CloudDoneIcon color="error" />
                <p className="confirmation-input">
                  <strong>Store:</strong> {this.props.StoreName}
                </p>
              </span>
            </div>
            <div className="confirmation-container">
              <span className="confirmation-span">
                <CloudDoneIcon color="error" />
                <p className="confirmation-input">
                  <strong>Address:</strong> {this.props.StoreAddress}
                </p>
              </span>
            </div>
            <div className="confirmation-container">
              <span className="confirmation-span">
                <CloudDoneIcon color="error" />
                <p className="confirmation-input">
                  <strong>Transcription:</strong>{" "}
                  {this.props.confirmationTranscription}
                </p>
              </span>
            </div>
            <div className="confirmation-container">
              <span className="confirmation-span">
                <CloudDoneIcon color="error" />
                <p className="confirmation-input">
                  <strong>Signed-In:</strong> Yes
                </p>
              </span>
            </div>
          </div>
          <NavLink to="/home" onClick={this.tweetAndRoute}>
            <RaisedButton
              label="Send Tweet"
              primary={true}
              style={styles.button}
              // onClick={this.tweetAndRoute}
            />
          </NavLink>
        </Fade>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15
  }
};

export default withRouter(Form4WithAuth);
