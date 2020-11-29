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

            var newArr = []

            newArr.push(editedMail);

            var stream =  fs.createWriteStream ("MailLista.txt" , {flags: 'a'});
            [...newArr].forEach(function (item) {
                stream.write(item + "\n");
            })
        }
            fs.readFile('C:\\Users\\Bajra\\WebstormProjects\\untitled28\\discordbot\\MailLista.txt', 'utf8',  (err, data) => {
            if (data) {
                fs.truncate('C:\\Users\\Bajra\\WebstormProjects\\untitled28\\discordbot\\MailLista.txt', 0, function(){console.log('done')})
            } else if (err) {
                console.log(err)
            }
       });

       await message.author.send({
                 files: ['MailLista.txt']
             });
            stream.end();
    }
}