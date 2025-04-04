const usuarios = [
    { edad: 17, nombre: 'Ivan', plan: 'Premium' },
    { edad: 13, nombre: 'chanchito', plan: 'free' },
    { edad: 32, nombre: 'Fernanda', plan: 'free' },
    { edad: 25, nombre: 'Felipe', plan: 'gold' },
];

const users = [
    { age: 17, name: 'arthur Morgan', membership: 'Premium' },
    { age: 13, name: 'dutch van der linde', membership: 'free' },
    { age: 32, name: 'Mark', membership: 'free' },
    { age: 25, name: 'Ososiel', membership: 'gold' },
]

const userEspanol = users.map(user => ({
    edad: user.age,
    nombre: user.name,
    plan: user.membership,
}));
console.log(userEspanol);
console.log('-------------------');
