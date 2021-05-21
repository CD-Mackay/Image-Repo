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
app.use(express.urlencoded());  
app.use(express.json());

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

app.get('/images', (req, res) => {
  pool.query('SELECT * FROM images WHERE user_id = $1;', [req.session.userID])
  .then((data) => {
    res.json(data.rows);
  })
});

app.get('/users', (req, res) => {
  pool.query('SELECT * FROM users;')
  .then((data) => {
    res.json(data.rows);
  })
});



app.put('/images/:id', (req, res) => {
  const id = req.body.faveStatus.id;
  console.log(req.body);
  pool.query('UPDATE images SET favourite = $1 where id = $2', [req.body.faveStatus.favourite, id])
  .then((data) => {console.log(data)})
  .catch(err => console.log(err));
});

app.delete('/images/:id', (req, res) => {
  const id = req.params.id;
  pool.query('DELETE FROM images WHERE id = $1', [id])
  .then(res => console.log(res))
  .catch(err => console.log(err));
});


app.post('/signup', (req, res) => {
  let name = req.body.user.name;
  let password = req.body.user.password;
  pool.query('INSERT INTO users (name, password_digest) VALUES ($1, $2)', [name, password])
  .then((data) => {
    console.log(data);
    res.redirect('/upload');
  })
  .catch(err => console.log(err));
});

app.post('/login', (req, res) => { 
  let name = req.body.user.name;
  let password = req.body.user.password;
  pool.query('SELECT * FROM users WHERE name = $1;', [name])
  .then((data) => {
    console.log(name, data.rows);
    const userID = getUserID(name, data.rows);
    req.session.userID = userID;
    res.redirect('/upload');
  })
  .catch(err => console.log(err));
  });

app.post('/logout', (req, res) => {
  res.session.userID = null;
  res.redirect('/');
})

app.post('/upload', (req, res) => {
  const directoryPath = __dirname.slice(0, __dirname.length - 7) + "public/";
  const filePath = __dirname + "/files/";
  const file = req.files.file;
  const fileName = file.name;

  file.mv(`${directoryPath}${fileName}`, (err) => {
    if (err) {
      //res.status(500).send({message: "File Upload has Failed", code: 200})
      console.log(err);
    }
    //res.status(200).send({message: "Upload Succesful", code: 200});
    console.log('sweet success');
  });
  console.log('adding to db');
  const date = Date.now();
  pool.query('INSERT INTO images (name, user_id, file_path, date_added) VALUES ($1, $2, $3, $4);', [fileName, Number(req.session.userID), directoryPath, date])
  .then(res => console.log(res))
  .catch(err => console.log(err));
});

app.listen(3000, () => {
  console.log(`server running on port 3000ss`);
});