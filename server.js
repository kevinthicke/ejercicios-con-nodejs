const { scanf } = require('nodejs-scanf');

const randomNumber = (value) => {
    return new Promise((resolve, reject) => {
        if (typeof value == 'number') {
            const random = Math.floor(Math.random() * value);
            resolve(random);
        } else reject('the value must be an integer')
    });
}

const showResult = (value) => {
    randomNumber(value).then((result) => console.log(`Random number between 0 and ${value} is ${result}`))
                       .catch((err) => console.log(`Error: ${err}`));
}

console.log('Enter an integer:');
scanf('%d', showResult);