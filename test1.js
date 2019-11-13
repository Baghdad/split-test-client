var fs = require('fs');

fs.readFile('./content/test1.txt', 'utf8', function(err, contents) {
  if (error) {
    console.error(`Error:${error}!!1`);
  } else {
    console.log(`Content:${contents}!!1`);
  }
});
