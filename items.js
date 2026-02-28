const items = ["casco", "banana", "boost"];

function getRandomItem() {
    return items[Math.floor(Math.random() * items.length)];
}

module.exports = { getRandomItem };
