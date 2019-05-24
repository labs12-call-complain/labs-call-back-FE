// import React, { Component } from "react";
// import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
// import { withRouter } from "react-router";
// import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
// import AppBar from "material-ui/AppBar";
// import TextField from "material-ui/TextField";
// import RaisedButton from "material-ui/RaisedButton";
// import MaterialIcon, {colorPalette} from 'material-icons-react';
// import * as firebase from "firebase";
// import axios from 'axios';
// import { Spinner, Fade, NavLink } from 'reactstrap';
// import CloudDoneIcon from '@material-ui/icons/CloudDone';
// import { AuthUserContext } from '../Session/session.js';

// class Form5 extends Component {
//   state = {
//     isLoading: true,
//   }

//   componentDidMount() {
//     setTimeout(() => this.setState({isLoading: false}), 1000);
//   }


//   render() {
//     console.log(this.data)
//     const { values, handleChange } = this.props;
//     if(this.state.isLoading===true) {
//       return (
//       <div className="recording-loader loader">
//         <h1>GRIIPE</h1>
//         <br />
//         <Spinner style={{ width: '3rem', height: '3rem' }} />
//       </div>)
//     };
//     console.log(firebase.auth().currentUser.displayName,
//     firebase.auth().currentUser.email,
//     firebase.auth().currentUser.uid,
//     this.props.StoreName,
//     this.props.StoreAddress,
//     this.props.StorePhone,
//     this.props.StoreGoogleRating,
//     this.props.StoreWebsite,
//     this.props.confirmationTranscription,
//     0)
//     return (
//       <MuiThemeProvider>
//         <Fade in={this.state.fadeIn} tag="h5" className="mt-3 form-container" >
//         <h1 className="form-container-header">Your Tweet Has Been Sent</h1>
//           <div className="confirmation-container">
//             <span className="confirmation-span">
//             <CloudDoneIcon color='error'/>
//             <p className="confirmation-input"><strong>Store:</strong> {this.props.StoreName}</p>
//             </span>
//           </div>
//           <div className="confirmation-container">
//             <span className="confirmation-span">
//               <CloudDoneIcon color='error'/>            
//               <p className="confirmation-input"><strong>Address:</strong> {this.props.StoreAddress}</p>
//             </span>
//           </div>
//           <div className="confirmation-container">
//             <span className="confirmation-span">
//               <CloudDoneIcon color='error'/>          
//               <p className="confirmation-input"><strong>Transcription:</strong> {this.props.confirmationTranscription}</p>
//             </span>
//           </div>
//           <div className="confirmation-container">
//             <span className="confirmation-span">
//               <CloudDoneIcon color='error'/>          
//               <p className="confirmation-input"><strong>Signed-In:</strong> Yes</p>
//             </span>
//           </div>
//           <NavLink to="/home" onClick={this.tweetAndRoute}>
//             <RaisedButton
//                 label="Send Tweet"
//                 primary={true}
//                 style={styles.button}
//                 // onClick={this.tweetAndRoute}
//             />
//           </NavLink>
//         </Fade>
//       </MuiThemeProvider>
//     );
//   }
// }

// const styles = {
//   button: {
//     margin: 15
//   }
// };

// export default Form5;
