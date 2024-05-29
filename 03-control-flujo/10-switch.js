const accion = 'listar';

switch (accion) {
    case 'listar':
        console.log('Listando elementos');
        break;
    case 'Guardar':
        console.log('Guardando elementos');
        break;
    default:
        console.log('Acción no soportada');
        break;
}