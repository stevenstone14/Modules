const employees = [{
    "id":1,
    "firstName":"John",
    "lastName":"Smith",
    "gender":"Male",
    "age":23,
    "position":"Manager"
},
{
    "id":2,
    "firstName":"Mary",
    "lastName":"Sue",
    "gender":"Female",
    "age":32,
    "position":"Salesperson"
},
{
    "id":3,
    "firstName":"Fred",
    "lastName":"Jones",
    "gender":"Non-Binary",
    "age":54,
    "position":"Salesperson"
},
{
    "id":4,
    "firstName":"Jane",
    "lastName":"Doe",
    "gender":"Female",
    "age":41,
    "position":"Accountant"
},
{
    "id":5,
    "firstName":"Joe",
    "lastName":"Bloggs",
    "gender":"Male",
    "age":65,
    "position":"IT Administrator"
}];


function findSpecificPosition(){
    const x = employees.filter((obj,index) => employees.findIndex(item => item.position === obj.position ) === index);
    x.forEach(item=>console.log(item.id));
}

findSpecificPosition();

// const f = [{
//     "airline": "QF",
//     "source_airport": "KNX",
//     "source_airport_id": 3347,
//     "destination_airport": "BME",
//     "destination_airport_id": 4319,
//     "codeshare": true,
//     "aircraft": ["Embraer 170"],
//     "airline_name": "Qantas",
//     "airline_country": "Australia"
//   }]

//   const a = [
//     {
//         "id": 3347,
//         "name": "Kununurra Airport",
//         "city": "Kununurra",
//         "country": "Australia",
//         "iata": "KNX",
//         "latitude": -15.7781000137,
//         "longitude": 128.707992554,
//         "altitude": 145,
//         "timezone": 8
//       },{
//         "id": 4319,
//         "name": "Broome International Airport",
//         "city": "Broome",
//         "country": "Australia",
//         "iata": "BME",
//         "latitude": -17.9447002410889,
//         "longitude": 122.232002258301,
//         "altitude": 56,
//         "timezone": 8
//       }
//   ]



//     const x = f.map((ff) => {
//       const newFF = Object.assign({}, ff);
//       const sourceA = a.filter((obj, index)=> a.findIndex(item => item.id === obj.source_airport_id) === index)
//       console.log(sourceA);
//     });

    