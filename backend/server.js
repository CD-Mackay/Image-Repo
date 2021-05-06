const express = require("express");
const fileupload = require("express-fileupload");
const cors = require("cors"); 

const app = express();

app.use(cors());
app.use(fileupload());
app.use(express.static("files"));


app.post('/upload', (req, res) => {
  console.log(req.files);
  console.log("uploading something!")
  const filePath = __dirname + "/files/";
  const file = req.files.file;
  const fileName = file.name;

  file.mv(`${filePath}${fileName}`, (err) => {
    if (err) {
      //res.status(500).send({message: "File Upload has Failed", code: 200})
      console.log(err);
    }
    //res.status(200).send({message: "Upload Succesful", code: 200});
    console.log('sweet success');
  });
});

app.listen(3000, () => {
  console.log(`server running on port 3000ss`);
});