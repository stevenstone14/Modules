//create a sever object:
const http = require("http");
const fs = require("fs");
const path = "guestBook.json";

function routing(req, res){ // the form page
    const url = req.url;

    if(url.startsWith("/form")){
        res.writeHead(200, { "Content-Type":"text/html"}); //http header
        res.write(`
   <form action="/add" method="POST">
       <input placeholder="Name" name="name">
       <input placeholder="Age" name="age"> 
       <input placeholder="Gender" name="gender"> 
       <input placeholder="Comment" name="comment"> 
       <br> <br><input type="submit">
   </form>
   `);
        res.end();
    } else if (url.startsWith("/add")){

        fs.readFile(path, (err, data)=>{
            if (err){
                res.write("You should do some real error handling here");
                res.end();
                return;
            }
            // Try to read from the guestbook. if it fails, set the guest book to empty
            let guestBook = [];
            
            try {
                guestBook = JSON.parse(data);
            } catch (e){}

       // const params = new URLSearchParams(url.split("?")[1]); // get the part of the url after the first "?"
        let body = '';

        req.on('data',(chunk)=>{
           // console.log(chunk)
            body += chunk;
        });
        //console.log(body.toString());

        req.on('end',()=>{
            console.log('body : ' + body);
            res.write('OK');
            res.end();    

            const formData = new URLSearchParams(body);
            const guestName = formData.get('name');
            const guestAge = formData.get('age');
            const guestGender = formData.get('gender');
            const guestComment = formData.get('comment');
            
            guestBook.push({ name: guestName, gender: guestGender, age: guestAge, comment: guestComment }); // get the name param and add it to the guestbook

        //write the updated guestbook to the filesystem
        fs.writeFile(path, JSON.stringify(guestBook), (err)=>{
            if(err){
                res.write("You should do some real error handling here");
                res.end();
                return;
            }
            res.write("Successfully updated the guestbook");
            res.end();
        });
        });
    });

    } else if(url.startsWith("/read")) {
        res.writeHead(200, { "Content-Type":"application/json" }); //http header
        fs.readFile('guestBook.json',(data,err)=>{
            if(err){
                res.end(JSON.stringify({ error: 'Something went wrong while reading the data'}));
                return;
            } 
            let guestData = JSON.parse(data);
            res.end(JSON.stringify(guestData));
        });
    } else { // no page matches the url
        res.write("No matching page");
        res.end();
    }
};



http.createServer(routing).listen(3000, () => {
    console.log("server start at port 3000"); //the server object listens on port 3000
});