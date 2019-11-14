var fs = require('fs');

fs.readFile('./content/test1.txt', 'utf8', function(err, contents) {
  if (error) {
    console.error(`Error:${error}!!`);
  } else {
    console.log(`Content:${contents}!`);
    console.log('Very very special string from code!');
    console.log('Just to be sure (not) (maybe actually yes)');
<<<<<<< HEAD
    console.log('MOAR from content 3 and from client');
=======
<<<<<<< HEAD
    console.log('MOAR from content 3');
=======
    console.log('MOAR from content 3 and from client');
>>>>>>> f708e02cc36d055a6546f33e7d24ab4ea6e674b6
>>>>>>> 555c4a761e85857bbe5d6bb4898570f93dc16503
  }
});
