var idsModifications=1
class Modification {
    /**
     * Crear modificación
     * @param {integer} userId ID del usuario que realizó la modificación.
     * @param {string} date Fecha del cambio.
     * @param {string} previousContent Contenido de la nota antes de ser modificada.
     * @param {string} previousTitle Título de la nota antes de ser modificada.
     * @param {string} previousCategory Categoría de la nota antes de ser modificada.
     */
    constructor(userId, date, previousContent, previousTitle, previousCategory) {
        this.id = idsModifications;
        this.userId = userId;
        this.date = date;
        this.previousContent = previousContent;
        this.previousTitle = previousTitle;
        this.previousCategory = previousCategory;
        idsModifications++;
    }
}