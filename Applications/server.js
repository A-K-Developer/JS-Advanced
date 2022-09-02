const express = require('express');

const app = express();

const cats = [
        {
          "id": 1,
          "name": "Aleksandra",
          "type": "BojieDete"
        },
        {
          "id": 2,
          "name": "Elena",
          "type": "Kurwa"
        }
      ];

app.get('/',(req,res) => {
    res.json({message: 'Hello World'});
})


app.get('/cats',(req,res) => {
    res.json(cats);
})


app.listen(3500);