// Example code for testing.


// Function for squaring numbers from a string, if it can be parsed.
function parseThenSquare(input) {
    let num = Number.parseInt(input);
    if (!Number.isNaN(num)) {
        return num * num;
    } else {
        return null;
    }
}


// Export the function as a module.
module.exports = parseThenSquare;