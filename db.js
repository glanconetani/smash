var mysql = require('mysql');
const fetch = require("node-fetch")

var con = mysql.createConnection({
    host: 'smash-project.cwrpa3uglhdr.us-east-2.rds.amazonaws.com',
    user: 'master',
    password: '461lsmash!',
    database: 'smash'
});

var options = {
    method: 'GET',
    headers: {'Content-Type' :  'application/x-www-form-urlencoded',
    },
    mode: 'cors',
    cache: 'default'
}

con.connect()
con.query('SELECT * FROM smash.characterInfo', function (err, rows, fields){
    if (err) throw err
    var img
    console.log(rows[0].main_image_url)
    fetch(rows[0].main_image_url, options).then((response) => {
        var base64Flag = 'data:image/jpeg;base64'
        var imageStr = arrayBufferToBase64(buffer)
        document.querySelector('img').src = base64Flag + imageStr;

    function arrayBufferToBase64(buffer) {
    var binary = '';
    var bytes = [].slice.call(new Uint8Array(buffer));

     bytes.forEach((b) => binary += String.fromCharCode(b));

    return window.btoa(binary);
}
        
})

   
   
   
    // fetch(rows[0].main_image_url)
    // .then(function(data) {
    //     console.log(data)
    // })
    // .catch(function(error){

    // })
    
})

con.end()