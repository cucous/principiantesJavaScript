function createUser(name) {

    return {
        id: Math.random(),
        name: name
    }
}

let user1 = createUser('Ivan');
let user2 = createUser('jeke');

console.log(user1, user2);