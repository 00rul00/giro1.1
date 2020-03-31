function setup() {
  //p5.js es la biblioteca o libreria que nos deja hacer el lienzo mas facil
  //se crea un lienzo con tres dimensiones 
  createCanvas(100, 100, WEBGL);
}

function draw() {
  //se elige el color de fondo 
  //en formato rgb 
  //si solo hay un numero significa que es el mismo para los tre colores
  background(250);



  normalMaterial();
  //se escoje la rotacion del dibujo que se va a pintar
  rotateX(frameCount * 0.01);
  rotateZ(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  //se crea el dibujo 
  cylinder(20, 50);

}