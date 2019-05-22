import "./Profile.css";
import React, { Component } from "react";
import firebase from 'firebase'
import Navigation from "../Navigation/navigation";
import {Link} from 'react-router-dom';
import axios from 'axios'
import { withAuthorization } from '../Session/session.js';
import ComplaintCard from '../Feeds/ComplaintCard.js';


class Profile extends Component {

    user = firebase.auth().currentUser

    state = {
      complaintById: []
    }

    componentDidMount() {
    
      this.complaints();
  
    }
    
  complaints = () => {
    axios
    .get(`https://call-complain.herokuapp.com/api/routes/posts/${this.user.uid}`)
    .then(response => {
      this.setState(() => ({ complaintById: response.data }));
    })
    .catch(error => {
      console.error(error);
    });
  }



    render() {
      console.log(this.user.uid)
    return (
        
      <div>
      <Navigation />
      <h2>Your Complaint History</h2>
      {this.state.complaintById.map((card, i) => {
      //   return <ComplaintCard card={card} key={this.state.id}/> 
       return <ComplaintCard card={card}/> 
        })}
      </div>

    )}
}


const condition = authUser => !!authUser;

export default withAuthorization(condition)(Profile);