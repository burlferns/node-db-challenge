const db = require('../dbConfig');
const mappers = require('./mappers');

module.exports = {
  getProjects,
  getProject,
  addProject
};

// ************************************************
// getProjects
// ************************************************
function getProjects() {
  return db.select("*")
    .from("projects")
    .then(prjs=>{
      // console.log("in getProjects helper",prjs);
      return prjs.map(elem=>mappers.actionToBody(elem));
    });
}


// ************************************************
// getProject
// ************************************************
function getProject(id) {
  return db.select("*")
    .from("projects as p")
    .first()
    .where("p.id", "=", id)
    .then(prj=>{
      if (prj) {
        return mappers.actionToBody(prj);
      } else {
        return prj;
      }
    });
}


// ************************************************
// addProject
// ************************************************
function addProject(prj) {
  return db("projects")
  .insert(prj)
  .then(([id]) => getProject(id));    
}




