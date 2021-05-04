var Warrior = /** @class */ (function () {
    function Warrior(name, damage, hitPoints) {
        this.name = name;
        this.damage = damage;
        this.hitPoints = hitPoints;
    }
    Warrior.prototype.attack = function (defender) {
        defender.hitPoints -= this.damage;
    };
    return Warrior;
}());
var Battle = /** @class */ (function () {
    function Battle() {
        this.teams = [
            [new Warrior('Ланселот', 3, 25), new Warrior('Сокол', 3, 25), new Warrior('Храбрый рыцарь', 3, 25), new Warrior('Великий воин', 3, 25)],
            [new Warrior('Черная рука', 6, 20), new Warrior('Кривой рог', 6, 20), new Warrior('Головорез', 6, 20), new Warrior('Хромой', 6, 20)]
        ];
        this.messages = ['откусывает ухо', 'пинает по голове', 'отрубает палец на ноге', 'дергает за волосы', 'выбил зуб'];
    }
    Battle.prototype.run = function () {
        var _a;
        var attackTeam = this.teams[0];
        var defendTeam = this.teams[1];
        while (!this.isGameOver()) {
            var attacker = this.choose(attackTeam.filter(function (warrior) { return warrior.hitPoints > 0; }));
            var defender = this.choose(defendTeam.filter(function (warrior) { return warrior.hitPoints > 0; }));
            var msg = this.choose(this.messages);
            console.log(attacker.name, msg, defender.name, defender.hitPoints);
            attacker.attack(defender);
            _a = [defendTeam, attackTeam], attackTeam = _a[0], defendTeam = _a[1];
        }
        ;
    };
    Battle.prototype.choose = function (array) {
        var index = Math.floor(Math.random() * (array.length));
        return array[index];
    };
    Battle.prototype.isGameOver = function () {
        var dead = this.teams[0].filter(function (e) { return e.hitPoints <= 0; });
        if (dead.length == this.teams[0].length) {
            return true;
        }
        var dead2 = this.teams[1].filter(function (e) { return e.hitPoints <= 0; });
        if (dead2.length == this.teams[1].length) {
            return true;
        }
    };
    ;
    return Battle;
}());
var gameFirst = new Battle();
gameFirst.run();
console.log('!!!Game1 закончена!!!');
var gameSecond = new Battle();
gameSecond.run();
console.log('!!!Game2 закончена!!!');
