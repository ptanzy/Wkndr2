const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
  oauthid: { type: String, required: true },
  itineraries: Array
});

const Event = mongoose.model("Event", eventSchema);

module.exports = User;
