const express = require("express");
const fileupload = require("express-fileupload");
const cors = require("cors"); 
const cookieSession = require('cookie-session');
const { getUserID } = require('./helpers');
const user = 'connormackay';
const database = 'image_storage';

const app = express();
const { Pool } = require('pg');

app.use(cors());
app.use(fileupload());
app.use(express.static("files"));
app.use(cookieSession({
  name: 'session',
  keys: ['key1']
}));


const pool = new Pool({
  host: 'localhost',
  user: user,
  database: database
});


pool.connect((err, client, release) => {
  if (err) {
    return console.error('error acquiring client', err.stack);
  }
  client.query('SELECT NOW()', (err, result) => {
    release()
    if(err) {
      return console.error('error executing query', err.stack);
    }
    console.log(result.rows);
  });
});


app.post('/login', (req, res) => {
  let name = req.body.name;
  let password = req.body.password;
  
  pool.query('SELECT * FROM users;')
  .then((data) => {
    const userID = getUserID(name, data);
  })
  .catch(err => console.log(err));
  });

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