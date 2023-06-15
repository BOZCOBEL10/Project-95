var firebaseConfig = {
      apiKey: "AIzaSyDKzqT4Ht5p9NC8exhp9Kn7lEgeA3zJQHY",
      authDomain: "kwitter-5b553.firebaseapp.com",
      databaseURL: "https://kwitter-5b553-default-rtdb.firebaseio.com",
      projectId: "kwitter-5b553",
      storageBucket: "kwitter-5b553.appspot.com",
      messagingSenderId: "1072842131070",
      appId: "1:1072842131070:web:a44d3a31385d6ea4817a2f"
    };
    
    // Initialize Firebase
      firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name_welcome").innerHTML="Welcome "+user_name;

function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
          message:user_name+":"+""
      });

      localStorage.setItem("room_name",room_name);
      window.location = "kwitter_page.html";

}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room name - "+Room_names);
       row = "<div class='room_name' id="+Room_names+" onClick='redirecttoRoomName(this.id)'>#"+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML+=row;
      });});}
getData();

function redirecttoRoomName(name){

      console.log(name);
      localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html";

}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}