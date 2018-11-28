var Imap = require('imap'),
    inspect = require('util').inspect;
var fs = require('fs'), fileStream;
const readline = require('readline');
var email;

var password;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

rl.question('Type in your email ', (email) => {
    rl.question('Type in your password ', (password) => {
        var imap = new Imap({
            user: email,
            password: password,
            host: 'imap.gmail.com',
            port: 993,
            tls: true
        });
    });
});
