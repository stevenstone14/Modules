const http = require("http");
http.createServer(function (req, res) {
    let body = '';
    req.on('data', (chunk) => {
        body += chunk;
    });
    req.on('end', () => {
        console.log(body);
        res.write('OK'); 
        res.end(); 
    });
}).listen(3000, () => {
    console.log("server start at port 3000"); //the server object listens on port 3000
});