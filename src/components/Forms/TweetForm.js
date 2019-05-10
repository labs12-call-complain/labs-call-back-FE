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
    


// function axiospost() {
//     axios
  
//     .post("https://api.twitter.com/1.1/statuses/update.json?status=testingTweet",  
//     {"headers": {
//       "Access-Control-Allow-Origin" : "http://localhost:3000",
//       "Access-Control-Allow-Credentials" : "true",
      
//       "Content-Type": "application/json",
//       "Authorization": "OAuth oauth_consumer_key=\"JUmFhLK3cCCXgUfalzMc370px\",oauth_token=\"1123035602973147136-tI39bBpozTKifIz14Q7s1tHfPhSJ2u\",oauth_signature_method=\"HMAC-SHA1\",oauth_timestamp=\"1557422010\",oauth_nonce=\"dpHvDaG5oWW\",oauth_version=\"1.0\",oauth_signature=\"9kVkayM6QfT1pLJpfV2WlN1av6A%3D\"",
      
//       "Accept": "*/*",
//       "Cache-Control": "no-cache",
//       "Postman-Token": "8531a700-8707-4008-b583-927ede9091f1,1f1c5655-b754-4e26-af1f-7e795a8760cc",
//       "Host": "api.twitter.com",
//       "accept-encoding": "gzip, deflate",
//       "content-length": "",
//       "Connection": "keep-alive",
//       "cache-control": "no-cache"
//     } }) 
//     .then(res => {console.log("worked")})
//     .catch(err => {console.log("failed")})
//   }
    

      
      return (
        <div>
            <p>---- twitter form ----</p>
        

            <button onClick={postreq}> Tweet </button>
        
        </div>
      )

    }
    
    export default TweetForm;