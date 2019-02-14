const Discord = require("discord.js"); 
const client = new Discord.Client();
const bot = new Discord.Client({disableEveryone: true});
const Canvas = require('canvas') 
const fs = module.require("fs"); 
const r1 = require('snekfetch'); 
const prefix = '#'


//var يعني تختصر للحاجه زي منا عامل كدة




var mo = "الفلوس"
var po = "النقاط"
var lev = "الفل"


client.on("ready", async () => { // كل حاجه هتتفح لما البوت يشتغل

    console.log(`I'm Online \n By ${copy}`) // الي هيظهر في الكونسل
    console.log(`Logged in as ${bot.user.tag}!`); // نفس الي فوق

    bot.user.setGame(`${bot.users.size} users `,"http://twitch.tv/Lorans") 
    bot.user.setStatus("IdIe")

}); // نهايه الكود



const credits = JSON.parse(fs.readFileSync("./creditsCode.json", "utf8"));
const coolDown = new Set();

client.on('message',async message => {
    
if(message.author.bot) return;
if(!credits[message.author.id]) credits[message.author.id] = {
    credits: 50
};

let userData = credits[message.author.id];
let m = userData.credits;

fs.writeFile("./creditsCode.json", JSON.stringify(credits), (err) => {
    if (err) console.error(err);
  });
  credits[message.author.id] = {
      credits: m + 0.5,
  }
  
    if(message.content.startsWith(prefix + "credit" || prefix + "credits")) {
message.channel.send(`**${message.author.username}, your :credit_card: balance is \`\`${userData.credits}\`\`.**`);
}
});

client.on('message', async message => {
    let amount = 250;
    if(message.content.startsWith(prefix + "daily")) {
    if(message.author.bot) return;
    if(coolDown.has(message.author.id)) return message.channel.send(`**:stopwatch: | ${message.author.username}, your daily :yen: credits refreshes in \`\`1 Day\`\`.**`);
    
    let userData = credits[message.author.id];
    let m = userData.credits + amount;
    credits[message.author.id] = {
    credits: m
    };

    fs.writeFile("./creditsCode.json", JSON.stringify(userData.credits + amount), (err) => {
    if (err) console.error(err);
    });
    
    message.channel.send(`**:atm: | ${message.author.username}, you received your :yen: ${amount} credits!**`).then(() => {
        coolDown.add(message.author.id);
    });
    
    setTimeout(() => {
       coolDown.remove(message.author.id);
    },86400000);
    }
});
client.login(process.env.BOT_TOKEN);
