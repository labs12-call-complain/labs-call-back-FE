import "./Profile.css";
import React, { Component } from "react";
import firebase from 'firebase'



class Profile extends Component {

    state = {
        photoURL: "",
        displayName: "",
        phoneNumber: "",
        email: "",
        showInput: false
    }
 



    user = firebase.auth().currentUser


    updateProf = () => {this.user.updateProfile({
        photoURL: this.state.photoURL,
        displayName: this.state.displayName,
        phoneNumber: this.state.phoneNumber,
        email: this.state.email

      }).then(function() {
        console.log('Profile Successfully Updated')
      }).catch(function(error) {
        console.log(error)
      }) }


    render() {
    return (
        
        <div>

            {console.log(this.user)}

            <p>--- profile ---</p>

            {/* <button onClick={this.setState({ showInput: !this.state.showInput })}> Edit Profile </button> */}

            <img class="profilePic" src={`${this.user.photoURL}`}/>
           <p class="profileText">{`Name: ${this.user.displayName}`}</p>
           <p class="profileText">{`Phone Number: ${this.user.phoneNumber}`}</p>
           <p class="profileText">{`Email: ${this.user.email}`}</p>

           <button onClick={() => this.user.delete().then(function() {
                console.log("user deleted")
            }).catch(function(error) {
                console.log(error)
            })}> delete account </button>

        </div>
    )}
}
export default Profile 