const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  description: String,
  budget: String,
  location: String,
  ages: Array
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
