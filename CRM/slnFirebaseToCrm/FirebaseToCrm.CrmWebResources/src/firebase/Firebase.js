import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBSD5vZpqL2Q0hV-CDwX6T7oYKTbEernjQ",
    authDomain: "fir-tocrm.firebaseapp.com",
    databaseURL: "https://fir-tocrm.firebaseio.com",
    projectId: "fir-tocrm",
    storageBucket: "fir-tocrm.appspot.com",
    messagingSenderId: "362389596985"
};
  
 const firebaseApp  = firebase.initializeApp(config);

export default firebaseApp;
