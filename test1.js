var fs = require('fs');

fs.readFile('./content/test1.txt', 'utf8', function(err, contents) {
  if (error) {
    console.error(`Error:${error}!!`);
  } else {
    console.log(`Content:${contents}!`);
    console.log('Content update: 12');
    console.log('Client update: 8');
    console.log('Code update: 4');
  }
});
