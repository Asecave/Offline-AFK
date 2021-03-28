const mineflayer = require("mineflayer");
const accounts = require("./accounts.json");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

if (accounts.accounts.length == 0) {
    requestAccount();
}

rl.question("Player name: ", function (name) {
    var name;
    var pw;
    var bot = mineflayer.createBot({
        host: "localhost",
        username: name,
        password: pw,
        version: false
    })
    bot.on("chat", function (username, message) {
        if (username === bot.username) return;
        bot.chat("Yo");
    });
});

const key = ['B', '8', '1', '0', '6', '9', '4', '3', '5', 'C', 'E', '2', 'A', '7', 'F', 'D'];

function deobfuscate() {

}