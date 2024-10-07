class formaDeBolo {
    constructor(saborDaMassa, saborRecheio) {
    this.saborDaMassa = saborDaMassa;
    this.saborRecheio = saborRecheio;
}

    escrever() {
    console.log(`Um delicioso bolo de ${this.saborDaMassa} com recheio de ${this.saborRecheio}`
    );
}

    assar() {
    console.log(`O bolo de ${this.saborDaMassa} esta assando`);
}
}

let boloFesta = new formaDeBolo("chocolate", "nutella");
let boloPremium = new formaDeBolo("Baunilha", "morango");

boloFesta.escrever();
boloPremium.escrever();
boloPremium.assar();