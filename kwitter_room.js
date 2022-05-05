var firebaseConfig = {
      apiKey: "AIzaSyC1vyQICoKie16pzHidwrjkze7H0tX14Kc",
      authDomain: "kwitter-f9a09.firebaseapp.com",
      databaseURL: "https://kwitter-f9a09-default-rtdb.firebaseio.com",
      projectId: "kwitter-f9a09",
      storageBucket: "kwitter-f9a09.appspot.com",
      messagingSenderId: "800146252175",
      appId: "1:800146252175:web:7f537a0b2fdb51c0dd6bfa"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
