const express = require("express");

const path = require("path");
const mongoose = require("mongoose");
const routes = require("./routes");

const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(
  express.urlencoded({
    extended: true
  })
);
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  // Set Static
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/wkndr");

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
