// Import Express and external middleware
const express = require('express');

// Import Express middleware
const router = express.Router();

// Import database access
const tdb = require('../data/helpers/taskModel');

//Import custom middleware
// None at this time

// ********************************************************
// POST /tsks
// ********************************************************
router.post('/', (req, res) => {
  tdb.addTask(req.body)
    .then(tsk=>{
      // console.log("In POST /tsks",tsk);
      res.status(200).json(tsk);
    })
    .catch(err=>{
      console.log("Error in pdb.addProject in POST /projs");
      res.status(500)
        .json({error: "Could not add new project to database."});
    })
});


// ********************************************************
// GET /tsks/:id
// ********************************************************
router.get('/:id', (req, res) => {
  tdb.getTask(req.params.id)
    .then(tsk=>{
      // console.log("In GET /tsk/:id",tsk);
      if(tsk) {
        res.status(200).json(tsk);
      } 
      else {
        res.status(400).json({ message: "invalid task id" });
      }
    })
    .catch(err=>{
      console.log("Error in tdb.getTask in GET /tsks/:id");
      res.status(500)
        .json({error: "Could not get task from database."});
    })
});


// ********************************************************
// GET /tsks
// ********************************************************
router.get('/', (req, res) => {
  tdb.getTasks()
    .then(tsks=>{
      // console.log("In GET /tsks",tsks);
      res.status(200).json(tsks);
    })
    .catch(err=>{
      console.log("Error in tdb.getTasks in GET /tsks");
      res.status(500)
        .json({error: "Could not get tasks from database."});
    })
});

// ********************************************************
// ********************************************************
module.exports = router;