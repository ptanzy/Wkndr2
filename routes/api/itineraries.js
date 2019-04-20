const router = require("../../node_modules/express").Router();
const itinerariesController = require("../../controllers/itineraryController");

// Matches with "/api/itineraries"
router
  .route("/")
  .get(itinerariesController.findAllItineraries)
  .post(itinerariesController.createItinerary);

// Matches with "/api/itineraries/:id"
router
  .route("/:id")
  .get(itinerariesController.findItineraryById)
  .put(itinerariesController.updateItinerary)
  .delete(itinerariesController.deleteItinerary);

module.exports = router;
