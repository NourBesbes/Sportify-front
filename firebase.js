/**
 * Created by nour on 3/31/17.
 */
import * as firebase from 'firebase';
console.disableYellowBox = true;
var firebaseConfig = {
    apiKey: "AIzaSyDZBRin_1ktO7cERWMLCuEicng310aBmLE",
    authDomain: "socialapp-7aff6.firebaseapp.com",
    databaseURL: "https://socialapp-7aff6.firebaseio.com",
    storageBucket: "socialapp-7aff6.appspot.com",
    messagingSenderId: "508912104235"
};
const firebaseApp =firebase.initializeApp(firebaseConfig);