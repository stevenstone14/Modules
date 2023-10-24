var http = require("http");
var fs = require("fs");

const data = [
    "Siamese",
    "Persian",
    "Maine Coon",
    "Bengal",
    "Scottish Fold",
    "British Shorthair",
    "Sphynx",
    "Abyssinian",
    "American Shorthair",
    "Russian Blue",
    "Ragdoll",
    "Devon Rex",
    "Birman",
    "Siberian",
    "Manx",
    "Exotic Shorthair",
    "Burmese",
    "Tonkinese",
    "Savannah",
    "Himalayan",
   ];


function routing(req,res){
    const url = req.url;
    const method = req.method;
    if (url.startsWith("/data")){
        if (method == "GET") {
            res.writeHead(200,{"Content-Type": "application/json"});
            res.write(JSON.stringify(data));
            res.end();
          }
    } else if (url.startsWith("/login")){
        if (method == "POST") {
            // The login page
            res.write("Login");
            res.end();
          }
    } else if (url.startsWith("/client")){
       
        if (method == "GET") {
            // The client page
            const filename = "client.html";
            fs.readFile(filename, "binary", (err, file) => {
                if (err){
                    res.writeHead(500, {"Content-Type": "application/json"});
                    res.write(JSON.stringify({error: err}));
                    res.end();
                    return;
                }
    
                res.writeHead(200,{"Content-Type": "text/html"});
                res.write(file, "binary");
                res.end();
            });
          }
    } else {
        //no page matched the url
        res.write("No matching page");
        res.end();
    }
}

http.createServer(routing).listen(3000, function () {
 console.log("server start at port 3000"); //the server object listens on port
});