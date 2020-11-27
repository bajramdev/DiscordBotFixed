const fs = require('fs');

module.exports = {

    name: 'dot',
    description: '',
   async execute(message, args){
        let a = args + "";

        for (let i = 0; i < 10; i++) {
            let mail = a.split('');
            let arr = mail.lastIndexOf("@", mail.length - 1).valueOf();

            let removed = mail.splice(arr, 10); // @gmail.com

            // add . inside random element
            let randomNumber = Math.floor(Math.random() * Math.floor(mail.length) + 1);
            let bajram = mail.join("")

            let randomNum2 = Math.floor(Math.random() * Math.floor(10)) + 1;
            let emptArr = [];

            for (let i = 0; i < randomNum2; i++) {
                emptArr.push('.');
            }

            let dots = emptArr.join('');

            for (let i = 0; i < mail.length; i++) {
                var randomStr = bajram.substr(0, randomNumber) + dots + bajram.substr(randomNumber);
            }
            let editedMail = randomStr.concat(removed.join(''));

            let newArr = []

            newArr.push(editedMail);

            fs.appendFileSync('emailList.txt', `${newArr.join('')}\n`);

            const path = "emailList.txt";
            var content = fs.readFileSync(path, 'utf-8');

        }
             await message.author.send({
                 files: ['emailList.txt']
             });
    }
}