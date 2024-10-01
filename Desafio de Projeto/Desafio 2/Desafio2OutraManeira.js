// Dados do herói
const hero = {
    name: "Deku",
    victories: 15,
    getLevel: function() {
        const rankLevels = [
            { min: 0, max: 9, rank: "Ferro" },
            { min: 10, max: 19, rank: "Bronze" },
            { min: 20, max: 49, rank: "Prata" },
            { min: 50, max: 69, rank: "Ouro" },
            { min: 70, max: 79, rank: "Platina" },
            { min: 80, max: 89, rank: "Ascendente" },
            { min: 90, max: 99, rank: "Imortal" },
            { min: 100, max: Infinity, rank: "Radiante" }
        ];

        // Encontrar o nível correspondente ao número de vitórias
        return rankLevels.find(level => this.victories >= level.min && this.victories <= level.max).rank;
    }
};

console.log(`O herói ${hero.name} tem saldo de ${hero.victories} vitórias e está no nível de ${hero.getLevel()}`);