let arr1 = [1,2];
let arr2 = [5,6];



let arr3 = [0, ...arr1,3,4, ...arr2, 7, 8]; // [1,2,3,4,5,6]
let arr4 = [...arr3]; // [1,2,3,4,5,6]
//arr3.push(9);
arr3.pop();
console.log(arr3, arr4); // [1,2]