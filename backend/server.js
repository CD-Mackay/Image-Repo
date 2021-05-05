const express = require("express");
const fileupload = require("express-fileupload");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(fileupload());
app.use(express.static("files"));

app.post('/upload', (req, res) => {
  const filePath = _dirname + "/files/";
  const file = req.files.file;
  const fileName = file.name;

  file.mv(`${filePath}${fileName}`, (err) => {
    if (err) {
      res.status(500).send({message: "File Upload has Failed", code: 200})
    }
    res.status(200).send({message: "Upload Succesful", code: 200});
  });
});

app.listen(3000, () => {
  console.log(`server running on port ${PORT}`);
});