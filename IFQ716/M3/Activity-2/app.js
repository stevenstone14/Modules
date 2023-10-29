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
            res.writeHead(200,{"Content-Type": "application/json"},{"Access-Control-Allow-Origin": "*"});
            res.write(JSON.stringify(data));
            res.end();
          }
    } else if (url.startsWith("/login")){
        if (method == "POST") {
            // The login page
            res.write("Login");
            res.end();
          }
    } else if (url.startsWith("/delete")) {
        console.log(method);
        if (method=="OPTIONS"){
            res.writeHead(200, {"Access-Control-Allow-Origin":"*",
            "Access-Control-Allow-Methods": "OPTIONS, DELETE",});
            res.end();
        }
        if (method == "DELETE"){
            res.writeHead("200", {
                "Access-Control-Allow-Origin":"*",
            });
            res.write("delete-route");
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
    } else if (url.startsWith("/add")){
        
        if( method == "POST"){
           let body = '';
           req.on('data',(chunk)=>{
            body += chunk
           });

           req.on('end',()=>{
           data.push(body);
           res.write("Successfully added some stuff");
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