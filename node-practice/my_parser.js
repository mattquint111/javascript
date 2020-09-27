// Load the fs (filestystem) module
var fs = require('fs');
// Read the contents of the file into memory
fs.readFile('example_log.txt', function (err, logData) {
    // If an error occured throwing it will display the exception and end the app.
    if (err) throw err;
    // logData is a buffer, convert to a string.
    var text = logData.toString();
// break up the file into lines.
    var lines = text.split('\n');
lines.forEach(function(line) {
    var parts = line.split(' ');
    var letter = parts(1);
    var count = parseInt(parts(2));
if(!results[letter]) {
    results[letter] = 0;
    }
results[letter] += parseInt(count);
});
console.log(results);
});