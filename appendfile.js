var fs = require('fs');

//create a file named mynewfile1.txt:
fs.appendFile('mynewfile1.txt', 'I am a new file! xD', function (err) {
  if (err) throw err;
  console.log('created mynewfile.txt');
});
