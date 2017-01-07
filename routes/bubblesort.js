const express = require('express');
const router = express.Router();
const bubbleSort = require('../modules/bubble_sort_logic');


router.route('/')
  .post((req, res) => {
    console.log('req.body: ', req.body);
    res.json(bubbleSort(req.body.array));
  })


module.exports = router;