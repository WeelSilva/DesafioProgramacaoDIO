// Definindo os limites de XP e seus respectivos títulos
function definirTituloPorXP(xp) {
    if (xp <= 1000) {
        return "Ferro";
    } else if (xp <= 2000) {
        return "Bronze";
    } else if (xp <= 5000) {
        return "Prata";
    } else if (xp <= 7000) {
        return "Ouro";
    } else if (xp <= 8000) {
        return "Platina";
    } else if (xp <= 9000) {
        return "Ascendente";
    } else if (xp <= 10000) {
        return "Imortal";
    } else {
        return "Radiante";
    }
}

// Dados do herói
let nomeDeHeroi = "Wellzinho";
let xpDeHeroi = 3000;

// Chama a função para obter o título
let nivelDeHeroi = definirTituloPorXP(xpDeHeroi);

// Exibe o resultado no console
console.log(`O herói de nome ${nomeDeHeroi} está no nível de ${nivelDeHeroi}`);