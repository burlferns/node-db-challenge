// Import Express and external middleware
const express = require('express');

// Import Express middleware
const router = express.Router();

// Import database access
const rdb = require('../data/helpers/resourceModel');

//Import custom middleware
// None at this time


// ********************************************************
// POST /res
// ********************************************************
router.post('/', (req, res) => {
  rdb.addResource(req.body)
    .then(resrc=>{
      // console.log("In POST /res",resrc);
      res.status(200).json(resrc);
    })
    .catch(err=>{
      console.log("Error in rdb.addResource in POST /res");
      res.status(500)
        .json({error: "Could not add new resource to database."});
    })
});


// ********************************************************
// GET /res/:id
// ********************************************************
router.get('/:id', (req, res) => {
  rdb.getResource(req.params.id)
    .then(resrc=>{
      // console.log("In GET /res/:id",resrc);
      if(resrc) {
        res.status(200).json(resrc);
      } 
      else {
        res.status(400).json({ message: "invalid resource id" });
      }
    })
    .catch(err=>{
      console.log("Error in rdb.getResource in GET /res/:id");
      res.status(500)
        .json({error: "Could not get resource from database."});
    })
});


// ********************************************************
// GET /res
// ********************************************************
router.get('/', (req, res) => {
  rdb.getResources()
    .then(resrcs=>{
      // console.log("In GET /res",resrcs);
      res.status(200).json(resrcs);
    })
    .catch(err=>{
      console.log("Error in rdb.getResources in GET /res");
      res.status(500)
        .json({error: "Could not get resources from database."});
    })
});


// ********************************************************
// ********************************************************
module.exports = router;