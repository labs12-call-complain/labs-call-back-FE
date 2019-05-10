import React from 'react';


const TweetForm = () => {

var Twitter = require('twitter');

var client = new Twitter ({
  consumer_key: 'JUmFhLK3cCCXgUfalzMc370px',
  consumer_secret: 'aRfoT1yUw7TcGw6EPEHratI5u5vNRIzFZ5teGHgu6PDLUybRCG',
  access_token_key: '1123035602973147136-tI39bBpozTKifIz14Q7s1tHfPhSJ2u',
  access_token_secret: 'COJaCzuJC9KZQw286hHifGohUAGHXxHntgoTZq47myAOR'
});


var params = {status: "twitter is working with react!!"}

    
function postreq(){ client.post("https://cors-anywhere.herokuapp.com/https://api.twitter.com/1.1/statuses/update.json?status=testest2", params)
    .then(function (tweet) {
      console.log(tweet);
})
    .catch(function (error) {
      throw error;
}) }
    
    
      
      return (
        <div>
            <p>---- twitter form ----</p>
        

            <button onClick={postreq}> Tweet </button>
        
        </div>
      )

    }
    
    export default TweetForm;