const router = require("express").Router();
const bookRoutes = require("./books");
const eventRoutes = require("./events");
const itineraryRoutes = require("./itineraries");
const userRoutes = require("./users");
// Book routes
router.use("/books", bookRoutes);
router.use("/events", eventRoutes);
router.use("/itineraries", itineraryRoutes);
router.use("/users", userRoutes);

module.exports = router;
