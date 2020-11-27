module.exports = {
    name: 'salary',
    description: '',
    execute(message, args){
       let companyNameInLowerCase = args + "";
        let company = companyNameInLowerCase.charAt(0).toUpperCase() + companyNameInLowerCase.slice(1);
        console.log(company)
        message.channel.send(`https://www.levels.fyi/company/${company}/salaries/ , ${message.author}!`);
    }
}