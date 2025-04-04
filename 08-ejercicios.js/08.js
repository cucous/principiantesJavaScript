const usuarios = [
    { edad: 17, nombre: 'Ivan', plan: 'Premium' },
    { edad: 13, nombre: 'chanchito', plan: 'free' },
    { edad: 32, nombre: 'Fernanda', plan: 'free' },
    { edad: 25, nombre: 'Felipe', plan: 'gold' },


];


function usuarioDiferenteAFree(arr) {
    usuarios.sort((a, b) => a.edad - b.edad);
    const lista = arr.filter(usuario => usuario.plan !== 'free')
        .map(u => `<li>${u.nombre} tiene ${u.edad} años</li>`);
    const html = `<ul>${lista.join('')}</ul>`;
    console.log(html);

}

usuarioDiferenteAFree(usuarios);
console.log('-------------------');
console.log(usuarios.sort((a, b) => a.edad - b.edad));
console.log('-------------------');