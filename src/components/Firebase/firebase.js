import app from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBpul_E4q5Y0gbOVqLOn7LzD7xmaKveWVo",
  authDomain: "callcomplain-1556741879606.firebaseapp.com",
  databaseURL: "https://callcomplain-1556741879606.firebaseio.com",
  projectId: "callcomplain-1556741879606",
  storageBucket: "callcomplain-1556741879606.appspot.com",
  messagingSenderId: "928021925802",
  appId: "1:928021925802:web:5936bde0c39a504f"
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
  }

    // *** Auth API ***
    // These endpoints are called asynchronously

    doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password =>
      this.auth.currentUser.updatePassword(password);
}

export default Firebase;