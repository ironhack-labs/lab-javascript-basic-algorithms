// Iteration 1: Names and Input
var hacker1 = 'Cody';
var hacker2 = 'Steve';
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
const longestName = (g1, g2) => g1.length > g2.length ? `The driver has the longest name, it has ${g1.length} characters.` : g1 < g2 ? `It seems that the navigator has the longest name, it has ${g2.length} characters.` : `Wow, you both have equally long names, ${g1.length} characters!`

// Iteration 3: Loops
const spaceCaps = name => name.toUpperCase().split('').join(' ');

const reverseName = name => name.split('').reverse().join('');

const nameOrder = (name1, name2) => {
    let n1 = name1.toLowerCase();
    let n2 = name2.toLowerCase();
    
    for (var i = 0; i < n1.length; i++){
            if (n1[i] < n2[i]){
                return 'The driver\'s name goes first.'
            }
            if (n1[i] > n2[i]){
                return "Yo, the navigator goes first definitely."
            }
            if (n1[i] === n2[i]){
                continue
            }
        }
    if (n1 === n2){
        return 'What?! You both have the same name?';
    }
}