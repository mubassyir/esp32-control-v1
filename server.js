const express = require('express');
const app = express();
const port = 3000;

var led1Status = "off";

  /*get status*/
app.get('/led1Status', (req, res) => {
    res.json({message:led1Status})
  });

  /*turn on*/
app.get('/turnOnled1',(req,res)=>{
    led1Status = "on"
    res.json({led1:led1Status})
});

  /*turn off*/
app.get('/turnOffled1',(req,res)=>{
    led1Status = "off"
    res.json({led1:led1Status})
});

app.listen(port, () => {
  console.log(`cli-nodejs-api listening at http://localhost:${port}`)
});