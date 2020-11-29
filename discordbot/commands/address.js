const fs = require('fs');

module.exports = {

    name: 'jig',
    description: '',
   async execute(message, address, num){

        for(let i = 0; i < 10; i++) {
            let a = address.join(" ");
            console.log(a)
            let randomInt = Math.floor(Math.random() * Math.floor(30)) + 3;
            console.log(a)
            let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'Å', 'Ä', 'Ö'];
            console.log(a)
            let newarr = alphabet.join("");
            console.log(a)
            let ar = newarr.substring(randomInt, randomInt + 3);
            console.log(ar)
            let fullAr = `${ar} ` + a

            let newArr = []

            newArr.push(fullAr);

            fs.appendFileSync('address.txt', `${newArr.join('')}\n`);

            const path = "address.txt";
            var content = fs.readFileSync(path, 'utf-8');
        }

        await message.author.send({
            files: ['address.txt']
        });

    }

}