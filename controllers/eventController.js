const db = require("../models");
var https = require("https");

var options = {
  host:
    "https://maps.googleapis.com/maps/api/place/textsearch/xml?query=Restaraunts+in+Atlanta&key=AIzaSyD519JsWvzqzkpHvyBeXcwiAAg6wyXtu2U"
};

// Defining methods for the eventController
module.exports = {
  findEventById: function(req, res) {
    db.Event.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  createEvent: function() {
    var req = https.get(
      "https://maps.googleapis.com/maps/api/place/textsearch/json?query=Restaraunts+in+Atlanta&key=AIzaSyD519JsWvzqzkpHvyBeXcwiAAg6wyXtu2U",
      function(res) {
        console.log("STATUS: " + res.statusCode);
        // console.log("HEADERS: " + JSON.stringify(res.headers));

        let bodyChunks = [];
        res
          .on("data", function(chunk) {
            // You can process streamed parts here...
            bodyChunks.push(chunk);
          })
          .on("end", function() {
            console.log(JSON.stringify(Buffer.concat(bodyChunks).toString("utf8")));
            return JSON.stringify(Buffer.concat(bodyChunks).toString("utf8"));
          })
          .on("error", function(e) {
            console.log("ERROR: " + e.message);
          });
      }
    );
  },
  saveEvent: function(req, res) {
    db.Event.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  deleteEvent: function(req, res) {
    db.Event.findOneAndDelete({ _id: req.params.id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
