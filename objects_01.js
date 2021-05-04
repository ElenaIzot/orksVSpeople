'use strict'

class Warrior {
    constructor(name, damage, hitPoints) {
        this.name = name;
        this.damage = damage;
        this.hitPoints = hitPoints;
    }
    attack(defender) {
        defender.hitPoints -= this.damage;
    }
}

class Battle {
    constructor() {
        this.player1 = new Warrior('Ланселот', 3, 25);
        this.player2 = new Warrior('Сокол', 3, 25);
        this.player3 = new Warrior('Храбрый рыцарь', 3, 25);
        this.player4 = new Warrior('Великий воин', 3, 25);

        this.player5 = new Warrior('Черная рука', 6, 20);
        this.player6 = new Warrior('Кривой рог', 6, 20);
        this.player7 = new Warrior('Головорез', 6, 20);
        this.player8 = new Warrior('Хромой', 6, 20);

        this.attackTeam = [this.player1, this.player2, this.player3, this.player4];
        this.defendTeam = [this.player5, this.player6, this.player7, this.player8];
        this.messages = ['откусывает ухо', 'пинает по голове', 'отрубает палец на ноге', 'дергает за волосы', 'выбил зуб'];
        this.teams = [this.attackTeam, this.defendTeam];
    }

    run() {
        while (!this._isGameOver()) {
            const attacker = this._choose(this.attackTeam)
            const defender = this._choose(this.defendTeam)
            const msg = this._choose(this.messages)
            let currentTeam = this._choose(this.teams);

            if (currentTeam === attacker) {
                console.log(attacker.name, msg, defender.name, defender.hitPoints)
                defender.hitPoints -= attacker.damage;
                currentTeam = defender;
            } else {
                console.log(defender.name, msg, attacker.name, attacker.hitPoints)
                attacker.hitPoints -= defender.damage;
                currentTeam = attacker;
            }
        };
    }

    _choose(array) {
        const index = Math.floor(Math.random() * (array.length))
        return array[index];
    }

    _isGameOver() {
        let dead = this.attackTeam.filter(e => e.hitPoints <= 0);
        if (dead.length == this.attackTeam.length) {
            return true;
        }

        let dead2 = this.defendTeam.filter(e => e.hitPoints <= 0); {
            if (dead2 == this.defendTeam.length) {
                return true;
            }
        }
    };
}

let game1 = new Battle();
game1.run();
console.log('!!!Game1 закончена!!!');

let game2 = new Battle();
game2.run();
console.log('!!!Game2 закончена!!!');