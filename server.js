const express = require("express");
const morgan = require("morgan");

const app = express();
app.use(express.json());
const router = express.Router();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.get("/", (req, res) => {
  res.send("working bitch");
});

// router.get("/:i", function (req, res) {
//   var dataGet = { _id: req.params.i };

//   fileModel.findOne(dataGet).exec(function (err, doc) {
//     if (err) {
//       return next(err);
//     }

//     var base64dataa = new Buffer(doc.fileData, "binary").toString("base64");

//     var ress = {
//       fileData: base64dataa,
//       mime: doc.mimeType,
//       name: doc.fileName,
//     };

//     // res.json(ress)
//     res.contentType("image/jpeg");
//     res.send(doc.fileData);
//   });
// });
app.post("/register", (req, res) => {
  console.log(req);
  res.send("oooo");
});
app.post("/post", (req, res) => {
  var data = {
    file: req.body.fileData,
    mime: req.body.mime,
    name: req.body.name,
  };

  res.send("ololo", data, req);
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});
