
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './home.css'
import axios from 'axios'
import * as firebase from 'firebase';

import { withAuthorization } from '../Session/session.js';
import Navigation from '../Navigation/navigation.js';

import ComplaintCard from '../Feeds/ComplaintCard.js';

import MaterialIcon, {colorPalette} from 'material-icons-react';



class HomePage extends Component {

  user = firebase.auth().currentUser

  curUser = () => {
    return firebase.auth().currentUser
  }

  state = {
      complaintFeed: []

  }


  componentDidMount() {
    
    this.complaints();
    console.log('is this working?')
  }

  ProfilePush = () => {
      this.props.history.push(`/edit-profile`)
    }



  complaints = () => {
      axios
      .get("https://call-complain.herokuapp.com/api/routes/posts")
      .then(response => {
        this.setState({ complaintFeed: response.data });
      })
      .catch(error => {
        console.error(error);
      });
  }



// >>>>>>> ef6ac5c97f12ef0314ff9a5fcf34b7d4c4232cdd
  render() {
      console.log(firebase.auth().currentUser)
      console.log("ssdfsdf")
      return (
          <>
          <Navigation />
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
                    <p>Total Upvotes:</p>
                    <button class="EditBtn" onClick={this.ProfilePush}>Edit Profile</button>
                  </div>
                  

                  <div>
                      
                      {this.state.complaintFeed.map((card, i) => {
                         
                          return <ComplaintCard key={i} card={card}/> 
                      })}
                  </div>
                  </div>
              </div>
               
          </>
      )
  }
// >>>>>>> 000acc6ebae3bbac810db8f9948e7006c630e82c
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);
// export default HomePage;