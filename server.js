const scanf = require('scanf');
const fs = require('fs');

let filePath = scanf('%s');
filePath = './files/' + filePath;

fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) console.log('An error has ocurred');
    else console.log(data);
});


