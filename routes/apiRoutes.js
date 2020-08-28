// Establishing a route to the db.json file required for the note data
const notesData = require("../db/db");
const fs = require('fs'); 

// Handling what to do when receiving API requests
module.exports = function(app) {
  // API GET Requests, returning a json file from the db.json file
  app.get("/api/notes", (req, res) => {
    res.json(notesData);
  });

  // API POST Requests
  app.post("/api/notes", function(req, res) {
    console.log(req);
    // If there is any data in newNote in the handleNoteSave function, push it to the db files
    if (req.body.length > 0) {

};