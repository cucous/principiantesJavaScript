let arr1 = [1,2];
let arr2 = [3,4];

let combinados = arr1.concat(arr2); // [1,2,3,4]
console.log(combinados); // [1,2,3,4]

let divididos = combinados.slice(1,3); // [2,3]
let divididos2 = combinados.slice(1); // [2,3,4]
let divididos3 = combinados.slice(); // [1,2,3,4]
console.log(divididos); // [2,3]
console.log(divididos2); // [2,3,4]
console.log(divididos3); // [1,2,3,4]


