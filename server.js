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
  app.use("/static", express.static(path.join(__dirname, "client/public")));
}

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/wkndr");

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

app.get("*", (req, res) => {
  let url = path.join(__dirname, "../client/public", "index.html");
  if (!url.startsWith("/app/"))
    // since we're on local windows
    url = url.substring(1);
  res.sendFile(url);
});
