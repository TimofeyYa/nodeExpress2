const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const routers = require('./routes/mainRouter');



const PORT = process.env.PORT || 3000;

const app = express();
const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs'
})

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'pages');

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

app.use('/', routers.home);
app.use('/about', routers.about);
app.use('/add', routers.add)
app.use('/curses', routers.courses);

app.listen(PORT, ()=>{
  console.log(`Server is running on ${PORT} port`)  
})