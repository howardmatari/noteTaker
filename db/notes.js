const fs = require("fs");
const util = require("util");

const uuidv1 = require("uuid/v1")
//const fs = require(“fs”)
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Notes {
  read() {
    return readFileAsync("db/db.json", "utf8");
  }

  write(note) {
    return writeFileAsync("db/db.json", JSON.stringify(note));
  }
  getAllNotes(){
      return this.read().then((notes) => {
        var readNotes;

        try {
            readNotes = [].concat(JSON.parse(notes))
        }
        catch (err) {
            readNotes = [];
        }
        return readNotes;
      })

  }
  addNote(note){
      const { title, text } = note;

      if (!title || !text ){
        throw new Error("Note can not be blank")
      }

      const newNote = {
          title,
          text,
          id: uuidv1() 
      }
      console.log(newNote)
      return this.getAllNotes().then((notes) => [...notes, newNote]).then(updatedNotes => this.write(updatedNotes)).then(() => newNote)
  }

  removeNote(id) {
      return this.getAllNotes().then(notes => notes.filter((note) => note.id !== id)).then(filteredNotes => this.write(filteredNotes))
  }
}



const myNote = new Notes();

module.exports = myNote;

