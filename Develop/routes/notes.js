const express = require('express');
const router = express.Router();
const { readFile, writeFile } = require('../helpers/fsUtils');
const generateUUID = require('../helpers/uuid');
  
  router.post('/', (req, res) => {
    const { title, content } = req.body;
    const newNote = { title, content, id: generateUUID() };
  
    readFile('notes.json', (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).send('Server error');
        return;
      }
  
      const notes = data || [];
      notes.push(newNote);
  
      writeFile('notes.json', notes, (err) => {
        if (err) {
          console.error(err);
          res.status(500).send('Server error');
          return;
        }
  
        res.send('Note saved successfully');
      });
    });
  });
  
  router.get('/:id', (req, res) => {
    const noteId = req.params.id;
  
    readFile('notes.json', (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).send('Server error');
        return;
      }
  
      const notes = data || [];
      const note = notes.find((note) => note.id === noteId);
  
      if (!note) {
        res.status(404).send('Note not found');
        return;
      }
  
      res.json(note);
    });
  });

  module.exports = router;