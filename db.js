var mysql = require('mysql')
var buffer = require('buffer')
var atob = require('atob')
var btoa = require('btoa')
var fs = require('fs')
var request = require('request').defaults({ encoding: null})
const fetch = require("node-fetch")


var con = mysql.createConnection({
    host: 'smash-project.cwrpa3uglhdr.us-east-2.rds.amazonaws.com',
    user: 'master',
    password: '461lsmash!',
    database: 'smash'
});




con.connect()
con.query('SELECT * FROM smash.characterInfo', function (err, rows, fields){
    for (i = 0; i < 58; i++){
        request.get(rows[i].main_image_url, function(error, response, body) {
            if (!error && response.statusCode == 200) {
                data = "data:" + response.headers["content-type"] + ";base64," + new Buffer(body).toString('base64');
            }
        }).pipe(fs.createWriteStream('./images/full/' + (rows[i].display_name) + '.png'))
    }

    for (i = 0; i < 58; i++){
        request.get(rows[i].thumbnail_url, function(error, response, body) {
            if (!error && response.statusCode == 200) {
                data = "data:" + response.headers["content-type"] + ";base64," + new Buffer(body).toString('base64');
            }
        }).pipe(fs.createWriteStream('./images/thumbnails/' + (rows[i].display_name) + '.png'))
    }
    
    for (i = 0; i < 58; i++){
    request.get(rows[i].related__smash4__moves, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            data = (JSON.parse(body))
        }
    }).pipe(fs.createWriteStream('./moves/' + (rows[i].display_name) + '.JSON'))
}

    let characterData = {

        //string 
        displayName:"", 

        //hex
        color_theme: "",

    }
    
    if (err) throw err


    characterData.name = rows[0].name
    characterData.displayName = rows[0].display_name
    characterData.color_theme = rows[0].color_theme
   
   
    //let jsonString = JSON.stringify(characterData)
    //console.log(characterData.thumbnail_image)
    //console.log(jsonString)
    //atob()
})


con.end()
