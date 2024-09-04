// Agrega un event listener al botón para manejar el click
document.getElementById('myButton').addEventListener('click', function() {
    setTimeout(function() {
        console.log('Hola me tarde 2s');
        // Muestra el mensaje en el div result debajo del botón
        document.getElementById('result').innerHTML = 'Afimativo funciona';
    }, 2000);
});