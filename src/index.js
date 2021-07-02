
const express = require('express');//di vao thu uc node modules de nap vao
const app = express();//function 
var handlebars = require('express-handlebars');
const port = 3000;//run website ở cổng nào
const morgan= require('morgan');
const path= require('path');//path thay doi duong den den home


//Http logger
app.use(morgan('combined'));
//link logo
app.use(express.static(path.join(__dirname,'public')));
//template engine
app.engine('hbs', handlebars({
  extname: '.hbs'//duoi sau file

}));//d/n handlebars
app.set('view engine', 'hbs');//set view engine
app.set('views',path.join(__dirname,'resources/views'));//

app.get('/', (req, res) => {
  res.render('home');
})
app.get('/news', (req, res) => {
  res.render('news');
})

app.listen(port, () => {
  console.log(`Example app listening at nhttp://localhost:${port}`)
})