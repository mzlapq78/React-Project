const fs = require('fs')
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: conf.host,
    user: conf.user,
    password: conf.password,
    port: conf.port,
    database: conf.database
});
connection.connect();

const multer = require('multer');
const upload = multer({dest:'./upload'})


app.get('/api/customers', (req, res) => {
    connection.query(
        "SELECT * FROM customer",
        (err, rows, fields) => {
            res.send(rows);
        }
    );

});

app.get('/api/user', (req, res) => {
    connection.query(
        "SELECT * FROM user",
        (err, rows1, fields) => {
            res.send(rows1);
        }
    );

});

app.use('/image', express.static('./upload'));

app.post('/api/customers', upload.single('image'),(req, res) => {
    let sql = 'INSERT INTO customer VALUES (null, ?, ?)';
    let image = '/image/' + req.file.filename;
    let name = req.body.name;
    let params = [image, name];
    connection.query(sql, params,
        (err, rows, fields) => {
            res.send(rows);
        }
    );
});

app.listen(port, () => console.log(`Listening on port ${port}`));