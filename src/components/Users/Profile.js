import "./Profile.css";
import React, { Component } from "react";
import firebase from 'firebase'
import Navigation from "../Navigation/navigation";
import {Link} from 'react-router-dom';
import axios from 'axios'
import { withAuthorization } from '../Session/session.js';
import ComplaintCard from '../Feeds/ComplaintCard.js';
import { Spinner, Fade } from 'reactstrap';


class Profile extends Component {

    user = firebase.auth().currentUser

    state = {
      complaintById: [],
      loading: true

    }

    componentDidMount() {
    
      this.complaints();
  
    }

  ProfilePush = () => {
    this.props.history.push(`/edit-profile`)
  }

    
  complaints = () => {
    axios
    .get(`https://call-complain.herokuapp.com/api/routes/posts/${this.user.uid}`)
    .then(response => {
      this.setState(() => ({ complaintById: response.data, loading: false }));
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

      {this.state.loading ? <div className="recording-loader loader">
                <h1>Griipe</h1>
                <br />
                <Spinner style={{ width: '3rem', height: '3rem' }} />
                </div> : 
      <div>
      <h2>Your Complaint History</h2>

      <div class="ProfileWrap">
        
      <div class="profileCard">
        <div class="imgdiv">
        <img class="CardImg" src={`${this.user.photoURL}`}/>
      </div>

        <p>{this.user.displayName}</p>
          <p>Total Upvotes:</p>
          <button class="EditBtn" onClick={this.ProfilePush}>Edit Profile</button>
        </div>

      {this.state.complaintById[0] ? null : <h4 class="noReview">You have no reviews yet..</h4>}

      <div class="ProfileCardList">
      {this.state.complaintById.map((card, i) => {
      //   return <ComplaintCard card={card} key={this.state.id}/> 
       return <ComplaintCard card={card}/> 
        })}

        </div>
        </div>

      </div> }

      </div>

    )}
}


const condition = authUser => !!authUser;

export default withAuthorization(condition)(Profile);