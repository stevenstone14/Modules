const sqlite3 = require('sqlite3');

let database = new sqlite3.Database("Chinook_Sqlite.sqlite", function(error) {
    if (error) {
        console.log(`Failed to connect to Chinook database: ${error.message}`);
    } else {
        console.log("Connected to Chinook database.");
    }
});


// database.all("SELECT * FROM Album WHERE Title LIKE '%One%'", function (error, rows) {
//     if (error) {
//         console.log(`Failed to retrieve rows from Album table: ${error.message}`);
//     } else {
//         console.log(`Retrieved ${rows.length} rows from Album table.`);
//         rows.forEach(function (row) {
//             console.log(`${row.AlbumId} - ${row.Title}`);
//         });
//     }
// });

// database.each("SELECT TrackId, Name, Composer FROM Track", function (error, row) {
//     if (error) {
//         console.log(`Failed to retrieve a row from Track table: ${error.message}`);
//     } else {
//         console.log(`Track with ID ${row.TrackId} is ${row.Name} by ${row.Composer}`);
//     }
// });

// database.get("SELECT * FROM Track WHERE Name LIKE '%Tree%'", function (error, row) {
//     if (error) {
//         console.log(`Failed to retrieve a row from Track table: ${error.message}`);
//     } else if (row === undefined) {
//         console.log("Could not find a Track with 'Tree' in the name.");
//     } else {
//         console.log(`Track with ID ${row.TrackId} is ${row.Name} by ${row.Composer}`);
//     }
// });


// database.run("INSERT INTO Artist VALUES (276, 'John Farnham')", function (error) {
//     if (error) {
//         console.log(`Failed to add John Farnham to Artist table: ${error.message}`);
//     } else {
//         console.log("Successfully added John Farnham to Artist table.");
//     }
// });

database.run("INSERT INTO Album VALUES (348, 'Whispering Jack', 276), (349, 'Age of Reason', 276)", function (error) {
    if (error) {
        console.log(`Failed to add rows to Album table: ${error.message}`);
    } else {
        console.log("Successfully added Rows to Album table.");
    }
});


database.close();