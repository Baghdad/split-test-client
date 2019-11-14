var fs = require('fs');

fs.readFile('./content/test1.txt', 'utf8', function(err, contents) {
  if (error) {
    console.error(`Error:${error}!!`);
  } else {
    console.log(`Content:${contents}!`);
    console.log('Very very special string from code!');
    console.log('Just to be sure (not) (maybe actually yes)');
    console.log('MOAR');
  }
});
