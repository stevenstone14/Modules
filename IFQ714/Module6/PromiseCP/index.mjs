// import fetch from "node-fetch";
// fetch("car")
//     .then(function (response) { return response.text(); })
//     .then(function (data) { console.log(data); })
//     .catch(function (error){console.log(`Error: ${error.message}`)});

// function promiseFunction(initialNum){
//     return new Promise(function (resolve, reject){
//         try {
//             let answer = initialNum + 5;
//             resolve(answer);
//         } catch(error) {
//             reject(error);
//         }
//     });
// }

// async function asyncFunction(inn){
//     let answer = inn + 5;
//     return answer;
// }

// asyncFunction(25).then(resolveCallback,rejectCallback);


// function resolveCallback(result){console.log(`Result is: ${result}`);};
// function rejectCallback(error){console.log(`Error is: ${error}`);};

// // promiseFunction(15).then(resolveCallback, rejectCallback);

import fetch from "node-fetch";

async function getUrl(url){
    try{
        let response = await fetch(url);
        let text = await response.text();
        console.log(text);
    }catch(error){
        console.log(`error occured: ${error}`);
    }

    
}
getUrl("poo");
//getUrl("https://www.w3.org/TR/PNG/iso_8859-1.txt");












