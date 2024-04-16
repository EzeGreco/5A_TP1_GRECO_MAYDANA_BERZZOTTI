var idsUsers=1
class User {
    /**
     * Crear usuario
     * @param {string} username Nombre de usuario.
     * @param {string} password Contraseña.
     */
    constructor(username, password) {
        this.id = idsUsers;
        this.username = username;
        this.password = password;
        idsUsers++;
    }
}