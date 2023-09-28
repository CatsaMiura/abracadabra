const firebaseConfig = {
  apiKey: "AIzaSyAVTFbvvbXScodotfHtybiGLCddznDaTqk",
  authDomain: "russo-72353.firebaseapp.com",
  databaseURL: "https://russo-72353-default-rtdb.firebaseio.com",
  projectId: "russo-72353",
  storageBucket: "russo-72353.appspot.com",
  messagingSenderId: "96376171625",
  appId: "1:96376171625:web:85348c34d325935b7706f8",
  measurementId: "G-8QZQVLMBGT"
};

    firebase.initializeApp(firebaseConfig);

   function addUser() {

    user_name = document.getElementById("user_name").value;
  
    localStorage.setItem("user_name", user_name);
    
      window.location = "kwitter_room.html";
  }
  
