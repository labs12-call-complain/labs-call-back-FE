
import React from 'react'
import firebase from 'firebase'



const Home = () => {


    return (
        <div>
            <button onClick={() => firebase.auth().signOut()}> Sign Out </button>
        </div>
    )
}
export default Home 