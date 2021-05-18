// Your web app's Firebase configuration
 var firebaseConfig = {
      apiKey: "AIzaSyCqDUHcZ3fkCl3FaPPinaL3rjL4dp4vGbk",
      authDomain: "chatapp-for-school.firebaseapp.com",
      databaseURL: "https://chatapp-for-school-default-rtdb.firebaseio.com",
      projectId: "chatapp-for-school",
      storageBucket: "chatapp-for-school.appspot.com",
      messagingSenderId: "673546131426",
      appId: "1:673546131426:web:b531a6b635d76a6c170bbb"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS
function username() {
  var username=document.getElementById("user_name").nodeValue;
  firebase.database().ref("/").child(username).update(
    {
      purpose:"adding user"
    }
  );
}
function getData() {
  firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      function logout() {
        logout=document.getElementById("logout").value;
        localStorage.setItem("logout",Logout);
        window.location="lets chat_room.html" ;
       }
  function addroom () {
    addroom=document.getElementById("addroom").value;
    localStorage.setItem("addroom",ADDROOM);
  }     




      //End code
      });});}
getData();
