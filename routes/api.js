const router=require("express").Router();
const notes = require("../db/notes.js");

router.get("/api/notes", (req, res) => {
    notes.getAllNotes().then((notes) => res.json(notes)).catch(err => res.status(500).json(err))
})
router.post("/api/notes",(req, res)=>{
    notes.addNote(req.body).then((note) => res.json(note)).catch(err => res.status(500).json(err))
})
router.delete("/api/notes/:id", (req, res)=> {
    notes.removeNote(req.params.id).then(() => res.json({ ok: true})).catch(err => res.status(500).json(err))

})

module.exports=router;
