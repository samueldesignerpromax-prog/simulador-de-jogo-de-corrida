const { getRandomNumber } = require("./utils");
const { getRandomItem } = require("./items");

function startRace(players) {
    console.log("🏁 Corrida iniciada!\n");

    while (true) {
        for (let player of players) {
            let move = getRandomNumber(player.speed) + 1;
            player.position += move;

            if (getRandomNumber(5) === 1) {
                player.item = getRandomItem();
                console.log(`${player.name} pegou um item: ${player.item}`);
            }

            if (player.item === "boost") {
                player.position += 2;
                console.log(`${player.name} usou BOOST 🚀`);
                player.item = null;
            }

            console.log(`${player.name} está na posição ${player.position}`);

            if (player.position >= 20) {
                console.log(`\n🏆 ${player.name} venceu a corrida!`);
                return;
            }
        }

        console.log("\n--- Próxima rodada ---\n");
    }
}

module.exports = { startRace };
