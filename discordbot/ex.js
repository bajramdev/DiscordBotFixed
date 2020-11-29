const fs = require('fs');

async function execute(message, name, num){


    for (let i = 0; i < 10; i++) {

        let randomInt = Math.floor(Math.random() * Math.floor(30)) + 1;

        let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'Å', 'Ä', 'Ö'];
        let newarr = alphabet.join("");
        let ar = newarr.substring(randomInt, randomInt + num)
        let fullAr = name + `${ar} `;

        let newArr = []

        newArr.push(fullAr);

        fs.appendFileSync('name.txt', `${newArr.join('')}\n`);

        const path = "name.txt";
        var content = fs.readFileSync(path, 'utf-8');
    }

    await message.author.send({
        files: ['name.txt']
    });
}