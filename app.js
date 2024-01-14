const express = require("express");
const bodyParser = require("body-parser");

const path = require("path");

const { setStatics } = require("./utils/statics");
const adminRoutes = require("./routes/admin");
const indexRoutes = require("./routes/index");

const app = express();

//Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
//End of Middlewares

//statics
setStatics(app);

//EJS "to use template Engine"
app.set("view engine", "ejs");
app.set("views", "views");
//End of EJS

//routes
app.use("/admin", adminRoutes);
app.use(indexRoutes);

//end of routes

app.listen(3000, () => {
  console.log("server is running");
});
