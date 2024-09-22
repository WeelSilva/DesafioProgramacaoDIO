let nomeDeHeroi = "Wellzinho";
let xpDeHeroi = 3000;

if (xpDeHeroi <= 1000) {
    xpDeHeroi = "Ferro";
} else if (xpDeHeroi <= 2000) {
    xpDeHeroi = "Bronze";
} else if (xpDeHeroi <= 5000) {
    xpDeHeroi = "Prata";
} else if (xpDeHeroi <= 7000) {
    xpDeHeroi = "Ouro";
} else if (xpDeHeroi <= 8000) {
    xpDeHeroi = "Platina";
} else if (xpDeHeroi <= 9000) {
    xpDeHeroi = "Ascendente";
} else if (xpDeHeroi <= 10000) {
    xpDeHeroi = "Imortal";
} else if (xpDeHeroi >= 10001) {
    xpDeHeroi = "Radiante";
} else {
    xpDeHeroi = "Inexistente";
}

console.log("O herói de nome " + nomeDeHeroi + " está no nivel de " + xpDeHeroi
);
