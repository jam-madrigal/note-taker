// Dependencies
const http = require("http");
const fs = require("fs");
const path = require("path");
const express = require("express");

const PORT = 8080;

const server = http.createServer(handleRequest);

function handleRequest(req, res) {
  var path = req.url;

  switch (path) {
  case "/notes":
    return renderNotesPage(req, res);
  default:
    return renderHomePage(req, res);
  }
}

function renderNotesPage(req, res) {

    const notesPath = path.join(__dirname, "../../notes.html");

    fs.readFile(notesPath, function(err, data) {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/html" });
        res.end("<html><head><title>Oops</title></head><body><h1>Oops, there was an error</h1></html>");
      }
      else {
        // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
        // an html file.
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    });
  }

function renderHomePage(req, res) {
    const homePath = path.join(__dirname "../../index.html");

    fs.readFile(homePath, function(err, data) {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/html" });
        res.end("<html><head><title>Oops</title></head><body><h1>Oops, there was an error</h1></html>");
      }
      else {
        // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
        // an html file.
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    });
}

server.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});
  