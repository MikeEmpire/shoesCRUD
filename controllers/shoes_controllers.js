var express = require('express');
var router = express.Router();
var db = require('../models/');

// get route -> index
router.get("/", function(req, res) {
  res.redirect("/shoes");
});

router.get('/shoes', function(req, res) {
  db.Shoe.findAll()
  .then(function(dbShoes){
    var hbs = { shoe_name: dbShoes };
    console.log('get all method: ');
    return res.render("index", hbs);
  });
});

router.post('/shoes/create', function(req, res) {
  db.Shoe.create({
    shoe_name:
    req.body.shoe_name
  })
  .then(function(dbShoes) {
    console.log(dbShoes)
    res.redirect('/');
  })
})

router.put('/shoes/update', function(req, res) {
  db.Shoe.update({
    copped: true
  },
    {
      where: {
        id: req.body.id
      }
    }
  ).then(function(dbShoe) {
    res.redirect('/');
  });
});

module.exports = router;
