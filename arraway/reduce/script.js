var postre = [
    {postre1: 'pastel', postre2: 'arepa'},
    {postre1: 'gelatina', postre2: 'rellenitos'},
    {postre1: 'pan de choclate', postre2: 'platano frito'},
    {postre1: 'flan', postre2: 'helado'},
    {postre1: 'atol', postre2: 'rellenitos'},
    {postre1: 'pan', postre2: 'rellenitos'}
];

let pedidos = [],cantidad=0;

// cantidad de pedidos de relleenitos con for
for(let i = 0; i < postre.length; i++){
    if(postre[i].postre2 === "rellenitos"){
        cantidad++;
    }
}

console.log(cantidad+' personas pidieron rellenitos')

// por reduce
let cantidad_ = postre.reduce(function(contador, item){
    if (item.postre2==="rellenitos"){
       return contador+1;
    } else{
        return contador;
    }

},0);

console.log(cantidad_ + ' personas pidieron rellenitos');