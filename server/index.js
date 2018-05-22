const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const list = require('../database/list.js');
const mockData = require('./mockData.js');

const app = express();
const PORT = 3015;
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', express.static(`${__dirname}/../client/dist`));


app.post('/', (req, res) => {
  const data = req.body;
  console.log(data);
  list.create(data, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log("data saved");
      }});
});

// search Functionality in header
app.get('/:searchValue', (req, res) => {
  
});


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

// const fs = require('fs');
// const requestImg = require('request').defaults({ encoding: null });
// const url = require('url');

// script for saving 1000 images locally
// var j =1;
// list.find(function(err, data){
//    if (err){
//     console.log(err);
//    } else{

//        data.map(function(restaurant){

//            restaurant.photos.map(function(photo){
//              //photo_reference = photo.photo_reference;
//              requestImg.get
//                 ("https://maps.googleapis.com/maps/api/place/photo?maxwidth=1000&photoreference="+photo.photo_reference+"&key=AIzaSyD7olNRQRLF6mNFwI0dyEyECWNqF8xXNZQ", function(error, response, body){
//          if (error){
//            console.log(error)

//          }else{
//          console.log("writeFile---" + photo.photo_reference);
//            fs.writeFile(__dirname+'/n/'+
// photo.photo_reference+'.png', body, function(){console.log(j++)} );
//          }
//           })
//          })

//        })
//   }

// })

// res.end();

