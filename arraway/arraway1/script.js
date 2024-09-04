let numeros = [1, 2, 3, 4, 5]; // arreglos simples

let nimbres=[]; // arreglos vacios

for (let i=0; i==numeros; i++){ // siclo for para leer el arreglo
    numeros.push(numeros[i]); // viajar por el arreglo
}

console.log(numeros); //mostrar el arreglo en consola

var personas = [ //areglo tipo objetos
    {
      nombre: 'Ana',//objeto 1
      edad: 25,//objeto 2 
      ciudad: 'Barcelona'//objeto 3
    },
    {
      nombre: 'Luis',
      edad: 32,
      ciudad: 'Valencia'
    },
    {
      nombre: 'Marta',
      edad: 29,
      ciudad: 'Sevilla'
    }
  ];
  
for (let i = 0; i < personas.length; i++) { // siclo for para leer el arreglo
  nimbres.push(personas[i].nombre); //almacena el dato dentro del arreglo vacio
}
console.log(nimbres);

var Nom =personas.map(function(personas){ // funcion de map
  return personas.nombre; //devuelve el objeto nombres del arraway
});

console.log(Nom); // muestra en pantalla el objeto seleccionado