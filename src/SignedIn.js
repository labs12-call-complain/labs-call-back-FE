import fire from './config/fire'
import React from 'react'
import firebase from 'firebase'
import Profile from './components/Users/Profile'

const Signedin = () => {

    var user = firebase.auth()

    return (
        
        <div>
            <button onClick={() => firebase.auth().signOut()}> Sign Out </button>

            {console.log(user)}

            <Profile />
        </div>
    ) 
}
export default Signedin 