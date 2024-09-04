/*fitrado con for*/
var postre = [
    {postre1: 'pastel', postre2: 'arepa'},
    {postre1: 'gelatina', postre2: 'rellenitos'},
    {postre1: 'pan de choclate', postre2: 'platano frito'},
    {postre1: 'flan', postre2: 'helado'},
    {postre1: 'atol', postre2: 'rellenitos'},
    {postre1: 'pan', postre2: 'rellenitos'}
];

let pedidos = [];

// Filtrando por postre2 === "rellenitos"
for(let i = 0; i < postre.length; i++){
    if(postre[i].postre2 === "rellenitos"){
        pedidos.push(postre[i].postre1);
    }
}

console.log(pedidos);

// filtrado con filter 
let pedido = postre.filter(function(item) {
    return item.postre2 === 'rellenitos';
});

console.log(pedido);