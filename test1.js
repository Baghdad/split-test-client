var fs = require('fs');

fs.readFile('./content/test1.txt', 'utf8', function(err, contents) {
  if (error) {
    console.error(`Error:${error}!!`);
  } else {
    console.log(`Content:${contents}!`);
<<<<<<< HEAD
    console.log('Special string from code');
=======
    console.log('Very special string from code!');
>>>>>>> b4bcdfc7c1e8f7396bfafe1a0eb47b8ce1a42b2f
  }
});
