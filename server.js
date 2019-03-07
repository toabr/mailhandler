const express = require('express');
const app = express();
const port = 4000;

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const mysql = require('mysql');
const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'host',
  password : process.env.MYSQLPASSWORD,
  database : 'emailList'
});


db.connect(err => {
  if (err) throw err;
  console.log('Mysql connected');
});

// Post Mail
app.post('/mails', (req, res) => {
  let sql = 'INSERT INTO emails SET ?';
  let query = db.query(sql, req.body, (err, results) => {
    if(err) throw err;
    console.log(results);
    res.send('mail added ...');
  });
  // console.log('mail posted', 'Body: ', body);// Get Mails
})

// Get Mails
app.get('/mails', (req, res) => {
  let sql = 'SELECT * FROM emails';
  let query = db.query(sql, (err, results) => {
    if(err) throw err;
    console.log('mails fetched ...');
    res.json({ data: results });
  });
});

app.listen(port, () => console.log(`Server listening on port ${port}!`));

// db.end();
