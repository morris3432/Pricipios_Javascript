const usuarios = [
    {id: 1, nombre: 'Juan', id_prof: 1},
    {id: 2, nombre: 'Luis', id_prof: 1},
    {id: 3, nombre: 'Ana', id_prof: 2}
];

const prof = {
    1: 'programador',
    2: 'diseñador'
};

function getUsuarios() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(usuarios);
        }, 200);
    });
}

function getUsuario(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const usuario = usuarios.find((usuario) => usuario.id === id);
            if (usuario) {
                resolve(usuario);
            } else {
                reject(new Error('Usuario no encontrado'));
            }
        }, 200);
    });
}

function getProf(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const profesion = prof[id];
            if (profesion) {
                resolve(profesion);
            } else {
                reject(new Error('Profesión no encontrada'));
            }
        }, 200);
    });
}

// promises
getUsuario(1)
    .then((usuario) => {
        console.log(usuario);
        return getProf(1); // Retorna la siguiente promesa para encadenar
    })
    .then((prof) => {
        console.log(prof);
    })
    .catch((error) => {
        console.error(error.message);
    });
