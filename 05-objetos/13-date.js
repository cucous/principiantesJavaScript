const ahora = new Date();
console.log(ahora);

const fecha = new Date(''); // <-- fecha en blanco
console.log(fecha);

const fecha1 = new Date('December 17, 1995 03:24:00 GMT+00:00'); // <-- 17 de diciembre de 1995 a las 03:24
console.log(fecha1);

const fecha2 = new Date(1986, 1, 1, 14, 15); // <-- 1 de febrero de 1986 a las 14:15
console.log(fecha2);

const fecha3 = new Date(1986, 11, 25, 14+15, 15); // <-- 25 de diciembre de 1986 a las 29:15

const fecha99 = new Date(0); // <-- 1 de enero de 1970
console.log(fecha99);

fecha3.toDateString();
console.log(fecha3.toDateString()); // <-- para ver la fecha en un formato más legible
console.log(fecha3.toISOString()); // <-- para pasar la fecha cliente-servidor o de un servidor a otro
console.log(fecha3.toTimeString()); // <-- para ver horas

// Metodos GET
fecha3.getFullYear();
fecha3.getMonth();
fecha3.getDate();
fecha3.getDay();
fecha3.getHours();
fecha3.getMinutes();
fecha3.getSeconds();
fecha3.getMilliseconds();


