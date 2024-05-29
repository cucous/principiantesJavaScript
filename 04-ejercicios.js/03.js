function getByidx(arr, idx) {

    if (idx < 0 || idx >= arr.length) {
        return null;
    }

    return arr[idx];


}


const resultado = getByidx([1, 2], 1);

console.log(resultado);
