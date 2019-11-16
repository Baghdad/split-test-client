var fs = require('fs');

fs.readFile('./content/test1.txt', 'utf8', function(err, contents) {
  if (error) {
    console.error(`Error:${error}!!`);
  } else {
    console.log(`Content:${contents}!`);
    console.log('Content update: 14');
<<<<<<< HEAD
    console.log('Client update: 8');
=======
    console.log('Client update: 9');
>>>>>>> 92b8ca5987aba56e481b8f8a8d35667fd2424516
    console.log('Code update: 4');
  }
});
