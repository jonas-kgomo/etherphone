const express = require('express')

const app = express()
const path    = require("path");

const port = process.env.PORT || 8080

//app.get('/', (request, response) => {
//  response.send('Hello Express')})
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/visual.html'));
});

app.listen(port, () => {
  console.log(`Hello Express listening on port ${port}`)
})










