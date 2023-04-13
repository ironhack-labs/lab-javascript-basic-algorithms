// Iteration 1: Names and Input
const hacker1 = 'Ana';
console.log('The driver´s name is', hacker1);
const hacker2 = 'Alvaro';
console.log('The navegator´s name is', hacker2);



// Iteration 2: Conditionals
console.log(`It seems that the navigator has the longest name, it has  ${hacker2.length} characters.`);




// Iteration 3: Loops
let name1 = '';
for (let i = 0; i <= hacker1.length - 1; i++) {

    if (i === hacker1.length - 1) {
        name1 += hacker1[i].toUpperCase()
    }

    else {
        name1 += `${hacker1[i].toUpperCase()} `
    }
}
console.log(name1);

let name2 = '';
for (let i = hacker1.length - 1; i >= 0; i--) {
    name2 += hacker1[i]
}
console.log(name2)

const names = [hacker1, hacker2].sort()
console.log(`Yo, ${names[0]} the navigator goes first, definitely.`)
