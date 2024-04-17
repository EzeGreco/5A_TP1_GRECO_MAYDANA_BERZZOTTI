let idLogeado=0
//ejercicio 4 LISTO
const users = [
    new User("", ""),
    new User("john_doe", "password123"),
    new User("jane_smith", "abc123"),
    new User("bob_jackson", "securePass")
];
linkLogin()

//ejercicio 5 LISTO
const notes = [
    new Note("Note 1", "Content of note 1", [users[0].id], "Work"),
    new Note("Note 2", "Content of note 2", [users[1].id], "Personal"),
    new Note("Note 3", "Content of note 3", [users[2].id], "Study")
];

//ejercicio 6 CHEQUEAR
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
//ejercicio 7 CHEQUEAR

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

//ejercicio 8 CHEQUEAR
function registUser(user, password){
    let i=0
    if (checkUser(user, password)==-1){
        users.push(new User(user,password))
        return  true
    } else{
        return false
    }

    
}

//ejercicio 9 CHEQUEAR 
function linkRegist(){
    let user=getUser()
    let password=getPassword()
    if (registUser(user, password)){
        linkLogin()
    }else{
        alert("Error, el usuario no es válido")
    }
}

//ejercicio 10 CHEQUEAR
function addNote(title, content, category){
    if (title=="" || content=="" || category==""){
        return -1
    }else {
        notes.push(new Note(title, content, [idLogeado], category))
        return notes.length
    }
}

//ejercicio 11 CHEQUEAR
function linkAddNote(){
    title=getNoteTitle()
    content=getNoteContent()
    category=getNoteCategory()
    id_note=addNote(title, content, category)
    drawNewNote(title, content, category, id_note)
}

//ejercicio 12 CHEQUEAR
function searchNote(){
    idNotes = getSearchID()
    console.log(notes[idNotes-1])

}


// ejercicio 13
//Implementar un método en la clase “Note” para sumar al historial de modificaciones un nuevo
// cambio en la nota, instanciando el objeto realizado en el ejercicio 3.


/*
console.log(notes)
console.log(users)
console.log (checkUser("jon_doe", "password123", users))
console.log (checkUser("john_doe", "pass123", users))
console.log (checkUser("john_doe", "password123", users))
console.log (checkUser("jane_smith", "abc123", users))
console.log (checkUser("bob_jackson", "securePass", users))
*/