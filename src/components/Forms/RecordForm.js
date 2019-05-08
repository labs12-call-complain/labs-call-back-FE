import React, {Component} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import firebase from 'firebase'

import Navigation from '../Navigation.js';
// import ComplaintCard from './components/Feeds/ComplaintCard.js'

import MaterialIcon, {colorPalette} from 'material-icons-react';



export default class RecordForm extends Component {
    state = {
       
    }

    render() {
        return (
            <>
                <Navigation />
                <div className='record-form-container'>
                    <h1>Call Using</h1>
                    <button>
                        <MaterialIcon icon="desktop_mac" />
                        My Computer
                    </button>
                    <button>
                        <MaterialIcon icon="phone" />
                        My Phone
                    </button>
                </div>
            </>
        )
    }
}