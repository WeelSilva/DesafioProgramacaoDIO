let nomeDeHeroi = "Wellzinho";
let xpDeHeroi = 3000;

if (xpDeHeroi <= 1000) {
    console.log("O herói de nome " + nomeDeHeroi + " está no nivel de Ferro");
} else if (xpDeHeroi <= 2000) {
    console.log("O herói de nome " + nomeDeHeroi + " está no nivel de Bronze");
}
else if (xpDeHeroi <= 5000) {
    console.log("O herói de nome " + nomeDeHeroi + " está no nivel de Prata");
}
else if (xpDeHeroi <= 7000) {
    console.log("O herói de nome " + nomeDeHeroi + " está no nivel de Ouro");
}
else if (xpDeHeroi <= 8000) {
    console.log("O herói de nome " + nomeDeHeroi + " está no nivel de Platina");
}
else if (xpDeHeroi <= 9000) {
    console.log("O herói de nome " + nomeDeHeroi + " está no nivel de Ascendente");
}
else if (xpDeHeroi <= 10000) {
    console.log("O herói de nome " + nomeDeHeroi + " está no nivel de Imortal");
}
else if (xpDeHeroi >= 10001) {
    console.log("O herói de nome " + nomeDeHeroi + " está no nivel de Radiante");
}
else {
    console.log("O herói de nome " + nomeDeHeroi + " está no nivel de Inexistente");
}

