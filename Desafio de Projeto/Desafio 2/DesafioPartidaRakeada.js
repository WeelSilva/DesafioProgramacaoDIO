//calculadora de partidas rankeadas

//dados do heroi
let nameHero = "Deku";
let level = 1;
let victories = 15;

//chama a função para obter o nivel
function levelUp(victories){
    if(victories < 10){
        return "Ferro";
    } else if(victories < 20){
        return "Bronze";
    } else if(victories < 50){
        return "Prata";
    } else if(victories < 70){
        return "Ouro";
    } else if(victories < 80){
        return "Platina";
    } else if(victories < 90){
        return "Ascendente";
    } else if(victories < 100){
        return "Imortal";
    } else {
        return "Radiante";
    }
}

console.log(`O herói tem saldo de ${victories} vitórias e está no nível de ${levelUp(victories)}`);