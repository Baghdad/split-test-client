var fs = require('fs');

fs.readFile('./content/test1.txt', 'utf8', function(err, contents) {
  if (error) {
    console.error(error);
  } else {
    console.log(`Content:${contents}`);
  }
});
