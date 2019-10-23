var mysql = require('mysql')
var buffer = require('buffer')
var request = require('request').defaults({ encoding: null})
const fetch = require("node-fetch")

var con = mysql.createConnection({
    host: 'smash-project.cwrpa3uglhdr.us-east-2.rds.amazonaws.com',
    user: 'master',
    password: '461lsmash!',
    database: 'smash'
});

// var options = {
//     method: 'GET',
//     headers: {'Content-Type' :  'application/x-www-form-urlencoded',
//     },
//     mode: 'cors',
//     cache: 'default'
// }

con.connect()
con.query('SELECT * FROM smash.characterInfo', function (err, rows, fields){
    let characterData = {
        //string
        name:"",

        //string 
        displayName:"", 

        //base64 encoding
        main_image: "",

        //base64 encoding 
        thumbnail_image: "",

        //hex
        color_theme: "",

        // movements, // JSON Array?
        // attributes, // JSON Array?
        // unique_properties, //JSON Array?
    }
    
    if (err) throw err

    //show image url
    //console.log(rows[0].main_image_url)

    characterData.name = rows[0].name
    characterData.displayName = rows[0].displayName
    
    var request = require('request').defaults({ encoding: null})

    request.get(rows[0].main_image_url, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            data = "data:" + response.headers["content-type"] + ";base64," + new Buffer(body).toString('base64');
            console.log(data);
            //characterData.main_image = JSON.stringify(data)
            
        }
    })

    request.get(rows[0].thumbnail_image, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            //data = "data:" + response.headers["content-type"] + ";base64," + new Buffer.alloc(buffer.constants.MAX_LENGTH, body).toString('base64');
            //console.log(data);
            //characterData.thumbnail_image = JSON.stringify(data)
        }
    })
    
    characterData.color_theme = rows[0].color_theme

    let jsonString = JSON.stringify(characterData)
    //console.log(jsonString)
    

    //
    // fetch(rows[0].main_image_url, options).then((response) => {
    //     response.arrayBuffer().then((buffer) => {
    //         console.log(1)
    //         var base64Flag = 'data:image/png;base64'
    //         var imageStr = arrayBufferToBase64(buffer)
    //         console.log(imageStr)
    //         //document.querySelector('img').src = base64Flag + imageStr;
    //     });
    // });

    // function arrayBufferToBase64(buffer) {
    //     var binary = ''
    //     var bytes = [].slice.call(new Uint8Array(buffer))

    //     bytes.forEach((b) => binary  += String.fromCharCode(b));
        
    //     return window.btoa(binary);
    // }     
})


con.end()