var idsNotes = 1
class Note{
    /**
     * Crear nota
     * @param {string} title Título de la nota.
     * @param {string} content Contenido de la nota.
     * @param {array} user Usuarios que pueden ver y editar esa nota (vector de enteros que van a ser los IDs de los
usuarios).
     * @param {string} category Categoría de la nota.
     */
    constructor (title, content, user, category){
        this.id=idsNotes;
        this.title=title;
        this.content=content;
        this.users=[idLogeado];
        this.category=category;
        this.record=[];
        idsNotes++;
    }
    
    //ejercicio 13 CHEQUEAR
    addModification(idLogeado) {
        let modification=new Modification(idLogeado,"2/10/24",this.content, this.title, this.category)
        this.record.push(modification)
    }

    //ejercicio 19 CHEQUEAR
    addUser(id) {
        for (let i = 0; i < this.users.length; i++) {
            if (this.users[i] === id) {
               console.log("Ya está el usuario añadido")
                return;
            }
        } 
        this.users.push(id)
        console.log("Se añadio el usuario")
        }
    
    //ejercicio 20 CHEQUEAR
    deleteUser(id) {
        for (let i = 0; i < this.users.length; i++) {
            if (this.users[i] === id) {
                this.users.splice(i, 1)
                console.log("Ya está el usuario eliminado")
                return;
            }
        } 
        console.log("No se encontró el usuario")
        }

    }
