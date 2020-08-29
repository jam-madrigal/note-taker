// Establishing a route to the db.json file required for the note data, making an array to store respones to write to the db
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
    // If there is any data in newNote in the handleNoteSave function, push it into the request array, then write to db.json
      const note = req.body;
      // Assigning the notes a random id from 1-1000 and pushing it to the db.json
      note.id = Math.ceil(Math.random() * 1000);
      notesData.push(note);
      // return the current note, find out why this is not working and rendering notes on the page
      res.json(note);

      // Writing the file
      fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notesData), null, 2)

    }
  );
};

// Create an app.delete, each note should have a unique url and this function will loop through the information from db.json to find the corresponding note for that url/id, remove it, then rewrite the db.json file