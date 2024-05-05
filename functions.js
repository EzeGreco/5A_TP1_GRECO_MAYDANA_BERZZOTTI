let idLogeado=0

//ejercicio 4 HECHO
const users = [
    new User("", ""),
    new User("john_doe", "password123"),
    new User("jane_smith", "abc123"),
    new User("bob_jackson", "securePass")
];
//linkLogin()

//ejercicio 5 HECHO
const notes = [
    new Note("Note 1", "Content of note 1", [users[0].id], "Work"),
    new Note("Note 2", "Content of note 2", [users[1].id], "Personal"),
    new Note("Note 3", "Content of note 3", [users[2].id], "Study")
];

/*//Cargar notas del storage, tomar las de ejemplo si no hay nada en el vector local
const notes = loadNotes()
*/

//ejercicio 6 HECHO
function checkUser(user, password){
    let i=0
    while(i<users.length){
        if (user == users[i].username && password == users[i].password){
            return  users[i].id
        }

        if(user == users[i].username && password != users[i].password){
            return  0  
        }
        i++
    }
    return  -1
}
//ejercicio 7 HECHO

function linkLogin(){
    let user=getUser()
    let password=getPassword()
    let id=checkUser(user, password)
    if (id>0){
        changeScreen()
        idLogeado=id
    }
    else if (id == 0){
        alert("hay un inconveniente!, contraseña errónea")
    }
    else if (id == -1){
        alert("hay un inconveniente!, usuario inexistente")
    }
}

//ejercicio 8 HECHO
function registUser(user, password){
    let i=0
    if (checkUser(user, password)==-1){
        users.push(new User(user,password))
        return  true
    } else{
        return false
    }

    
}

//ejercicio 9 HECHO 
function linkRegist(){
    let user=getUser()
    let password=getPassword()
    if (registUser(user, password)){
        linkLogin()
    }else{
        alert("Error, el usuario no es válido")
    }
}

//ejercicio 10 HECHO
function addNote(title, content, category){
    if (title=="" || content=="" || category==""){
        return -1
    }else {
        notes.push(new Note(title, content, [idLogeado], category))
        saveNotes(notes)
        return notes.length
    }
}

//ejercicio 11 HECHO
function linkAddNote(){
    title=getNoteTitle()
    content=getNoteContent()
    category=getNoteCategory()
    idNote=addNote(title, content, category)
    drawNewNote(title, content, category, idNote)
}

//ejercicio 12 HECHO
function searchNote(){
    idNotes = getSearchID()
    console.log(notes[idNotes-1])

}

//ejercicio 14 CHEQUEAR
function modifyContent(idNote, content, category, title){
    for (let i = 0; i < notes.length; i++) {
        console.log(notes[i])
        if (notes[i].id === idNote) {
            notes[i].addModification(idLogeado)
            notes[i].content=content
            notes[i].title=title
            notes[i].category=category
            return notes[i].id;
        }

        return -1
    }
}

//ejercicio 15 CHEQUEAR
function modifyForId(){
    let id=getSearchID()
    let title=getNoteTitle()
    let content=getNoteContent()
    let category=getNoteCategory()
    modifyContent(id, content, category, title)
    modifyNoteUI(title, content, category, id)
}


//ejercicio 16 CHEQUEAR
function deleteNote(idNote){
    for (let i = 0; i < notes.length; i++) {
        console.log(notes[i])
        if (notes[i].id === idNote) {
            notes[i].delete
            saveNotes(notes)
            return notes[i].id;
        }
        return -1
    }
}

//ejercicio 17 CHEQUEAR
function deleteForId(){
    let id=getSearchID()
    deleteNote(id)
    eraseNoteUI(id)
}

//ejercicio 18 CHEQUEAR
function searchNotaForText(){
    // Verificar que el texto tenga al menos 4 caracteres
    let text = getSearchContent()
    if (text.length < 4) {
        console.log("El texto debe tener al menos 4 caracteres.");
        return;
    }
    // Recorrer todas las notas
    for (let i = 0; i < notes.length; i++) {
        // Verificar si el contenido de la nota incluye el texto ingresado (ignorando mayúsculas y minúsculas)
        if (notes[i].content.toLowerCase().includes(text.toLowerCase())) {
            console.log(notes[i]);
        }
    }
    return
}

//ejercicio 21 CHEQUEAR
notes[0].addUser(325);
notes[0].addUser(25);
notes[0].deleteUser(25);
notes[1].addUser(325);
notes[1].addUser(25);
notes[1].deleteUser(325);
notes[2].addUser(325);
notes[2].addUser(25);
notes[2].deleteUser(325);


//ejercicio 22 CHEQUEAR
function saveNotes(notes) {
    // Convertir el array de notas a una cadena JSON
    const notesJSON = JSON.stringify(notes);
    // Guardar la cadena JSON en el localStorage bajo una clave específica
    localStorage.setItem('notes', notesJSON);
    console.log(notes)
}

function loadNotes() { 
    const notesJSON = localStorage.getItem('notes');
    // Si la cadena JSON no es nula, convertirla de nuevo a un array de notas y devolverlo
    if (notesJSON != null) {
        let notesTemp = JSON.parse(notesJSON);
        console.log(notesTemp);
        return notesTemp;
    } else {
      // Si la cadena JSON es nula, devolver un array vacío
      return [];
    }
}


/*
console.log(notes)
console.log(users)
console.log (checkUser("jon_doe", "password123", users))
console.log (checkUser("john_doe", "pass123", users))
console.log (checkUser("john_doe", "password123", users))
console.log (checkUser("jane_smith", "abc123", users))
console.log (checkUser("bob_jackson", "securePass", users))
*/