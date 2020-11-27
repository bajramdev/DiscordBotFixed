const Discord = require('discord.js');
const fs = require('fs');
const { token , prefix} = require('./config.json');
const { company  , tradera} = require('./company.json');
const client = new Discord.Client();
client.commands = new Discord.Collection();


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


function firstnameJigger(name, num) {

    let randomInt =  Math.floor(Math.random() * Math.floor(30)) + 1;

    let alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','Å','Ä','Ö'];
    let newarr =  alphabet.join("");
    let ar = newarr.substring(randomInt, randomInt + num)
    let fullAr =  name + `${ar} `;
    console.log(fullAr);
}






     client.on('message', message => {
         if (!message.content.startsWith(prefix) || message.author.bot) return;

         const args = message.content.slice(prefix.length).trim().split(' ');
         const command = args.shift().toLowerCase();

         if (!client.commands.has(command)) return;

         try {
             client.commands.get(command).execute(message,args);
         } catch (e) {
             console.log(e);
             message.reply("This didnt work you fucking retard");
         }



         // the rest of your code
/*
         if (command === 'salary') {
             if (!args.length) {
                 return message.channel.send(`You didnt provide any arguments, ${message.author}!`);
             }

     //    if (command === 'salary' && args[0] === `apple`){
       //      return message.channel.send(`https://www.levels.fyi/salary/${company.apple}/ , ${message.author}!`);
        // }

         //if (command === 'salary' && dotTrick(`${args[0]}`)){
           //      return message.channel.send(`${dotTrick(args[0])}`);
         //}

             if (command === 'salary' && dotTrick(`${args[0]}`)){
                   return message.channel.send(`${dotTrick(args[0])}`);
             }

             if (command === 'salary' && firstnameJigger(`${args[0]}`)){
                 return message.channel.send(`${firstnameJigger(args[0])} ${args[1]}`);

             }

             if (command === 'do' && args[0].length === 13 ){
                 return message.channel.send(`https://www.bokus.com/bok/${args[0]}`)
             } else {
                 return message.channel.send(`Your input is not a valid ISBN number, ${message.author}!`);
             }

         if (command === 'tradera' && args[0] === `pikachu`){
             return message.channel.send(`https://www.tradera.com/search?q=${tradera.pikachu}&categoryId=293307 , ${message.author} ! `  );
         }

         //message.channel.send(`First argument: ${args[0]}`);

         }
*/
     })


client.login(token);

/*

if (message.content.startsWith(`${prefix}ping`)) {
    message.channel.send('Pong!');
} else if (message.content.startsWith(`${prefix}Jimmy`)) {
    message.channel.send('Jazz!');
} else if (message.content.startsWith(`${prefix}server`)){
    message.channel.send(`This server's name is : ${message.guild.name} \n
        This server has member count: ${message.guild.memberCount}`)  }
else if (message.content.startsWith(`${prefix}user`)){
    message.channel.send(`Your username : ${message.author.username}\n Your ID: ${message.author.id}`);
}
*/