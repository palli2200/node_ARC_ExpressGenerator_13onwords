var express = require('express');
var router = express.Router();

var mongoose = require("mongoose")  //step:-1
// step :-2 is cratining proparties.js file 
var dburl = require("../proparties").DB_URL  // step :-3

mongoose.connect(dburl) //step:4 

mongoose.connection.on("connected", ()=>{
  console.log("Connected to mongoDB using MongooseJS")
})                                                        //step:-5

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express learning palli', subtitle:'welcome to best learners' });
});

router.get('/angular', function(req, res, next) {
  res.render('index', { title: 'ARC - Angular', subtitle:"welcome to Angular developer"});
});

router.get('/tutorials', function(req, res, next) {
  var courseName = req.query.course;
  let courseTitle = 'ARC Tutorials ' + courseName
  res.render('index', { title: courseTitle, subtitle:"welcome to "+courseName + " developer"});
});

module.exports = router;
