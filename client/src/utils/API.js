import axios from "axios";

export default {
  getEvent: function() {
    return axios.get("/api/events");
  },
  deleteEvent: function(id) {
    return axios.delete("/api/events/" + id);
  },
  saveEvent: function(eventData) {
    return axios.post("/api/events", eventData);
  },
  getItinerary: function(id) {
    return axios.get("/api/itineraries" + id);
  },
  deleteItinerary: function(id) {
    return axios.delete("/api/itineraries/" + id);
  },
  saveItinerary: function(itineraryData) {
    return axios.post("/api/itineraries", itineraryData);
  },
  getItineraries: function() {
    return axios.get("/api/itineraries");
  },
  updateItinerary: function(id, itineraryData) {
    return axios.post("/api/itineraries" + id, itineraryData);
  },

  getUser: function(id) {
    return axios.get("/api/users" + id);
  },
  deleteUser: function(id) {
    return axios.delete("/api/users/" + id);
  },
  saveUser: function(itineraryData) {
    return axios.post("/api/users", itineraryData);
  },
  updateUser: function(id, itineraryData) {
    return axios.post("/api/users" + id, itineraryData);
  }
};
