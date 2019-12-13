const db = require('../dbConfig');
const mappers = require('./mappers');

module.exports = {
  getTasks,
  getTask,
  addTask
};


// ************************************************
// getTasks
// ************************************************
function getTasks() {
  return db.select("t.id as taskId"
    , "t.description as task_description"
    , "t.notes as task_notes"
    , "t.completed as task_completed"
    , "t.project_id as project_id"
    , "p.name as project_name"
    , "p.description as project_description")
    .from("tasks as t")
    .join("projects as p", "p.id ", "t.project_id")
    .then(tsks=>{
      // console.log("in getTasks helper",tsks);
      return tsks.map(elem=>mappers.actionToBodyTask(elem));
    });
}

// ************************************************
// getTask
// ************************************************
function getTask(id) {
  return db.select("t.id as taskId"
    , "t.description as task_description"
    , "t.notes as task_notes"
    , "t.completed as task_completed"
    , "t.project_id as project_id"
    , "p.name as project_name"
    , "p.description as project_description")
    .from("tasks as t")
    .join("projects as p", "p.id ", "t.project_id")
    .first()
    .where("t.id", "=", id)
    .then(tsk=>{
      if (tsk) {
        return mappers.actionToBodyTask(tsk);
      } else {
        return tsk;
      }
    });
}


// ************************************************
// getTask_noPrjData
// ************************************************
function getTask_noPrjData(id) {
  return db.select("*")
    .from("tasks as t")
    .first()
    .where("t.id", "=", id)
    .then(tsk=>{
      if (tsk) {
        return mappers.actionToBody(tsk);
      } else {
        return tsk;
      }
    });
}


// ************************************************
// addTask
// ************************************************
function addTask(tsk) {
  return db("tasks")
  .insert(tsk)
  .then(([id]) => getTask_noPrjData(id));    
}
