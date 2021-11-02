const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
    // console.log("Your notes...")
    return "Your notes..."

}

const addNote = (title, body) => {
    const notes = loadNotes();
    // const duplicateNotes = notes.filter((note) => note.title === title);
    const duplicateNote = notes.find((note) => note.title === title)

    if(!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
    
        saveNotes(notes)
    } else {
        console.log("Error " + title + " is already a note!!")
    }
}


const removeNote = (title) =>{
    const notes = loadNotes();
    const notesToKeep = notes.filter((note) => note.title !== title ); 
    if (notesToKeep.length < notes.length) {
        console.log(chalk.green('Note ' + title + " removed"))
    } else {
        console.log(chalk.red("No note found!"))
    }
    saveNotes(notesToKeep)

}

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.inverse.white("Your Notes"));
    console.log(notes)
}

const readNote = (title) => {
    const notes = loadNotes();
    const targetNote = notes.find((note) => note.title ===title);

    // console.log(targetNote);
    if (targetNote){
        console.log(chalk.bold(targetNote.title));
        console.log(targetNote.body)
    } else {
        console.log(chalk.red("Sorry we can't find that note..."))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON)
    console.log('Note saved!')

}

const loadNotes = () => {
try {
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON);

} catch(e) {
    return []

}

}



module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
};