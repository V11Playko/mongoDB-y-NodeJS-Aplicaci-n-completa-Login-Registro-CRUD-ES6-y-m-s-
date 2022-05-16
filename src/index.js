const express = require("express");
const path = require("path");

// Initializations
const app = express();

// Settings
app.set("port", process.env.PORT || 3000);

// Views
app.set("views", path.join(__dirname, "views"));

app.engine(
  ".hbs",
  engine({
    defaultLayout: "main",
    extname: ".hbs",
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
  })
);
app.set("view engine", ".hbs");

// Middlewares

// Global Variables

// Routes

// Static files

//Server is listening
app.listen(app.get("port"), () => {
  console.log("Server on port", app.get("port"));
});
