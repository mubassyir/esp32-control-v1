const express = require('express');
const app = express();
const port = process.env.PORT|| 3000;

var lamp1Status = "off";

  /*get status*/
app.get('/lamp1Status', (req, res) => {
    res.json({message:lamp1Status})
  });

  /*turn on*/
app.get('/turnOnLamp1',(req,res)=>{
  lamp1Status = "on"
    res.json({lamp1:lamp1Status})
});

  /*turn off*/
app.get('/turnOffLamp1',(req,res)=>{
  lamp1Status = "off"
    res.json({lamp1:lamp1Status})
});

app.listen(port, () => {
  console.log(`cli-nodejs-api listening at http://localhost:${port}`)
});