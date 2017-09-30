const express = require("express");
const app = express();

app.get("/halo", (req, res) => {
  res.send("Halo dunia!");
});

// app.use(express.static(__dirname + "/views"));
app.set("view engine", "pug");
app.get("/", (req, res) => {
  res.render("index", {
    title: "Judul dari Pug",
    message: "Selamat datang dari Pug!!"
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Open http://localhost:" + port);
});
