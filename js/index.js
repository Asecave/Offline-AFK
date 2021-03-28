const mineflayer = require("mineflayer");
const accounts = require("./accounts.json");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

normal = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'A', 'B', 'C', 'D', 'E', 'F']
key = ['B', '8', '1', '0', '6', '9', '4', '3', '5', 'C', 'E', '2', 'A', '7', 'F', 'D']

rl.question("Player name: ", function (name) {

    var un;
    var pw;

    for (i = 0; i < accounts.accounts.length; i++) {
        if (accounts.accounts[i].name == name) {
            un = deobfuscate(accounts.accounts[i].username.toString());
            pw = deobfuscate(accounts.accounts[i].password.toString());
            break;
        }
    }
    if (un == undefined) {
        console.log("Account not found.")
        rl.close();
        return;
    }

    var bot = mineflayer.createBot({
        host: "localhost",
        username: un,
        password: pw,
        version: false
    })
    bot.on("chat", function (username, message) {
        if (username === bot.username) return;
        bot.chat("Yo");
    });
    rl.close();
});

function hex2a(hexx) {
    var hex = hexx.toString();
    var str = '';
    for (var i = 0; (i < hex.length && hex.substr(i, 2) !== '00'); i += 2)
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    return str;
}

function deobfuscate(s) {
    var deobfuscated = "";
    for (si = 0; si < s.length; si++) {
        for (j = 0; j < key.length; j++) {
            if (key[j] == s[si]) {
                deobfuscated += normal[j];
            }
        }
    }
    return hex2a(deobfuscated);
}