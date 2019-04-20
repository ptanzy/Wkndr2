const db = require("../models");

// Defining methods for the ItinerarysController
module.exports = {
  findAllItineraries: function(req, res) {
    db.Itinerary.find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findItineraryById: function(req, res) {
    db.Itinerary.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  createItinerary: function(req, res) {
    db.Itinerary.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateItinerary: function(req, res) {
    db.Itinerary.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, upsert: true })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  deleteItinerary: function(req, res) {
    db.Itinerary.findOneAndDelete({ _id: req.params.id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
    // db.Itinerary
    //   .findById({ _id: req.params.id })
    //   .then(dbModel => dbModel.remove())
    //   .then(dbModel => res.json(dbModel))
    //   .catch(err => res.status(422).json(err));
  }
};
