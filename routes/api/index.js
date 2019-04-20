const router = require("express").Router();
const bookRoutes = require("./books");
const eventRoutes = require("./events");
const itineraryRoutes = require("./itineraries");

// Book routes
router.use("/books", bookRoutes);
router.use("/events", eventRoutes);
router.use("/itineraries", itineraryRoutes);

module.exports = router;
