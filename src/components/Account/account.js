import React from 'react';

import { AuthUserContext, withAuthorization } from '../Session/session.js';
import { PasswordForgetForm } from '../PasswordForget/passwordforget.js';
import PasswordChangeForm from '../PasswordChange/passwordchange.js';

const AccountPage = () => (
    <AuthUserContext.Consumer>
      {authUser => (
        <div>
          <h1>Account: {authUser.email}</h1>
          <PasswordForgetForm />
          <PasswordChangeForm />
        </div>
      )}
    </AuthUserContext.Consumer>
  );

const condition = authUser => !!authUser;

export default withAuthorization(condition)(AccountPage);