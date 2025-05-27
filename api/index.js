const express = require('express');
const serverless = require('serverless-http');
const path = require('path');
const fs = require('fs');

const app = express();

app.set('view engine', 'ejs');
// Set views directory relative to this file's location
app.set('views', path.join(__dirname, '../views'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

const hisaabDir = path.join(__dirname, '../hisaab');

app.get('/', (req, res) => {
    fs.readdir(hisaabDir, (err, files) => {
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

app.get('/hisaab/:filename', (req, res) => {
    fs.readFile(path.join(hisaabDir, req.params.filename), 'utf8', (err, filedata) => {
        if (err) return res.status(500).send(err);
        res.render('hisaab', { filedata, filename: req.params.filename });
    });
});

app.get('/delete/:filename', (req, res) => {
    fs.unlink(path.join(hisaabDir, req.params.filename), (err) => {
        if (err) return res.status(500).send(err);
        res.redirect('/');
    });
});

app.get('/edit/:filename', (req, res) => {
    fs.readFile(path.join(hisaabDir, req.params.filename), 'utf8', (err, filedata) => {
        if (err) return res.status(500).send(err);
        res.render("edit", { filedata, filename: req.params.filename });
    });
});

app.post('/update/:filename', (req, res) => {
    fs.writeFile(path.join(hisaabDir, req.params.filename), req.body.content, (err) => {
        if (err) return res.status(500).send(err);
        res.redirect('/');
    });
});

app.post('/createhisaab', (req, res) => {
    var currentDate = new Date();
    var date = `${currentDate.getDate()}-${currentDate.getMonth() + 1}-${currentDate.getFullYear()}`;
    fs.writeFile(path.join(hisaabDir, `${date}.txt`), req.body.content, (err) => {
        if (err) return res.status(500).send(err);
        res.redirect('/');
    });
});

// Don't use app.listen (Vercel handles that)
// Export as serverless handler
module.exports = serverless(app);