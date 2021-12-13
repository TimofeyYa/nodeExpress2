const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

const PORT = process.env.PORT || 3000;

const app = express();
const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs'
})

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'pages');



app.get('/', (req,res)=>{
    res.render('index');
})

app.listen(PORT, ()=>{
  console.log(`Server is running on ${PORT} port`)  
})