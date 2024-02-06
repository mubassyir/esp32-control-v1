const express = require('express');
const app = express();
const port = process.env.PORT|| 3000;

var lamp1Status = "off";
var lamp2Status = "off";
var lamp3Status = "off";
var lamp4Status = "off";


  /*get status*/
app.get('/', (req, res) => {
    res.json({
      lamp1Status:lamp1Status,
      lamp2Status:lamp2Status,
      lamp3Status:lamp3Status,
      lamp4Status:lamp4Status
    })
  });

  /*turn on*/
app.get('/turnOnLamp1',(req,res)=>{
  lamp1Status = "on"
    res.json({lamp1:lamp1Status})
});

app.get('/turnOnLamp2',(req,res)=>{
  lamp2Status = "on"
    res.json({lamp2:lamp2Status})
});

app.get('/turnOnLamp3',(req,res)=>{
  lamp3Status = "on"
    res.json({lamp1:lamp3Status})
});

app.get('/turnOnLamp4',(req,res)=>{
  lamp4Status = "on"
    res.json({lamp1:lamp4Status})
});

  /*turn off*/
app.get('/turnOffLamp1',(req,res)=>{
  lamp1Status = "off"
    res.json({lamp1:lamp1Status})
});
app.get('/turnOffLamp2',(req,res)=>{
  lamp2Status = "off"
    res.json({lamp2:lamp2Status})
});
app.get('/turnOffLamp3',(req,res)=>{
  lamp3Status = "off"
    res.json({lamp3:lamp3Status})
});
app.get('/turnOffLamp4',(req,res)=>{
  lamp4Status = "off"
    res.json({lamp4:lamp4Status})
});


app.listen(port, () => {
  console.log(`cli-nodejs-api listening at http://localhost:${port}`)
});

// Export the Express API
module.exports = app