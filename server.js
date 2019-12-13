// Import Express and external middleware
const express = require('express');
const helmet = require("helmet");

//Import custom middleware
const {defaultResponse, logger} = require('./middleware/custom');


// Import specific Routers
const projectRouter = require("./projects/projectRouter"); 
const resourceRouter = require("./resources/resourceRouter"); 
const taskRouter = require("./tasks/taskRouter"); 

// Create server
const server = express();

// Use global middleware 
server.use(helmet());
server.use(express.json());
server.use(logger);

// Specify general endpoints
server.get('/', (req, res) => {
  res.send(`<h2>This is for node-db-challenge </h2>`);
});

// Use specific Routers
server.use("/projs", projectRouter); 
server.use("/res", resourceRouter); 
server.use("/tsks", taskRouter); 

server.use(defaultResponse);

module.exports = server;