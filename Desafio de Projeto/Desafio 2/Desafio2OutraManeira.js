// Dados do herói
let nameHero = "Goku";
let victories = 101;

// Função para obter o nível baseado nas vitórias
function getHeroLevel(victories) {
    switch (true) {
        case (victories < 10):
            return "Ferro";
        case (victories < 20):
            return "Bronze";
        case (victories < 50):
            return "Prata";
        case (victories < 70):
            return "Ouro";
        case (victories < 80):
            return "Platina";
        case (victories < 90):
            return "Ascendente";
        case (victories < 100):
            return "Imortal";
        default:
            return "Radiante";
    }
}

console.log(`O herói ${nameHero} tem saldo de ${victories} vitórias e está no nível de ${getHeroLevel(victories)}`);
