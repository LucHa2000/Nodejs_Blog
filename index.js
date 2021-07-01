const express = require('express')//di vao thu uc node modules de nap vao
const app = express()//function 
const port = 3000//run website ở cổng nào

app.get('/', (req, res) => {
  res.send('Hello World!')//tra ve 
})
var a=200;
var b=10;
var c=0;
c=a+b;
app.listen(port, () => {
  console.log(`Example app listening at nhttp://localhost:${port}`)
})