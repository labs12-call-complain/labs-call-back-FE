// import React, { Component } from "react";
// import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
// import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
// import AppBar from "material-ui/AppBar";
// import TextField from "material-ui/TextField";
// import RaisedButton from "material-ui/RaisedButton";
// import MaterialIcon, {colorPalette} from 'material-icons-react';
// import * as firebase from "firebase";
// import axios from 'axios';

// class Success extends Component {
//     continue = e => {
//     e.preventDefault();
//     //process form here
//     this.props.nextStep();
//     this.formsubmit();
//   };

//   back = e => {
//     e.preventDefault();
//     this.props.prevStep();
//   };

//   formsubmit = () => {
//   let data = {
//     DisplayName: firebase.auth().currentUser.displayName,
//     Email: firebase.auth().currentUser.email,
//     UID: firebase.auth().currentUser.uid,
//     StoreName: this.props.StoreName,
//     StoreLocation: this.props.StoreAddress,
//     StorePhoneNumber: this.props.StorePhone,
//     StoreGoogleRating: this.props.StoreGoogleRating,
//     StoreWebsite: this.props.StoreWebsite,
//     text: this.props.confirmationTranscription,
//     audioFile: ""
//     }
//     let tweetdata = {
//       status: `${this.props.StoreName}, your customer just complained about you on callandcomplain.com. We added you to our #worstcustomerservice leaderboard.`
//     }
//     console.log(tweetdata)
//     axios
//       .post(`https://call-complain.herokuapp.com/api/routes/makepost`, data)
//       .then(res => {
//         console.log("response:", res);
//         axios
//           .post(`https://call-complain.herokuapp.com/api/routes/makeatweet`, tweetdata)
//           .then(res => {
//             console.log("response:", res);
//           })
//           .catch(err => console.log(err));
//       })
//       .catch(err => console.log(err));
//   }

  

//   render() {
//     const { values, handleChange } = this.props;

//     return (
//       <MuiThemeProvider>
//         <>
//           <h1>Confirmation</h1>
//           <div>
//             <MaterialIcon icon="done_outline" />
//             <p>{firebase.auth().currentUser.displayName}</p>
//             <p>{firebase.auth().currentUser.email}</p>
//             <p>{firebase.auth().currentUser.uid}</p>
//           </div>
//           <div>
//             <MaterialIcon icon="done_outline" />
//             <p>{this.props.StoreName}</p>
//             <p>{this.props.StoreAddress}</p>
//             <p>{this.props.StorePhone}</p>
//             <p>{this.props.StoreWebsite}</p>
//             <p>{this.props.StoreGoogleRating}</p>
//           </div>
//           <div>
//             <MaterialIcon icon="done_outline" />
//             <p>{this.props.confirmationTranscription}</p>
//           </div>
//           <div>
//             <MaterialIcon icon="done_outline" />
//             <p>Profile Info</p>
//           </div>
//           <br />
//           <RaisedButton
//             label="Back"
//             primary={false}
//             style={styles.button}
//             onClick={this.back}
//           />

//           <RaisedButton
//             label="Send Tweet"
//             primary={true}
//             style={styles.button}
//             onClick={this.continue}
//           />
//         </>
//       </MuiThemeProvider>
//     );
//   }
// }

// const styles = {
//   button: {
//     margin: 15
//   }
// };

// export default Success;
