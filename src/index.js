let nomeHeroi = "Mei";
let xps = 10005;

console.log("Nome do herói: " + nomeHeroi);
console.log("XPs do herói: " + xps);

if (xps >= 10001 && xps <= 10005) {
  console.log("Nível do herói: Radiante");
} else if (xps >= 1001 && xps <= 2000) {
  console.log("Nível do herói: Bronze");
} else if (xps >= 2001 && xps <= 5000) {
  console.log("Nível do herói: Prata");
} else if (xps >= 5001 && xps <= 7000) {
  console.log("Nível do herói: Ouro");
} else if (xps >= 7001 && xps <= 8000) {
  console.log("Nível do herói: Platina");
} else if (xps >= 8001 && xps <= 9000) {
  console.log("Nível do herói: Ascendente");
} else if (xps >= 9001 && xps <= 10000) {
  console.log("Nível do herói: Imortal");
}

  