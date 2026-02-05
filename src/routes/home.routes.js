// src/routes/home.routes.js

const express = require("express");
const router = express.Router();

const {
  renderHome,
  renderAbout,
  renderContact,
} = require("../controllers/home.controller");

router.get("/", renderHome);
router.get("/about", renderAbout);
router.get("/contact", renderContact);

module.exports = router;
