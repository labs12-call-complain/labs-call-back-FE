import React from 'react'
import firebase from 'firebase'

const Signedin = () => {


    return (
        <div>

            <p>asdasdas</p>
            <button onClick={() => firebase.auth().signOut()}> Sign Out </button>
        </div>
    )
}
export default Signedin