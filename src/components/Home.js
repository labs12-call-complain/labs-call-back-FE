import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import firebase from 'firebase'

import Navigation from './Navigation.js';
import ComplaintCard from './Feeds/ComplaintCard.js';
import RecordForm from './Forms/RecordForm.js'

import MaterialIcon, {colorPalette} from 'material-icons-react';



export default class SignedIn extends Component {
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
        ]
    }

    render() {
        return (
            <>
                {/* <Router> */}
                    <Navigation />
                    <div className='Homepage Container'>
                    <Link to='/record-complaint'>
                        <button>
                            <MaterialIcon icon="phone" />
                            Call and Complain
                        </button>
                    </Link>
                        <h1>
                            Chart of Worst Companies Goes Here
                        </h1>
                        <div>
                            {this.state.cards.map((card, i) => {
                                return <ComplaintCard card={card} key={this.state.id}/> 
                            })}
                        </div>
                    </div>
                    {/* <Route exact path="/" component={Home} /> */}
                    {/* <Route path="/record-complaint" component={RecordForm} />
                </Router> */}
            </>
        )
    }
}