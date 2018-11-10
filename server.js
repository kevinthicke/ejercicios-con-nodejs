const { scanf } = require('nodejs-scanf');

const randomNumber = (value) => {
    const random = Math.floor(Math.random() * value);
    console.log(random);
}

scanf('%d', randomNumber);