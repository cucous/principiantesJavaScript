function Usuario(name) {
    this.id = Math.random();
    this.name = name;
}


let user = new Usuario('Pepe');
let user2 = new Usuario('Juan');
console.log(user, user2);


