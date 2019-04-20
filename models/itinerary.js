const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itinerarySchema = new Schema({
  dates: { type: Array, required: true },
  private: { type: Boolean, default: false },
  sharedwith: { type: Array },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const Itinerary = mongoose.model("Itinerary", itinerarySchema);

module.exports = Itinerary;
