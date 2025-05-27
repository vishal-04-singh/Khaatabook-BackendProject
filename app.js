const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'public')));
  
app.get('/', (req, res) => {
    fs.readdir('./hisaab', (err, files) => {
        if (err) return res.status(500).send(err);

        if (!files || files.length === 0) {
            return res.redirect('/create');
        }

        res.render('index', { files: files });
    });
});
app.get('/create', (req, res) => {
    res.render('create');
});

app.post('/createhisaab', (req, res) => {
    
    var currentDate = new Date();
    var date = `${currentDate.getDate()}-${currentDate.getMonth() + 1}-${currentDate.getFullYear()}`;
    fs.writeFile(`./hisaab/${date}.txt`, req.body.content, (err) => {
        if (err) return res.status(500).send(err);
        res.redirect('/');
});
});
app.listen(3000);