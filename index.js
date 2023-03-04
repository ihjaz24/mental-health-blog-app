const firebaseConfig = {
    apiKey: "AIzaSyAaVA_eZPDIBqS76q-yZtbgdIXl3WfoeJs",
    authDomain: "mind-blog-7399f.firebaseapp.com",
    projectId: "mind-blog-7399f",
    storageBucket: "mind-blog-7399f.appspot.com",
    messagingSenderId: "666739340591",
    appId: "1:666739340591:web:6bd41a78f3414fe988ddda",
    measurementId: "G-1WKDXBCHB9"
 };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  var database= firebase.database();

function get(){
    // Reference to the root of the database
var rootRef = database.ref();
var chat=document.getElementById('chat').value;

// Reference to the "users" node in the database
var usersRef = rootRef.child("users" +chat);

// Read the data at the "users" node once
usersRef.once("value")
  .then(function(snapshot) {
    // Print the entire snapshot
    console.log(snapshot.val());
})}