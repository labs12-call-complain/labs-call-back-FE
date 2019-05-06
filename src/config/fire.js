import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBpul_E4q5Y0gbOVqLOn7LzD7xmaKveWVo",
  authDomain: "callcomplain-1556741879606.firebaseapp.com",
  databaseURL: "https://callcomplain-1556741879606.firebaseio.com",
  projectId: "callcomplain-1556741879606",
  storageBucket: "callcomplain-1556741879606.appspot.com",
  messagingSenderId: "928021925802",
  appId: "1:928021925802:web:5936bde0c39a504f"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;