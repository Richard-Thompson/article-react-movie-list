import firebase from 'firebase'
const apiKey = process.env.REACT_APP_FIREBASE_API_KEY;

var config = {
  apiKey:  apiKey,
  authDomain: "movie-list-react.firebaseapp.com",
  databaseURL: "https://movie-list-react.firebaseio.com",
  projectId: "movie-list-react",
  storageBucket: "movie-list-react.appspot.com",
  messagingSenderId: "460892693554"
};
firebase.initializeApp(config);

export default firebase;