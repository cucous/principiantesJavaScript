function Usuario() {
    let id = 1;
    this.name = 'Jeke';


    let log = function () {
        console.log("log...");
    }


    this.guardar = function () {
        log();
        console.log('Guardando...');
    }
}

const usuario = new Usuario();
usuario.guardar();