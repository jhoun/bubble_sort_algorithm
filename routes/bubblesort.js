const express = require('express');
const router = express.Router();


router.route('/')
  .post((req, res) => {
    res.redirect('/bubblesort');
  })


module.exports = router;