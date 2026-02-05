// src/controllers/home.controller.js

const renderHome = (req, res) => {
    res.render("home/index", { title: "Home" });
  };
  
  const renderAbout = (req, res) => {
    res.render("home/about", { title: "About" });
  };
  
  const renderContact = (req, res) => {
    res.render("home/contact", { title: "Contact" });
  };
  
  module.exports = {
    renderHome,
    renderAbout,
    renderContact,
  };
  