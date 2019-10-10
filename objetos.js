var vp= document.getElementById("peliculas");
var papel= vp.getContext("2d");
var pelicula="a.jpg";

var imagen = new Image();
imagen.src= pelicula;
imagen.addEventListener("load", dibujar);

function dibujar(){
  papel.drawImage(imagen, 0,0)
}
