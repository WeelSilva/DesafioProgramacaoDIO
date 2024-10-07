class heroi {
    constructor(name, age, type) {
    this.name = name;
    this.age = age;
    this.type = type;
}

    toAttack() {
    let attack;

    switch (this.type) {
    case "Mago":
        attack = "magia";
        console.log(`O ${this.type} atacou usando ${attack}!\n`);
        break;

    case "Guerreiro":
        attack = "espada";
        console.log(`O ${this.type} atacou usando ${attack}!\n`);
        break;

    case "Monge":
        attack = "soco";
        console.log(`O ${this.type} atacou usando ${attack}!\n`);
        break;

    case "Ninja":
        attack = "chute";
        console.log(`O ${this.type} atacou usando ${attack}!\n`);
        break;
    }
}
}

const heroi1 = new heroi("Well", 82, "Mago");
const heroi2 = new heroi("Rachel", 36, "Guerreiro");
const heroi3 = new heroi("Gaby", 139, "Monge");
const heroi4 = new heroi("Diego", 28, "Ninja");

heroi1.toAttack();
heroi2.toAttack();
heroi3.toAttack();
heroi4.toAttack();