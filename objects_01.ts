class Warrior {
    public readonly name: string;
    public readonly damage: number;
    public hitPoints: number;
 
    constructor(name: string, damage: number, hitPoints: number) {
        this.name = name;
        this.damage = damage;
        this.hitPoints = hitPoints;
    }
    attack(defender: Warrior):void {
        defender.hitPoints -= this.damage;
    }
}

class Battle {
    private teams: Warrior[][];
    private messages: Array<string>;
    constructor() {
        this.teams = [
            [new Warrior('Ланселот', 3, 25), new Warrior('Сокол', 3, 25), new Warrior('Храбрый рыцарь', 3, 25), new Warrior('Великий воин', 3, 25)],
            [new Warrior('Черная рука', 6, 20), new Warrior('Кривой рог', 6, 20), new Warrior('Головорез', 6, 20), new Warrior('Хромой', 6, 20)]
        ];
        this.messages= ['откусывает ухо', 'пинает по голове', 'отрубает палец на ноге', 'дергает за волосы', 'выбил зуб'];
    }

    run() {
        let attackTeam: Warrior[] = this.teams[0];
        let defendTeam: Warrior[] = this.teams[1];

        while (!this.isGameOver()) {
            const attacker = this.choose(attackTeam.filter(warrior => warrior.hitPoints > 0));
            const defender = this.choose(defendTeam.filter(warrior => warrior.hitPoints > 0));
            const msg = this.choose(this.messages);

            console.log(attacker.name, msg, defender.name, defender.hitPoints);
            attacker.attack(defender);

            [attackTeam, defendTeam] = [defendTeam, attackTeam];
        };
    }

    private choose <T> (array: T[]):T {
        const index = Math.floor(Math.random() * (array.length))
        return array[index];
    }

    private isGameOver() {
        let dead = this.teams[0].filter(e => e.hitPoints <= 0);
        if (dead.length == this.teams[0].length) {
            return true;
        }

        let dead2 = this.teams[1].filter(e => e.hitPoints <= 0); {
            if (dead2.length == this.teams[1].length) {
                return true;
            }
        }
    };
}

const gameFirst: Battle = new Battle();
gameFirst.run();
console.log('!!!Game1 закончена!!!');

const gameSecond: Battle = new Battle();
gameSecond.run();
console.log('!!!Game2 закончена!!!');

