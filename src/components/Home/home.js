import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './home.css'
import axios from 'axios'
import firebase from 'firebase'

import { withAuthorization } from '../Session/session.js';

import ComplaintCard from '../Feeds/ComplaintCard.js';

import MaterialIcon, {colorPalette} from 'material-icons-react';


class HomePage extends Component {
  state = {
      complaintFeed: []

  }

  user = firebase.auth().currentUser

  ProfilePush = () => {
      this.props.history.push(`/edit-profile`)
    }

  componentDidMount() {
    
    this.complaints();

  }



  complaints = () => {
      axios
      .get("https://call-complain.herokuapp.com/api/routes/posts")
      .then(response => {
        this.setState(() => ({ complaintFeed: response.data }));
      })
      .catch(error => {
        console.error(error);
      });
  }



  render() {
      return (
          <>
              <div className='Homepage Container'>
                <div class="button-container">
              <Link class="centered" to='/complaint-form'>
                  <button class="complaintButton">
                      
                      Call and Complain 
                      <MaterialIcon icon="phone" />
                  </button>
              </Link>
                </div>
                 
                  <h1 class="worstReviewed">
                      Lowest Reviewed Companies
                  </h1>


                <div class="HomeWrapper">
                  <div class="profileCard">
                    <div class="imgdiv">
                    <img class="CardImg" src={`${this.user.photoURL}`}/>
                    </div>
                    
                    <p>{this.user.displayName}</p>
                    <p>{this.user.email}</p>
                    <button class="EditBtn" onClick={this.ProfilePush}>Edit Profile</button>
                  </div>

                  <div>
                      
                      {this.state.complaintFeed.map((card, i) => {
                        //   return <ComplaintCard card={card} key={this.state.id}/> 
                          return <ComplaintCard card={card}/> 
                      })}
                      {console.log(this.state.complaintFeed)}
                  </div>
                  </div>
              </div>
               
          </>
      )
  }
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);