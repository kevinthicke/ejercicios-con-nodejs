const fs = require('fs');
const scanf = require('scanf');

console.log('Enter file Name: ')
let fileName = scanf('%s');


const showContent = (fileName) => {
    return new Promise ( (resolve, reject) => {   
        const callback = (err, data) => {
            if (err) reject(`ERROR: the file <<${fileName}>> does not exist`);
            else {
                let vectorOfWords = data.split(' ');
                resolve(vectorOfWords);
            }
        }
        fs.readFile('./files/' + fileName, 'utf-8', callback);
    });
}

const writeFile = (data) => {
    let content = '';
    data.forEach(element => content += element + '\n');

    fs.writeFile(`files/copy${fileName}`, content, err => {
        if (err) console.log(`ERROR: I can not write a new file`);
        else console.log(`The file has been written successfully`)
    });
}

showContent(fileName).then(result => writeFile(result) , err => console.log(err));
