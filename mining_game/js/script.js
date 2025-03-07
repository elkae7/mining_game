// Типы руды и их вероятности
const ores = [
    { name: "Камень 🪨", chance: 0.6, value: 1 },
    { name: "Уголь ⚫️", chance: 0.3, value: 2 },
    { name: "Железо ⚙️", chance: 0.07, value: 5 },
    { name: "Золото 🪙", chance: 0.02, value: 10 },
    { name: "Алмаз 💎", chance: 0.01, value: 50 }
];

// Счётчик монет
let coins = 0;

// Функция для добычи руды
function mineOre() {
    const results = [];
    for (let i = 0; i < 3; i++) {
        let random = Math.random();
        let cumulativeChance = 0;
        for (const ore of ores) {
            cumulativeChance += ore.chance;
            if (random < cumulativeChance) {
                results.push(ore.name);
                break;
            }
        }
    }
    return results;
}

// Обработка нажатия на кнопку
document.getElementById("mineButton").addEventListener("click", () => {
    const minedOres = mineOre();
    const minedCoins = minedOres.reduce((sum, oreName) => {
        const ore = ores.find(o => o.name === oreName);
        return sum + ore.value;
    }, 0);
    coins += minedCoins;
    document.getElementById("result").innerText = `Вы добыли: ${minedOres.join(", ")}`;
    document.getElementById("coins").innerText = `Монеты: ${coins}`;
});