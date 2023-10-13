// Primeiro Exemplo
let nomeHeroi = "Danilo rei dos Piratas";
let xp = 7116;

let nivelDoHeroi =
  xp < 1000
    ? "Ferro"
    : xp >= 1001 && xp <= 2000
    ? "Bronze"
    : xp >= 2001 && xp <= 5000
    ? "Prata"
    : xp >= 5001 && xp <= 7000
    ? "Ouro"
    : xp >= 7001 && xp <= 8000
    ? "Platina"
    : xp >= 8001 && xp <= 9000
    ? "Ascendente"
    : xp >= 9001 && xp <= 10000
    ? "Imortal"
    : "Radiante";

console.log("Heroi de nome " + nomeHeroi + " está no nível " + nivelDoHeroi);
