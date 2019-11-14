var fs = require('fs');

fs.readFile('./content/test1.txt', 'utf8', function(err, contents) {
  if (error) {
    console.error(`Error:${error}!!`);
  } else {
    console.log(`Content:${contents}!`);
    console.log('Content update: 8');
    console.log('Client update: 4');
    console.log('Code update: 1');
  }
});
