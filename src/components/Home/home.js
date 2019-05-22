import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './home.css'
import axios from 'axios'

import { withAuthorization } from '../Session/session.js';

import ComplaintCard from '../Feeds/ComplaintCard.js';

import MaterialIcon, {colorPalette} from 'material-icons-react';


class HomePage extends Component {
  state = {
      "cards": [
         {
              "id": 1,
              "name": "Tim",
              "uid": "00mKY5N1WBRO7mGcfpvFDzSGkJJ3",
              "complaint": "Lorem ipsum dolor amet copper mug labore neutra, artisan salvia squid green juice williamsburg literally ea typewriter small batch humblebrag seitan. Trust fund proident enim, activated charcoal pop-up chambray shabby chic officia woke. Church-key austin next level, scenester dreamcatcher succulents asymmetrical drinking vinegar. Keytar reprehenderit in hammock woke eu gochujang incididunt before they sold out ut chartreuse excepteur man bun locavore. Vape activated charcoal quinoa hoodie try-hard artisan YOLO nisi dolor cardigan ugh. Pork belly salvia iPhone gluten-free retro you probably haven't heard of them seitan scenester whatever est chartreuse semiotics brooklyn hexagon gastropub."
         },
         {
              "id": 2,
              "name": "Tom",
              "uid": "00mKY5N1WBRO7mGcfpvFDzSGkJJ3",
              "complaint": "Lorem ipsum dolor amet copper mug labore neutra, artisan salvia squid green juice williamsburg literally ea typewriter small batch humblebrag seitan. Trust fund proident enim, activated charcoal pop-up chambray shabby chic officia woke. Church-key austin next level, scenester dreamcatcher succulents asymmetrical drinking vinegar. Keytar reprehenderit in hammock woke eu gochujang incididunt before they sold out ut chartreuse excepteur man bun locavore. Vape activated charcoal quinoa hoodie try-hard artisan YOLO nisi dolor cardigan ugh. Pork belly salvia iPhone gluten-free retro you probably haven't heard of them seitan scenester whatever est chartreuse semiotics brooklyn hexagon gastropub."
          }, 
          {
              "id": 3,
              "name": "Fred",
              "uid": "00mKY5N1WBRO7mGcfpvFDzSGkJJ3",
              "complaint": "Lorem ipsum dolor amet copper mug labore neutra, artisan salvia squid green juice williamsburg literally ea typewriter small batch humblebrag seitan. Trust fund proident enim, activated charcoal pop-up chambray shabby chic officia woke. Church-key austin next level, scenester dreamcatcher succulents asymmetrical drinking vinegar. Keytar reprehenderit in hammock woke eu gochujang incididunt before they sold out ut chartreuse excepteur man bun locavore. Vape activated charcoal quinoa hoodie try-hard artisan YOLO nisi dolor cardigan ugh. Pork belly salvia iPhone gluten-free retro you probably haven't heard of them seitan scenester whatever est chartreuse semiotics brooklyn hexagon gastropub."
          }, 
          {
              "id": 4,
              "name": "Tara",
              "uid": "00mKY5N1WBRO7mGcfpvFDzSGkJJ3",
              "complaint": "Lorem ipsum dolor amet copper mug labore neutra, artisan salvia squid green juice williamsburg literally ea typewriter small batch humblebrag seitan. Trust fund proident enim, activated charcoal pop-up chambray shabby chic officia woke. Church-key austin next level, scenester dreamcatcher succulents asymmetrical drinking vinegar. Keytar reprehenderit in hammock woke eu gochujang incididunt before they sold out ut chartreuse excepteur man bun locavore. Vape activated charcoal quinoa hoodie try-hard artisan YOLO nisi dolor cardigan ugh. Pork belly salvia iPhone gluten-free retro you probably haven't heard of them seitan scenester whatever est chartreuse semiotics brooklyn hexagon gastropub."
          }, 
          {
              "id": 5,
              "name": "Sarah",
              "uid": "00mKY5N1WBRO7mGcfpvFDzSGkJJ3",
              "complaint": "Lorem ipsum dolor amet copper mug labore neutra, artisan salvia squid green juice williamsburg literally ea typewriter small batch humblebrag seitan. Trust fund proident enim, activated charcoal pop-up chambray shabby chic officia woke. Church-key austin next level, scenester dreamcatcher succulents asymmetrical drinking vinegar. Keytar reprehenderit in hammock woke eu gochujang incididunt before they sold out ut chartreuse excepteur man bun locavore. Vape activated charcoal quinoa hoodie try-hard artisan YOLO nisi dolor cardigan ugh. Pork belly salvia iPhone gluten-free retro you probably haven't heard of them seitan scenester whatever est chartreuse semiotics brooklyn hexagon gastropub."
          }
      ],
      complaintFeed: []

  }

  componentDidMount() {
    
    this.complaints();
    console.log('is this working?')
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
                  <div>
                      {/* {this.state.cards.map((card, i) => {
                          return <ComplaintCard card={card} key={this.state.id}/> 
                      })}  */}
                      {this.state.complaintFeed.map((card, i) => {
                        //   return <ComplaintCard card={card} key={this.state.id}/> 
                          return <ComplaintCard key={i} card={card}/> 
                      })}
                  </div>
              </div>
               
          </>
      )
  }
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);
// export default HomePage;