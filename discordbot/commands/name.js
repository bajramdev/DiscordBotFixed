module.exports = {

    name: 'name',
    description: '',
    execute(message, name, num){

        let randomInt =  Math.floor(Math.random() * Math.floor(30)) + 1;

        let alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','Å','Ä','Ö'];
        let newarr =  alphabet.join("");
        let ar = newarr.substring(randomInt, randomInt + num)
        let fullAr =  name + `${ar} `;

        message.channel.send(`${fullAr} ${message.author}!`);
    }
}