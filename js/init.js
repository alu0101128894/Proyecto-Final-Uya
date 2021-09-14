(function($){
  $(function(){
    $('.sidenav').sidenav();
    $('.parallax').parallax();
  });
})(jQuery); // end of jQuery name space

//Sombreado del mapa web
function uno(src,color_entrada) {
  src.bgColor = color_entrada;
  src.style.cursor = "hand";
} 

function dos(src,color_entrada) {
  src.bgColor = color_entrada;
  src.style.cursor = "hand";
}

//Comenzar
$("#button-comenzar").focus(function() {
  $("#button-comenzar").removeClass("teal");
  $("#button-comenzar").removeClass("darken-1");
  $("#button-comenzar").last().addClass("teal");
  $("#button-comenzar").last().addClass("lighten-2");
});
$("#button-comenzar").focusout(function() {
  $("#button-comenzar").removeClass("teal");
  $("#button-comenzar").removeClass("darken-1");
  $("#button-comenzar").last().addClass("teal");
  $("#button-comenzar").last().addClass("lighten-2");
});

// Enter Para formularios de registro/inicio de sesión
$('#contraseña').on('input', function() {
  $('#contraseña').keyup(function(e){
    if(e.keyCode == 13){
        //entered is clicked
        identificar();
    }
  });
});

$('#contraseñaRegistrar').on('input', function() {
  $('#contraseñaRegistrar').keyup(function(e){
    if(e.keyCode == 13){
        //entered is clicked
        registrar();
    }
  });
});
