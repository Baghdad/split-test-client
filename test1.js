var fs = require('fs');

fs.readFile('./content/test1.txt', 'utf8', function(err, contents) {
    console.log(contents);
});
