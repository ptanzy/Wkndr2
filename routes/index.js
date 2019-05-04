const path = require("path");
const router = require("../node_modules/express").Router();
const apiRoutes = require("./api");

//checks api for the current route
router.use("/api", apiRoutes);

//if it isn't in api then return index page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
