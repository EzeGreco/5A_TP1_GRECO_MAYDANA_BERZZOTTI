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
        this.users=[user];
        this.category=category;
        this.record=[];
        idsNotes++;
    }
}
