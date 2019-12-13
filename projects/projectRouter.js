// Import Express and external middleware
const express = require('express');

// Import Express middleware
const router = express.Router();

// Import database access
const pdb = require('../data/helpers/projectModel');

//Import custom middleware
// None at this time

// ********************************************************
// POST /projs
// ********************************************************
router.post('/', (req, res) => {
  pdb.addProject(req.body)
    .then(proj=>{
      // console.log("In POST /projs",proj);
      res.status(200).json(proj);
    })
    .catch(err=>{
      console.log("Error in pdb.addProject in POST /projs");
      res.status(500)
        .json({error: "Could not add new project to database."});
    })
});


// ********************************************************
// GET /projs/:id
// ********************************************************
router.get('/:id', (req, res) => {
  pdb.getProject(req.params.id)
    .then(proj=>{
      // console.log("In GET /projs/:id",proj);
      if(proj) {
        res.status(200).json(proj);
      } 
      else {
        res.status(400).json({ message: "invalid project id" });
      }
    })
    .catch(err=>{
      console.log("Error in pdb.getProject in GET /projs/:id");
      res.status(500)
        .json({error: "Could not get project from database."});
    })
});


// ********************************************************
// GET /projs
// ********************************************************
router.get('/', (req, res) => {
  pdb.getProjects()
    .then(projs=>{
      // console.log("In GET /projs",projs);
      res.status(200).json(projs);
    })
    .catch(err=>{
      console.log("Error in pdb.getProjects in GET /projs");
      res.status(500)
        .json({error: "Could not get projects from database."});
    })
});


// ********************************************************
// ********************************************************
module.exports = router;