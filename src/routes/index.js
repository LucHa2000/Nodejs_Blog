const newsRouter = require('./news');
const siteRouter = require('./site');


function route(app){
  
    //app.get('/', (req, res) => {
        //res.render('home');
      //})
      //app.get('/news', (req, res) => {
        //res.render('news');
      //})
      app.use('/',siteRouter);//home   
      app.use('/news',newsRouter);
      //search 
       app.get('/search',(req,res)=>
       {
          res.render('search');
       })
       //POST
       app.post('/search',(req,res)=>
       {
          res.send('');
       })
}
module.exports = route;
