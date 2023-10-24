// function sayHello(name) {
//     console.log(`Hello ${name}!`);
// }
 
// function getPersonAndDoSomething(callback) {
//     let person = "Fred";
//     callback(person);
// }
 
// getPersonAndDoSomething(sayHello);


// function oneSecond() { console.log("One second later..."); }
// setTimeout(oneSecond, 1000);
// console.log("Now!");




const fs = require("fs");

function printFile(err,data){ console.log(data.toString()); }

let file;
fs.readFile("hey.txt", printFile);
//console.log(file.toString());



