const express = require("express");
const path = require("path");
const expressLayouts = require("express-ejs-layouts");

const app = express();
const PORT = 3000;

// ✅ 1) Motor de plantillas
app.set("view engine", "ejs");

// ✅ 2) Carpeta de vistas (views)
app.set("views", path.join(__dirname, "..", "views"));

// ✅ 3) Layouts
app.use(expressLayouts);
app.set("layout", "layouts/main"); // busca: views/layouts/main.ejs

// ✅ 4) Rutas (render)
app.get("/", (req, res) => {
  res.render("home/index", { title: "Home" });
});

app.get("/about", (req, res) => {
  res.render("home/about", { title: "About" });
});

app.get("/contact", (req, res) => {
  res.render("home/contact", { title: "Contact" });
});

// ✅ 5) Servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
