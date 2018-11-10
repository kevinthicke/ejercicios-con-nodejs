const { scanf } = require('nodejs-scanf');


const randomNumber = (value) => {
    return new Promise((resolve, reject) => {
        if (typeof value == 'number') {
            const random = Math.floor(Math.random() * value);
            resolve(random);
        } else reject('the value must be an integer')
    });
}

randomNumber('Hola').then((result) => console.log(result))
                    .catch((err) => console.log(`Error: ${err}`));