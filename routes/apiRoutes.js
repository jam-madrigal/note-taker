// Establishing a route to the db.json file required for the note data
const notesData = require("../db/db");

// Routing 

module.exports = function(app) {
  // API GET Requests, returning a json file from the db.json file
  app.get("/api/notes", (req, res) => {
    res.json(notesData);
  });

  // API POST Requests


};