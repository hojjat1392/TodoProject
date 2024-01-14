const path = require("path");

const express = require("express");

//exports
exports.setStatics = (app) => {
  //statics "to acces css and fints files"
  app.use(express.static(path.join(__dirname, "..", "public")));
  app.use(
    express.static(path.join(__dirname,"..","node_modules","bootstrap-v4-rtl","dist")));
  app.use(
    express.static(path.join(__dirname, "..", "node_modules", "font-awesome"))
  );
  //End of statics
};
