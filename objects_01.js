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

const messages = ['откусывает ухо', 'пинает по голове', 'отрубает палец на ноге', 'дергает за волосы', 'выбил зуб'];

let player1 = new Warrior('Ланселот', 3, 25, 'attackTeam');
let player2 = new Warrior('Сокол', 3, 25, 'attackTeam');
let player3 = new Warrior('Храбрый рыцарь', 3, 25, 'attackTeam');
let player4 = new Warrior('Великий воин', 3, 25, 'attackTeam');

let player5 = new Warrior('Черная рука', 6, 20, 'defendTeam');
let player6 = new Warrior('Кривой рог', 6, 20, 'defendTeam');
let player7 = new Warrior('Головорез', 6, 20, 'defendTeam');
let player8 = new Warrior('Хромой', 6, 20, 'defendTeam');

let attackTeam = [player1, player2, player3, player4];
let defendTeam = [player5, player6, player7, player8];

class Battle {
    constructor() {
        this.attackTeam = [player1, player2, player3, player4];
        this.defendTeam = [player5, player6, player7, player8];
        this.messages = messages;
        this.teams = [attackTeam, defendTeam];
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
console.log('game1 закончена');

let game2 = new Battle();
game2.run();
console.log('game2 закончена');