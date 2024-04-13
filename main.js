const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "templates/index.html"));
});
console.log("pl;kl");
app.post("/merge", upload.array("pdfs", 2), function (req, res, next) {
  console.log("I am running peacefully");
  console.log(req.files);
  res.send({ data: req.files });
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
