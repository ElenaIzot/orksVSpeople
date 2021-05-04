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
        this.teams = [
            [new Warrior('Ланселот', 3, 25), new Warrior('Сокол', 3, 25), new Warrior('Храбрый рыцарь', 3, 25), new Warrior('Великий воин', 3, 25)],
            [new Warrior('Черная рука', 6, 20), new Warrior('Кривой рог', 6, 20), new Warrior('Головорез', 6, 20), new Warrior('Хромой', 6, 20)]
        ]

        this.messages = ['откусывает ухо', 'пинает по голове', 'отрубает палец на ноге', 'дергает за волосы', 'выбил зуб']

    }

    run() {
        while (!this._isGameOver()) {
            const attackTeam = this.teams[0];
            const defendTeam = this.teams[1];
            const attacker = this._choose(attackTeam);
            const defender = this._choose(defendTeam);
            const msg = this._choose(this.messages);
            let currentTeam = this._choose([attacker, defender]);

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
        let dead = this.teams[0].filter(e => e.hitPoints <= 0);
        if (dead.length == this.teams[0].length) {
            return true;
        }

        let dead2 = this.teams[1].filter(e => e.hitPoints <= 0); {
            if (dead2 == this.teams[1].length) {
                return true;
            }
        }
    };

    _isWinner() {
        let winner1 = this.teams[0].filter(e => e.hitPoints < 0);
        if (winner1.length == this.teams[0]) {
            console.log("Победила" + this.teams[0])
        }
    };
}

let game1 = new Battle();
game1.run();
console.log('!!!Game1 закончена!!!');

let game2 = new Battle();
game2.run();
console.log('!!!Game2 закончена!!!');