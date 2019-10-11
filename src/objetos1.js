var vp= document.getElementById("lienzo");
var papel= vp.getContext("2d");
var peli1={ url : "imagenes/aNewHope.jpg" , cargaOk: false};
var peli2={url : "imagenes/Attack of the Clones.jpg"     , cargaOk: false};
var peli3={url : "imagenes/The Phantom Menace.jpg"       , cargaOk: false};
var peli4={url : "imagenes/Revenge of the Sith.jpg"      , cargaOk: false};
var peli5={url : "imagenes/Return of the Jedi.jpg"       , cargaOk: false};
var peli6={url : "imagenes/the empire strikes back.jpg"  , cargaOk: false};
var peli7={url : "imagenes/The Force Awakens.jpg"        , cargaOk: false};

peli1.imagen = new Image();
peli1.imagen.src= peli1.url;
peli1.imagen.addEventListener("load", cargarImagen1);
peli1.onclick = function llevar() {
    window.location.href = 'https://swapi.co/api/films/';
};


peli2.imagen = new Image();
peli2.imagen.src= peli2.url;
peli2.imagen.addEventListener("load", cargarImagen2);

peli3.imagen = new Image();
peli3.imagen.src= peli3.url;
peli3.imagen.addEventListener("load", cargarImagen3);

peli4.imagen = new Image();
peli4.imagen.src= peli4.url;
peli4.imagen.addEventListener("load", cargarImagen4);

peli5.imagen = new Image();
peli5.imagen.src= peli5.url;
peli5.imagen.addEventListener("load", cargarImagen5);

peli6.imagen = new Image();
peli6.imagen.src= peli6.url;
peli6.imagen.addEventListener("load", cargarImagen6);

peli7.imagen = new Image();
peli7.imagen.src= peli7.url;
peli7.imagen.addEventListener("load", cargarImagen7);

function cargarImagen1(){
  peli1.cargaOk=true;
  dibujar();
}

function cargarImagen2(){
  peli2.cargaOk=true;
  dibujar();
}

function cargarImagen3(){
  peli3.cargaOk=true;
  dibujar();
}

function cargarImagen4(){
  peli4.cargaOk=true;
  dibujar();
}

function cargarImagen5(){
  peli5.cargaOk=true;
  dibujar();
}

function cargarImagen6(){
  peli6.cargaOk=true;
  dibujar();
}
function cargarImagen7(){
  peli7.cargaOk=true;
  dibujar();
}


function dibujar(){
  if (peli1.cargaOk==true){
  papel.drawImage(peli1.imagen, 100,100);}
  if (peli2.cargaOk==true){
  papel.drawImage(peli2.imagen, 400,100);}
  if (peli3.cargaOk==true){
  papel.drawImage(peli3.imagen, 700,100);}
  if (peli4.cargaOk==true){
  papel.drawImage(peli4.imagen, 100,400);}
  if (peli5.cargaOk==true){
  papel.drawImage(peli5.imagen, 400,400);}
  if (peli6.cargaOk==true){
  papel.drawImage(peli6.imagen, 700,400);}
  if (peli7.cargaOk==true){
  papel.drawImage(peli7.imagen, 400,700);}
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
            console.log(data);
        })
    }
