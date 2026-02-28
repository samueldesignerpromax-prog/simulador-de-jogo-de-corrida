class Player {
    constructor(name) {
        this.name = name;
        this.position = 0;
        this.speed = 3 + Math.floor(Math.random() * 3);
        this.item = null;
    }
}

module.exports = Player;
