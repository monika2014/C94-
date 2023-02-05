
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyCh-3IYUl802oQ9nJd8wbFjUmLZUDNP0ug",
  authDomain: "kwit1-81d76.firebaseapp.com",
  databaseURL: "https://kwit1-81d76-default-rtdb.firebaseio.com",
  projectId: "kwit1-81d76",
  storageBucket: "kwit1-81d76.appspot.com",
  messagingSenderId: "1020195305235",
  appId: "1:1020195305235:web:a04f394abc6d56f0decce6"
};


firebase.initializeApp(firebaseConfig);
// ADD YOUR FIREBASE LINKS

function addUser()
{
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
  });
}


