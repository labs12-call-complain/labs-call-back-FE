import fire from './fire'
import React from 'react'
import firebase from 'firebase'

const Signedin = () => {


    return (
        <div>
            <button onClick={() => firebase.auth().signOut()}> Sign Out </button>

            <button onClick={() => {fire.firestore().collection('users').doc('1KDP66Wbr6LIRIhxzAnF').delete()}} > Delete user </button>
        </div>
    )
}
export default Signedin 