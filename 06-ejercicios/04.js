let objeto = {
    id: 1,
    nombre: 'Juan',
    login: function () {
        console.log('login', this);
    },
    logout: function () {
        console.log('logout', this);
    },
}

function cualesMetodos(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'function') {
            console.log(key);
        }
    }
}

cualesMetodos(objeto); // ['login', 'logout']