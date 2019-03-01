const Discord = require("discord.js"); 
const client = new Discord.Client();
const bot = new Discord.Client({disableEveryone: true});
const canvas = require('canvas') 
const fs = module.require("fs"); 
const r1 = require('snekfetch'); 
const prefix = '#'


//var يعني تختصر للحاجه زي منا عامل كدة


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});






client.on('message', message => {

if (message.content.startsWith("#p")) { // الامر
    let getvalueof = msg.mentions.users.first() || msg.author;

    let res = await SQLite.get(`SELECT * FROM profileSystem WHERE id = ${getvalueof.id}`)

    if(!res) SQLite.run(`INSERT INTO profileSystem VALUES ('${msg.author.id}', 200, 0, ${xp}, 0, 0, 0, "Type ${prefix}setinfo to set info", "{}", "{wallSrc: '/walls/p2.png'}"`)


    let Image = Canvas.Image,
    canvas = Canvas.createCanvas(300, 300),
    ctx = canvas.getContext('2d');
fs.readFile(__dirname + `/${JSON.parse(res.profileData).wallSrc}`, function (err, Background) {
  fs.readFile(__dirname + `/walls/p1.png`, function (err, Background) {
  if (err) return console.log(err);
  let BG = Canvas.Image;
  let ground = new Image;
  ground.src = Background;
  ctx.drawImage(ground, 0, 0, 297, 305);
});
  if (err) return console.log(err);
  let BG = Canvas.Image;
  let ground = new Image;
  ground.src = Background;
  ctx.drawImage(ground, 0, 0, 300, 305);
});


let url = getvalueof.displayAvatarURL.endsWith(".webp") ? getvalueof.displayAvatarURL.slice(5, -20) + ".png" : getvalueof.displayAvatarURL;
Jimp.read(url, (err, ava) => {
    if (err) return console.log(err);
    ava.getBuffer(Jimp.MIME_PNG, async (err, buf) => {
        if (err) return console.log(err);


        //Avatar
       let Avatar = Canvas.Image;
        let ava = new Avatar;
        ava.src = buf;
     ctx.drawImage(ava, 8, 43, 80, 85); // احداثيات صورتك

        //ur name
        ctx.font = 'bold 16px profile'; // حجم الخط و نوعه
        ctx.fontSize = '40px'; // عرض الخط
        ctx.fillStyle = "#FFFFFF"; // لون الخط
        ctx.textAlign = "left"; // محاذا ة النص
        ctx.fillText(`${getvalueof.username}`, 100, 125) // احداثيات اسمك

         //bord
         let leaderboard = await SQLite.all(`SELECT * FROM profileSystem ORDER BY xp DESC, credits DESC`);
        ctx.font = "regular 12px profile" // نوع الخط وحجمه
        ctx.fontSize = '50px'; // عرض الخط
        ctx.fillStyle = "#FFFFFF" // لون الخط
        ctx.textAlign = "left"; // محاذا ة
        for(var i = 0;i<leaderboard.length;i++) {
          if(leaderboard[i].id == getvalueof.id) {
            ctx.fillText(`#${i+1}`, 173, 200)
          }
        }


        //credit
        ctx.font = "bold 10px profile" // نوع الخط وحجمه
        ctx.fontSize = '10px'; // عرض الخط
        ctx.fillStyle = '#FFFFFF' // لون الخط
        ctx.textAlign = "left"; // محاذا ة النص
        ctx.fillText(`$ ${res.credits}`, 156, 163) // احداثيات المصاري

        //poits
        ctx.font = "bold 13px profile" // ن
        ctx.fontSize = '10px'; // عرض الخطوع الخط وحجمه
        ctx.fillStyle = "#FFFFFF" // لون الخط
        ctx.textAlign = "left"; // محاذا ة النص
        ctx.fillText(`${res.xp}`, 173, 182) // احداثيات النقاط

        //Level
        ctx.font = "bold 27px profile" // نوع الخط و حجمه
        ctx.fontSize = '50px'; // عرض الخط
        ctx.fillStyle = "#FFFFFF" // لون الخط
        ctx.textAlign = "left"; // محاذا ة النص
        ctx.fillText(`${res.level}`, 30, 200) // احداثيات اللفل

        //info
        ctx.font = "blod 13px profile" // ن
        ctx.fontSize = '10px'; // عرض الخطوع الخط وحجمه
        ctx.fillStyle = "#FFFFFF" // لون الخط
        ctx.textAlign = "left"; // محاذا ة النص
        ctx.fillText(`${res.info}`, 118, 40) // احداثيات النقاط

        // REP
        ctx.font = "bold 27px profile";
        ctx.fontSize = "100px";
        ctx.fillStyle = "#FFFFFF";
        ctx.textAlign = "left";
        ctx.fillText(`+${res.rep}`, 18,270)

msg.channel.send("**:white_check_mark: `Show Profile` ➤**" + `${msg.author}`, {
file: canvas.toBuffer()
})
})
})


  }

});

client.login(process.env.BOT_TOKEN);
