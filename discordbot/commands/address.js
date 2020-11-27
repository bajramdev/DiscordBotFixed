module.exports = {

    name: 'jig',
    description: '',
    execute(message, address, num){
        let a = address.join(" ");
        console.log(a )
        let randomInt =  Math.floor(Math.random() * Math.floor(30)) + 3;
        console.log(a )
        let alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','Å','Ä','Ö'];
        console.log(a )
        let newarr =  alphabet.join("");
        console.log(a )
        let ar = newarr.substring(randomInt, randomInt + 3);
        console.log(ar )
        let fullAr = `${ar} ` + a


        message.channel.send(`${fullAr} ${message.author}!`);





    }

}