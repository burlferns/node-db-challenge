const db = require('../dbConfig');

module.exports = {
  getResources,
  getResource,
  addResource
};

// ************************************************
// getResources
// ************************************************
function getResources() {
  return db.select("*")
    .from("resources");
}


// ************************************************
// getResource
// ************************************************
function getResource(id) {
  return db.select("*")
    .from("resources as r")
    .first()
    .where("r.id", "=", id);
}


// ************************************************
// addResource
// ************************************************
function addResource(res) {
  return db("resources")
  .insert(res)
  .then(([id]) => getResource(id));    
}