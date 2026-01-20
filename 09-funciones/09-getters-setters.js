const usuario = {
    nombre: 'Juan',
    apellido: 'Feliz',
    get nombreCompleto(){
        return `${usuario.nombre} ${usuario.apellido}`;
    },
    set nombreCompleto(valor){
        const [nombre, apellido] = valor.split(' ');
        this .nombre = nombre;
        this.apellido = apellido;
    }
};
usuario.nombreCompleto = 'Hola mundo';
console.log(usuario.nombreCompleto);
