const usuarios = [
    {id: 1, nombre: 'Juan', id_prof: 1},
    {id: 2, nombre: 'Luis', id_prof: 1},
    {id: 3, nombre: 'Ana', id_prof: 2}
];

const prof = {
    1: 'programador',
    2: 'diseñador'
};

function getUsuarios(callback) {
    setTimeout(() => {
        callback(null, usuarios);
    }, 200);
}

function getUsuario(id, callback) {
    setTimeout(() => {
        const usuario = usuarios.find((usuario) => usuario.id === id);
        callback(null, usuario);
    }, 200);
}

function getProf(id, callback) {
    setTimeout(() => {
        const profesion = prof[id];
        callback(null, profesion);
    }, 200);
}

// Ejemplo de uso:
const usuarioId = 3; // O cualquier otro ID que desees buscar

getUsuario(usuarioId, (err, usuario) => {
    if (err) return console.error(err);
    if (!usuario) return console.log("Usuario no encontrado");

    const prof_id = usuario.id_prof;

    getProf(prof_id, (err, profesion) => {
        if (err) return console.error(err);
        console.log("La profesión es " + profesion);
    });
});
