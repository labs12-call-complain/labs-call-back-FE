import "./EditProfile.css";
import React, { Component } from "react";
import firebase from "firebase";
import Navigation from "../Navigation/navigation";

import { withAuthorization } from "../Session/session.js";

class EditProfile extends Component {
  user = firebase.auth().currentUser;

  state = {
    displayName: this.user.displayName,
    photoURL: this.user.photoURL,
    email: this.user.email,
    showInput: false
  };

  updateEmailz = e => {
    this.user
      .updateEmail("jawad24700@gmail.com")
      .then(function() {
        console.log("email updated");
      })
      .catch(function(error) {
        console.log("Email update fail");
      });
  };

  updateProf = e => {
    // e.preventDefault()

    this.user
      .updateProfile({
        displayName: this.state.displayName,
        photoURL: this.state.photoURL,

      }).then(function() {
        console.log('Profile Successfully Updated')
      }).catch(function(error) {
        console.log(error)
      }) 
    
    
    }







    inputToggle = (e) => {
        e.preventDefault()
        this.setState({ showInput: !this.state.showInput })
    }



    changeHandler = e => {
        this.setState({
          [e.target.name] : e.target.value,
        })
      }


    render() {
      console.log(this.user)
    return (
      <>
        <Navigation />

        <div class="containerCenter">
          <div class="profileContainer">
            <h3 >Edit Profile</h3>

            <p>{this.state.showInput}</p>

            <div class="profile-div">
              <img class="profilePic" src={`${this.user.photoURL}`} />

              <div class="textContainer">
                <p class="profileText">{`Name: ${this.user.displayName}`}</p>
                <p class="profileText">{`Email: ${this.user.email}`}</p>
                <p class="profileText">{`Phone Number: ${
                  this.user.phoneNumber ? this.user.phoneNumber : "n/a"
                }`}</p>

                <button onClick={this.inputToggle}> Edit Profile </button>
              </div>
            </div>

            {this.state.showInput ? (
              <div class="hidden">
                <form onSubmit={this.updateProf}>
                  <p class="text-centers">Display Name:</p>{" "}
                  <input
                    placeholder="Display Name..."
                    value={this.state.displayName}
                    onChange={this.changeHandler}
                    name="displayName"
                  />
                  <p class="text-centers">URL:</p>
                  <input
                    placeholder={"Photo URL..."}
                    value={this.state.photoURL}
                    onChange={this.changeHandler}
                    name="photoURL"
                  />
                  <button class="text-centers"> Update Profile </button>
                </form>
              </div>
            ) : null}

            <div class="deleteContainer">
              <h3 class="red">Danger Zone</h3>
              <p>WARNING</p>
              <p>Once you delete your account you can not go back</p>
              <button
                onClick={() =>
                  this.user
                    .delete()
                    .then(function() {
                      console.log("user deleted");
                    })
                    .catch(function(error) {
                      console.log(error);
                    })
                }
              >
                {" "}
                Delete Account{" "}
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(EditProfile);
