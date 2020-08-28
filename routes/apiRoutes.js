// Establishing a route to the db.json file required for the note data, making an array to store respones to write to the db
const reqArray = [];
const fs = require("fs");
const path = require("path");
const notesData = require(path.join(__dirname, '../db/db.json'));

// Handling what to do when receiving API requests
module.exports = function(app) {
  // API GET Requests, returning a json file from the db.json file
  app.get("/api/notes", (req, res) => {
    res.json(notesData);
  });

  // API POST Requests
  app.post("/api/notes", function(req, res) {
    console.log(req.body);
    // If there is any data in newNote in the handleNoteSave function, push it into the request array, then write to db.json
      const note = req.body;
      // Clearing the array, then pushing the existing notes first so they are included in the new writeFile output and not deleted
      reqArray.push(notesData);
      reqArray.push(note);
      // Assigning an id to each object in the array, incrementally based on their index
      reqArray.forEach((arrayNote, index) => {
        arrayNote.id = index;
      });

      // Writing the file
      fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: reqArray }, null, 2)
    );
      // Returning the new note to the client
      res.json(note);
    }
  );
};

// Create an app.delete, each note should have a unique url and this function will loop through the information from db.json to find the corresponding note for that url/id, remove it, then rewrite the db.json file