//Segundo Exemplo
let nomeHeroi = "Danilo rei dos Piratas";
let xp = 9456;

const niveis = [
  { nome: "Ferro", limite: 1000 },
  { nome: "Bronze", limite: 2000 },
  { nome: "Prata", limite: 5000 },
  { nome: "Ouro", limite: 7000 },
  { nome: "Platina", limite: 8000 },
  { nome: "Ascendente", limite: 9000 },
  { nome: "Imortal", limite: 10000 },
];

let nivelDoHeroi = "Radiante"; // Defina um valor padrão

for (const nivel of niveis) {
  if (xp <= nivel.limite) {
    nivelDoHeroi = nivel.nome;
    break;
  }
}

console.log(`Heroi de nome ${nomeHeroi} está no nível ${nivelDoHeroi}`);
