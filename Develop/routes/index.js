const express = require('express');
const router = express.Router();

const notesRoutes = require('./notes');

router.get('/', (req, res) => {
    res.send('Welcome to the Note Taker!');
  });

router.use('/notes', notesRoutes);

module.exports = router;