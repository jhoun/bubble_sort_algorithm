const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const bubblesort = require('./routes/bubblesort');


app.use(bodyParser.urlencoded({
  extended:true
}));


app.use(bodyParser.json())

app.use(bodyParser.json({ type: 'application/*+json' }))

app.use('/bubblesort', bubblesort);

if(!module.parent){
    app.listen(8080, () => {
    console.log('Server started on port 8080');
  });
}

module.exports = app;