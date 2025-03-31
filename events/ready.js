const { Client } = require('discord.js');

const TOKEN = "BOTUN TOKENİNİ BURAYA KOY"; // Tokenini buraya ekle

const client = new Client({
    intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS"]
});

client.once("ready", () => {
    console.log(`${client.user.tag} AKTİFLEŞTİRİRDİ!`);

    let durum = 0;
    setInterval(() => {
        if (durum === 0) {
            client.user.setActivity("HERHANGİ İSTEDİĞİNİZ BİR YAZI YAZABİLİRSİNİZ", { type: "PLAYING" });
        } else {
            client.user.setActivity(`${client.guilds.cache.size} Sunucu | ${client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)} Kullanıcı | <prefixiniz>yardım`, { type: "WATCHING" });
        }
        durum = 1 - durum; 
    }, 30000); // YARDIM KOMUTUNUZUN GÖRÜNME SÜRESİ İLE HERHANGİ İSTEDİĞİNİZ BİR YAZI YAZABİLİRİNİZİN ARASINDAKİ SÜREYİ BELİRLER İSTEDİĞİNİZ SÜRENİN SADİSE SAYSIINI HESAPLAYIP BURAYA 30000 YAZAN YERE YAPIŞTIRIN DEĞİŞTİRİP DEĞİŞTİRMEMEK SİZE KALMIŞ
});

client.login(TOKEN);