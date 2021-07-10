let hacker1 = 'Curry';
let hacker2 = 'Jordan';

const hacker1nm = "O nome do jogador é" + ' ' + hacker1;
const hacker2nm = `O nome do jogador raiz é ${hacker2}`;

console.log(hacker1nm);
console.log(hacker2nm);
// Iteration 2: Conditionals
const hacker1h = hacker1.length;
const hacker2h = hacker2.length;

if (hacker1h > hacker2h) {
    console.log(`O jogador tem o nome mais longo, tem ${hacker1h} caracteres.`)
} else if (hacker2h > hacker1h) {
    console.log(`Parece que o jogador raiz tem o nome mais longo, tem ${hacker2h} caracteres.`)
} else {
    console.log(`Uau, vocês dois têm nomes igualmente longos, ${hacker1h} caracteres!`)
}

// Iteration 3: Loops
let hacker1mn = '';

for (let i = 0; i < hacker1.length; i += 1) {
    if (i === hacker1.length - 1) {
        hacker1mn += `${hacker1[i].toUpperCase()}`;
    } else {
        hacker1mn += `${hacker1[i].toUpperCase()} `;
    }

}