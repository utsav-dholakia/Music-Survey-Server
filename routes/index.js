var express = require('express');
var router = express.Router();
const sqlite = require('sqlite3').verbose();

var db;
const dbFilePath = './db/UserSurvey.db';

//Initialize database connection
function initialize(){
    this.db = new sqlite.Database(dbFilePath, function(err) {
        if(err){
            console.error('Error connecting to the database');
        }
        else{
            console.log('connected to the database');
        }
    });

}

//Authorize login for admin
router.post('/authorizeLogin', function(req, res) {
    if(req.body.userName === "admin" && req.body.password === "password"){
        res.sendStatus(200);
    }
    res.sendStatus(500);
});


// close the database connection
function close(){

    this.db.close(function(err){
        if (err) {
            return console.error(err.message);
        }
        console.log('Closed the database connection.');
    });
}

initialize();


module.exports = router;
