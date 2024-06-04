

// facyory function
function createUser(name, email) {
    return {
        email: email,
        name: name,
        activo: true,
        recuperarClave: function () {
            console.log('Recuperando clave...');
        }
    }
}


let user1 = createUser('Ivan', 'ivan@example.com');
let user2 = createUser('jeke', 'jeke@example.com');

console.log(user1, user2);