//variables en javascript (tipado dinamico)
let nombre ='Pedro'; //variable tipo cadenas de caracter
let entero=12; //variable tipo entero
let flotante=1.3; //variable tipo flotante
let bool = true; // variable buliano
let is_null = null;
let persona={Nombre: 'Juan', Edad: 32}; //variable tipo objetos

document.write(nombre,"<br>", //salto de lineas "<br>"
               entero,"<br>",
               flotante,"<br>",
               bool,"<br>",
               is_null,"<br>",
               persona.Edad //variable tipo objetos
               ); // salida del mensaje o resultado


if (nombre=='Hola mundo'){
    document.write('si')
}
else{
    document.write('No')
}
