let obj = {}; // Object literal
let odj2 = new Object(); // Object constructor

/**
 *  new Array() // []
 * new String() // '', "", ``
 * new Boolean() // true, false
 * new Number() // 1, 2, 3, 4
 * new Object() // {}
 * new Function() // function () {}
 * new RegExp() // /abc/
 * new Date() // new Date()
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */


function Usuario() {
    this.name = 'jeke';

}

let user = new Usuario();
console.log(user.constructor);

const s1 = "1 + 1";
const s2 = new String("1 + 1");
console.log(s1, s2);
console.log(eval(s1), eval(s2));
