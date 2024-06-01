let array = [{ id: 1, name: 'Nicolas', },
{ id: 2, name: 'Felipe', },
{ id: 3, name: 'Chanchito', }
];

function toPairs(array) {
  let pairs = [];
  for (idx in array){
    let element = array[idx];
    pairs[idx] = [element.id, element.name];
  }
  return pairs;
}



/* Primer intento
function toPairs(array) {

    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}


let resultado = toPairs(array);
console.log(resultado);
*/






