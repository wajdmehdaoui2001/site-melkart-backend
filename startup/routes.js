const express = require("express");
const contacts = require("../routes/contacts");

module.exports = function (app) {
  app.use(express.json());
  app.use("/api/contact", contacts);
};
