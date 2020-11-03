var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mysql = require('mysql');
  
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
  
app.get('/', function (req, res) {
    return res.send({ error: true, message: 'Test T-shirt Web API' })
});

var dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'projectmobile'
});
  
dbConn.connect(); 

app.get('/alluser', function (req, res) { //getuser
    dbConn.query('SELECT * FROM user', function (error, results, fields) {
        if (error) throw error;
        return res.send(results);
    });
});

app.post('/user', function (req, res) { 

    var usr = req.body 
    if (!usr ) {
        return res.status(400).send({ error:true, message: 'Please add account' });
    }
    dbConn.query("INSERT INTO user SET ? ", usr , function (error, results, fields) { 
        if (error) throw error;
        return res.send(results);
    });
});

app.post('/login',function(req, res){
    var data = req.body;
    var id = data.id;
    var password = data.password;
    dbConn.query('SELECT * FROM user WHERE id = ? AND password = ?',[id,password],function(error,results,fields){
        dbConn.on('error',function(err){
            console.log('[MySQL ERROR]',err)
        });
        if(results && results.length){
            res.end(JSON.stringify(results[0]))
        }
        else{
            res.end(JSON.stringify('Wrong password'));
        }
    });
});

app.get('/allshirt',function(req,res){
    dbConn.query('SELECT * FROM catalogue', function (error,results,fields){
        if(error) throw error;
        return res.send(results);
    });
});

app.listen(3000, function () {
    console.log('Node app is running on port 3000');
});
 
module.exports = app;