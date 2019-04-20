const router = require("../../node_modules/express").Router();
const eventsController = require("../../controllers/eventController");

// Matches with "/api/books"
router
  .route("/")
  .post(eventsController.saveEvent)
  .get(eventsController.createEvent);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(eventsController.findEventById)
  .delete(eventsController.deleteEvent);

module.exports = router;
