var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/api/city", (req,res,next)=>{
  req.db
  .from("city")
  .limit(50)
  .select("name","district")
  .orderBy("name")
  .then((rows)=>{
    res.json({Error: false, Message: "Success", City: rows});
  })
  .catch((err)=>{
    console.log(err);
    res.json({Error: true, Message: "Error in MySql query"});
  });
});

router.get("/api/city/:countryCode", (req,res,next)=>{
  req.db
  .from("city")
  .select("*")
  .where("countryCode","=",req.params.countryCode)
  .then((rows)=>{
    res.json({Error: false, Message: "Success", City: rows });
  })
  .catch((err)=>{
    console.log(err);
    res.json({Error: true, Message: "Error in MySql query"})
  });
});

router.post('/api/update', (req, res) => {
  if (!req.body.City || !req.body.CountryCode || !req.body.Pop) {
    res.status(400).json({ message: `Error updating population` });
    console.log(`Error on request body:`, JSON.stringify(req.body));

  } else { 
    req.db('city').where("Name","=",req.body.City).update("Population",req.body.Pop)
      .then(_ => {
       res.status(201).json({ message: `Successful update ${req.body.City}`});
       console.log(`successful population update:`, JSON.stringify(req.body.Pop));
    }).catch(error => {
       res.status(500).json({ message: 'Database error - not updated' });
    })
  } 

});

module.exports = router;