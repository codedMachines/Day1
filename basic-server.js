let express = require("express");
let app = express();

app.use( express.static(__dirname) );

app.get("/", function(req, res){
    res.sendFile(__dirname+"/step13-using-modules.html")
});

app.listen(2525);
console.log("server is now running on localhost:2525");