import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from '../Navigation/navigation.js';
import LandingPage from '../Landing/landing.js';
import HomePage from '../Home/home.js';
import FormContainer from '../Forms/FormContainer';
import EditProfile from '../Users/EditProfile.js';
import Profile from '../Users/Profile.js';
import TwitterConfirm from '../Home/TwitterConfirm.js';

import './App.css'

import * as ROUTES from '../constants/routes.js';

import { withAuthentication } from '../Session/session.js';
import { SignInForm } from '../SignIn/signin.js';
import  SignInConfirmation  from '../Landing/SignInLanding';

const App = () => (
    <Router>
        <div className="App">
            {/* <Navigation /> */}
            
            <Route exact path={ROUTES.LANDING} component={LandingPage} />
            <Route path={ROUTES.EDIT_PROFILE} component={EditProfile} />
            <Route path={ROUTES.HOME} component={HomePage} />
            <Route path={ROUTES.FORM_CONTAINER} component={FormContainer} />
            <Route path={ROUTES.PROFILE} component={Profile} />
            <Route path={ROUTES.TWEET_CONFIRM} component={TwitterConfirm} />
            <Route path={ROUTES.SIGN_IN} component={SignInConfirmation} />
        </div>
    </Router>
);


export default withAuthentication(App);
// export default App;