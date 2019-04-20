const db = require("../models");
var https = require("https");

// Defining methods for the eventController
module.exports = {
  findEventById: function(req, res) {
    db.Event.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  createEvent: function(req, res) {
    var gmapReq = https.get(
      "https://maps.googleapis.com/maps/api/place/textsearch/json?query=Restaraunts+in+Atlanta&key=AIzaSyD519JsWvzqzkpHvyBeXcwiAAg6wyXtu2U",
      function(gmapRes) {
        console.log("STATUS: " + gmapRes.statusCode);
        // console.log("HEADERS: " + JSON.stringify(res.headers));

        let bodyChunks = [];
        gmapRes
          .on("data", function(chunk) {
            // You can process streamed parts here...
            bodyChunks.push(chunk);
          })
          .on("end", function() {
            // console.log(JSON.stringify(Buffer.concat(bodyChunks).toString("utf8")));
            // //return JSON.stringify(Buffer.concat(bodyChunks).toString("utf8"));
            let data = Buffer.concat(bodyChunks).toString("utf8");
            let jData = JSON.parse(data);
            res.json(jData.results[Math.ceil(Math.random() * 21)]);
          })
          .on("error", function(e) {
            console.log("ERROR: " + e.message);
          });
      }
    );

    // req = https.get(
    //   "https://maps.googleapis.com/maps/api/place/textsearch/json?query=Restaraunts+in+Atlanta&key=AIzaSyD519JsWvzqzkpHvyBeXcwiAAg6wyXtu2U",
    //   res => {
    //     console.log("STATUS: " + res.statusCode);
    //     // console.log("HEADERS: " + JSON.stringify(res.headers));

    //     let bodyChunks = [];
    //     let data;
    //     res
    //       .on("data", function(chunk) {
    //         // You can process streamed parts here...
    //         bodyChunks.push(chunk);
    //       })
    //       .on("error", function(e) {
    //         console.log("ERROR: " + e.message);
    //       })
    //       .on("end", function() {
    //         console.log(JSON.stringify(Buffer.concat(bodyChunks).toString("utf8")));
    //         console.log("done");
    //         data = JSON.stringify(Buffer.concat(bodyChunks).toString("utf8"));
    //         return data;
    //       });
    //   }
    // );
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
