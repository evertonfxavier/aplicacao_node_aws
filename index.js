const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.json({ message: "Atualizou mesmo 😀" });
});

app.listen(3333);
