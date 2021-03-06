const router=require("express").Router();
const notes = require("../db/notes.js");

router.get("/notes",(req, res) => {
    notes.getAllNotes().then((notes) => res.json(notes)).catch(err => res.status(500).json(err))
    // console.log(getAllNotes);
})
router.post("/notes",(req, res)=>{
    notes.addNote(req.body).then((note) => res.json(note)).catch(err => res.status(500).json(err))
})
router.delete("/notes/:id", (req, res)=> {
    notes.removeNote(req.params.id).then(() => res.json({ ok: true})).catch(err => res.status(500).json(err))

})

module.exports=router;
