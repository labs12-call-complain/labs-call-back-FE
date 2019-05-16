import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from '../Navigation/navigation.js';
import LandingPage from '../Landing/landing.js';
import SignUpPage from '../SignUp/signup.js';
import SignInPage from '../SignIn/signin.js';
import PasswordForgetPage from '../PasswordForget/passwordforget.js';
import HomePage from '../Home/home.js';
import AccountPage from '../Account/account.js';
import AdminPage from '../Admin/admin.js';
import FormContainer from '../Forms/FormContainer';
import Profile from '../Users/Profile.js'
import TweetForm from '../Forms/TweetForm.js'

import * as ROUTES from '../constants/routes.js';

import { withAuthentication } from '../Session/session.js';

const App = () => (
    <Router>
    <div>
    <Navigation />
        
        <Route exact path={ROUTES.LANDING} component={LandingPage} />
        <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
        <Route path={ROUTES.SIGN_IN} component={SignInPage} />
        <Route path={ROUTES.EDIT_PROFILE} component={Profile} />
        <Route path={ROUTES.HOME} component={HomePage} />
        <Route path={ROUTES.ACCOUNT} component={AccountPage} />
        <Route path={ROUTES.FORM_CONTAINER} component={FormContainer} />
        <Route path={ROUTES.TWEET_FORM} component={TweetForm} />
    </div>
    </Router>
);


  
export default withAuthentication(App);