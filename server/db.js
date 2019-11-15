var mysql = require('mysql')
var buffer = require('buffer')
var atob = require('atob')
var btoa = require('btoa')
var fs = require('fs')
var request = require('request').defaults({ encoding: null })
const fetch = require("node-fetch")
const axios = require('axios')


var HelloWorld = {
    HelloWorld: function() {
        console.log("Hello World");
    }
}

var getCharData = {
    getCharData: function(character) {
        var results = getData(character)
        console.log(results)
        return results
    }
}

export const getData = function(character) {
    return new Promise(function(resolve, reject) {
        var con = mysql.createConnection({
            host: 'smash-project.cwrpa3uglhdr.us-east-2.rds.amazonaws.com',
            user: 'master',
            password: '461lsmash!',
            database: 'smash'
        });

        con.connect(function(err) {
            if (err) throw err;
            console.log("connected")
        })

        var sqlData = 'SELECT * FROM ' + character

        con.query(sqlData, function(err, results) {
            if (err) {
                reject("fail");
            } else {
                console.log("have the results");
                resolve(results);
            }
        })
    })
}

//module.exports = getCharData, HelloWorld;

// function getMoves(){
//     //for each character
//     for(var i = 0; i < 1; i++){
//         var movesURL = charInfo[i].related__smash4__moves
//         fetch(movesURL)
//         .then(function(response){
//             return response.json()
//         }).then(function(response){
//             //each move we want
//             testJSON = JSON.stringify(response)
//             return testJSON
            // console.log(testJSON)
            // var name = "Bayonetta"
            //var jab_1 = "Bayonetta"
            // var uSmash
            // var fSmash
            // var dSmash
            // var dash_attack
            // var uThrow
            // var dThrow
            // var fThrow
            // var bThrow
            // var nAir
            // var uAir
            // var dAir
            // var fAir
            // var bAir
            // // var nB
            // // var upB
            // // var downB
            // // var b

            // for (var i=0; i<70; i++){
            //     switch(response[i].Name){
            //         case "Jab 1":
            //             jab_1 = response[i].BaseDamage
            //         case "Usmash":
            //             uSmash = response[i].BaseDamage
            //         case "Fsmash":
            //             fSmash = response[i].BaseDamage
            //         case "Dsmash":
            //             dSmash = response[i].BaseDamage
            //         case "Dash Attack":
            //             dash_attack = response[i].BaseDamage
            //         case "Uthrow":
            //             uThrow = response[i].BaseDamage
            //         case "Dthrow":
            //             dThrow = response[i].BaseDamage
            //         case "Fthrow":
            //             fThrow = response[i].BaseDamage
            //         case "Bthrow":
            //             bThrow = response[i].BaseDamage
            //         case "Nair":
            //             nAir = response[i].BaseDamage
            //         case "Uair (Hit 1)":
            //             uAir = response[i].BaseDamage
            //         case "Dair (Hits 1-6)":
            //             dAir = response[i].BaseDamage
            //         case "Fair (Hit 1)":
            //             fAir = response[i].BaseDamage
            //         case "Bair":
            //             bAir = response[i].BaseDamage
            //     }
            // }
            //con.query('CREATE TABLE ?? (column_name1 data_type(size), column_name2 data_type(size), column_name3 data_type(size))', [tableName], function (error, results) {
            //push all values to sql
            // con.query("INSERT INTO Bayonetta (name, display_name, color_theme) VALUES ('Bayonetta', 'Bayonetta', 'Bayonetta')", function(err, results) {
            //     if (err){
            //         throw err
            //     }
            //     //return callback(results)
            // })
//         })
//         .catch(function(error){
//             console.log(error)
//         })
//     }
// }

// function getWeight(){
//     //for
//         var attributesURL = charInfo[0].related__smash4__attributes
//         fetch(attributesURL)
//         .then(function(response) {
//             return response.json()
//         }).then(function(response){
//             console.log()
//         })
// }

// exportData(function(result){
//     //charInfo has big database of all characters
//     charInfo = result
//     //call get moves to get the moves JSON file of each character
//     return getMoves()
//     //place the info from the characterInfo into each character's table
// })

// getMoves()

    // con.query('SELECT name, color_theme, display_name, related_smash4_moves FROM characterInfo', function (err, result, fields){
    //     console.log(result)
        //images

        // for (var i = 1; i < 58; i++){
        //     var j = i
        //     request.get(rows[0].main_image_url, function(error, response, body) {
        //     if (!error && response.statusCode == 200) {
        //         var data = "data:" + response.headers["content-type"] + ";base64," + new Buffer(body).toString('base64');
        //     }
        //     }).pipe(fs.createWriteStream('./images/full/' + (rows[i].namea) + '.png'))
        // }
        //thumbnails
    //     for (var i = 1; i < 58; i++){
    //         var j = i
    //         request.get(rows[j].thumbnail_url, function(error, response, body) {
    //         if (!error && response.statusCode == 200) {
    //             var data = "data:" + response.headers["content-type"] + ";base64," + new Buffer(body).toString('base64');
    //         }
    //         }).pipe(fs.createWriteStream('./images/thumbnails/' + (rows[i].name) + '.png'))
    //     }

    //     //get JSON files --placed statically into folder
    //     // for (var i = 1; i < 58; i++){
    //     //     request.get(rows[i].related__smash4__moves, function(error, response, body) {
    //     //     if (!error && response.statusCode == 200) {
    //     //         var data = (JSON.parse(body))
    //     //     }
    //     //     }).pipe(fs.createWriteStream('./moves/' + (rows[i].name) + '.JSON'))
    //     // }

    //     for(var i = 1; i < 58; i++){
    //         var j = i
    //         fetch(rows[j].related__smash4__moves).then(response => {
    //             return response.json()
    //         }).then(data => {
    //             // Work with JSON data here

    //             console.log(data)
    //         }).catch(err => {
    //             // Do something for an error here
    //         })
    //     }


    //     // function populateDatabase(){
    //     //     //async
    //     //     function loadJSON(callback) {
    //     //         for (var i = 1; i < 58; i++){
    //     //             var xobj = new XMLHttpRequest();
    //     //             xobj.overrideMimeType("./moves");
    //     //             xobj.open('GET', 'my_data.json', false); // Replace 'my_data' with the path to your file
    //     //             xobj.onreadystatechange = function () {
    //     //                 if (xobj.readyState == 4 && xobj.status == "200") {
    //     //                     // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
    //     //                     callback(xobj.responseText);
    //     //                 }
    //     //             };
    //     //             xobj.send(null);
    //     //         }
    //     //     }

    //     //     function init() {
    //     //         loadJSON(function(response) {
    //     //         // Parse JSON string into object
    //     //             var actual_JSON = JSON.parse(response);
    //     //         });
    //     //     }
    //     }
    //     //get JSON information and put into variables or write directly to sql database



   // })
