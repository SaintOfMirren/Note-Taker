const express = require('express');
const router = express.Router();

const notesRoutes = require('./notes');

router.get('/', (req, res) => {
    res.send('Welcome to the Note Taker!');
    console.log("blah");
  });

router.use('/notes', notesRoutes);

module.exports = router;