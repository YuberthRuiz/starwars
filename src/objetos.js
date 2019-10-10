var vp= document.getElementById("lienzo");
var papel= vp.getContext("2d");
var pelicula1="imagenes/aNewHope.jpg";
var pelicula2="imagenes/Attack of the Clones.jpg";
var pelicula3="imagenes/The Phantom Menace.jpg";
var pelicula4="imagenes/Revenge of the Sith.jpg";
var pelicula5="imagenes/Return of the Jedi.jpg";
var pelicula6="imagenes/the empire strikes back.jpg";
var pelicula7="imagenes/The Force Awakens.jpg";


var peli1 = new Image();
peli1.src= pelicula1;
peli1.addEventListener("load", dibujar);

var peli2 = new Image();
peli2.src= pelicula2;
peli2.addEventListener("load", dibujar);

var peli3 = new Image();
peli3.src= pelicula3;
peli3.addEventListener("load", dibujar);

var peli4 = new Image();
peli4.src= pelicula4;
peli4.addEventListener("load", dibujar);

var peli5 = new Image();
peli5.src= pelicula5;
peli5.addEventListener("load", dibujar);

var peli6 = new Image();
peli6.src= pelicula6;
peli6.addEventListener("load", dibujar);

var peli7 = new Image();
peli7.src= pelicula7;
peli7.addEventListener("load", dibujar);

function dibujar(){
  papel.drawImage(peli1, 100,100)
  papel.drawImage(peli2, 400,100)
  papel.drawImage(peli3, 700,100)
  papel.drawImage(peli4, 100,400)
  papel.drawImage(peli5, 400,400)
  papel.drawImage(peli6, 700,400)
  papel.drawImage(peli7, 400,700)
}

function traer(){
      fetch('https://swapi.co/api/films/')
        .then(res => res.json())
        .then( data =>{
          console.log(data.results[0].title)
          contenido.innerHTML = `<img src="a.jpg" width="300px" height="300px"
           class="img-fluid rounded-circle" >
           <p>Película:${data.results[0].title}  </p>
            `
        })
    }
