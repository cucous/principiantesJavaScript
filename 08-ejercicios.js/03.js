const usuarios = [
    { edad: 17, nombre: 'Ivan', plan: 'Premium' },
    { edad: 17, nombre: 'Juan', plan: 'Free' },
    { edad: 17, nombre: 'Paty', plan: 'Free' },
    { edad: 17, nombre: 'Said', plan: 'Gold' },
];


function getPaidUsers(usrs) {

    return usrs.filter(u => u.plan !== 'Free');
};

console.log(getPaidUsers(usuarios));
