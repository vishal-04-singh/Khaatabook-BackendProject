const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'public')));
app.get('/', (req, res) => {
  res.render("index");
}
);  
app.get('/hisaab', (req, res) => {
  res.render("hisaab");
}
); 
app.get('/create', (req, res) => {
  res.render("create");
}
); 
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
}
);