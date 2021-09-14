const firebaseConfig = {
  apiKey: "AIzaSyD7H_8t8E351R7TF7KJBivTDRnK6sWlabk",
  authDomain: "uya-proyecto-final-javi.firebaseapp.com",
  projectId: "uya-proyecto-final-javi",
  storageBucket: "uya-proyecto-final-javi.appspot.com",
  messagingSenderId: "827456526433",
  appId: "1:827456526433:web:e732e5d39c7eddadb6b220",
  measurementId: "G-N8F1C5EF56"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// var usuario;
function registrar() {
  var nombre = $("input#icon_prefix").val();
  var email = $("input#icon_email").val();
  var contraseña = $("input#contraseñaRegistrar").val();

  if ((nombre != "") && (contraseña.length > 4) && (email != "")) {
      firebase.auth().createUserWithEmailAndPassword(email, contraseña).catch(e => alert(e));
      authent();
  }
}

function authent(){
  let pathname = window.location.pathname;
  let findpath = pathname.search("/index.html");
  
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      location.href = 'dashboard/panel.html';
    }
    else if (findpath != -1) {
      location.href = 'registro.html';
    }
  })
}

function identificar() {
  var email = $("input#identificar").val();
  var contraseña = $("input#contraseña").val();
  firebase.auth().signInWithEmailAndPassword(email, contraseña).catch(e => alert(e))
  authent();
}

function singout() {
  firebase.auth().signOut().then(() => {
    alert('Sesión finalizada con exito.');
    location.href = 'index.html';
  }).catch(e => {
    alert(e);
  })
}

function mainsingout() {
  firebase.auth().signOut().then(() => {
    alert('Sesión finalizada con exito.');
    location.href = 'index.html';
  }).catch(e => {
    alert(e);
  })
}
$(document).ready(  
  function authent(){
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        $(".mostrar").show();
        $(".showmenu").show();
        
      } else {
        $(".ocultarse").show();
        $(".showmenu").show();
      }
    })
  }
)
