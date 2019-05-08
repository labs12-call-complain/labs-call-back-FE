

import "./Profile.css";
import React, { Component } from "react";
import firebase from 'firebase'




class Profile extends Component {

    user = firebase.auth().currentUser

    state = {
        displayName: this.user.displayName,
        photoURL: this.user.photoURL,
        email: this.user.email,
        showInput: false
    }


    

    updateEmailz = (e) => {
        this.user.updateEmail("jawad24700@gmail.com").then(function() {
            console.log("email updated")
          }).catch(function(error) {
            console.log("Email update fail")
          });
    }




    updateProf = (e) => {

        // e.preventDefault()

        this.user.updateProfile({
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
    return (
        
        <div class="profileContainer">

            <p>{this.state.showInput}</p>

           <img class="profilePic" src={`${this.user.photoURL}`}/>
           <p class="profileText">{`Name: ${this.user.displayName}`}</p>
           <p class="profileText">{`Phone Number: ${this.user.phoneNumber}`}</p>
           <p class="profileText">{`Email: ${this.user.email}`}</p>

           <button onClick={() => this.user.delete().then(function() {
                console.log("user deleted")
            }).catch(function(error) {
                console.log(error)
            })}> delete account </button>

            <button onClick={this.inputToggle}> Edit Profile </button>

            {this.state.showInput ? 
            <form onSubmit={this.updateProf}>
            <input 
            placeholder='Display Name...'
            value={this.state.displayName}
            onChange={this.changeHandler}
            name="displayName"
            />
            <input 
            placeholder={"Photo URL..."}
            value={this.state.photoURL}
            onChange={this.changeHandler}
            name="photoURL"
            />
            {/* <input 
            placeholder={"Email..."}
            value={this.state.email}
            onChange={this.changeHandler}
            name="email"
            /> */}
            <button> UPDATE </button>
            </form> 
            : null}
            
        </div>
    )}
}
export default Profile 