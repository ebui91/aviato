const express= require('express');
const {json}= require('body-parser');
const cors = require('cors')

const fc= require('./controllers/controller');
const config= require('./config.js');
const axios= require('axios');


const app= express();
const port= 3000;

app.use(json());
app.use(express.static(__dirname+'../public/'));

// var allowCrossDomain = function(req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
//     res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
//     // intercept OPTIONS method
//     if ('OPTIONS' == req.method) {
//       res.sendStatus(200);
//     }
//     else {
//       next();
//     }
// };

// app.use(allowCrossDomain);
app.use(cors())

app.post('/api/flights', (req,res)=>{
  //logic manipulation goes here
  console.log(req.body);
  //request body
  const configObj={
    "request":{
      "passengers":{
        "adultCount": 1
      },
      "slice": [
        {
          "origin": "",
          "destination": "",
          "date": ""
        },
        {
          "origin": "",
          "destination": "",
          "date": ""
        }
      ],
      "solutions": 20
    }
  }
    configObj.request.passengers.adultCount= req.body.passengers;
    configObj.request.slice[0].origin= req.body.origin;
    configObj.request.slice[0].destination= req.body.destination;
    configObj.request.slice[0].date= req.body.date1;
    configObj.request.slice[1].origin= req.body.destination;
    configObj.request.slice[1].destination= req.body.origin;
    configObj.request.slice[1].date= req.body.date2;

    // console.log(configObj)
    //return object back to React
    axios.post(`https://www.googleapis.com/qpxExpress/v1/trips/search?key=${config.key}`, configObj)
    .then(response=>{
      // console.log(response.data);
      return res.json(response.data)
      // response.status(200).json(response.data);
    }).catch(err=>console.log(err));
})


app.listen(port, ()=>{
  console.log(`We live baby! on port: ${port}`);
})
