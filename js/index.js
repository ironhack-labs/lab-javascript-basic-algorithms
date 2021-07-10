// Iteration 1: Names and Input

// 1.1 Create a variable `hacker1` with the driver's name.
const hacker1 = 'Andre';

// 1.2 Print `"The driver's name is XXXX"`.
console.log(`The driver's name is ${hacker1}`);

//1.3 Create a variable `hacker2` with the navigator's name.
const hacker2 = 'Ariadne';

//1.4 Print `"The navigator's name is YYYY"`.
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
// 2.1. Depending on which name is longer, print:
if (hacker1.length > hacker2.length)
{
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}
else if (hacker1.length < hacker2.length)
{
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}
else
{
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`);
}

// Iteration 3: Loops
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals
let spacedUpperedName = '';

for (let i = 0; i < hacker1.length; i++)
{
    spacedUpperedName += hacker1[i].toUpperCase() + " ";
}
console.log(spacedUpperedName);

// 3.2 Print all the characters of the navigator's name, in reverse order
let reversedName = '';

for (let j = hacker2.length - 1; j >= 0 ; j--)
{
    reversedName += hacker2[j];
}
console.log(reversedName);

// 3.3 Depending on the lexicographic order of the strings, print:
if (hacker1 === hacker2)
{
    console.log('What?! You both have the same name?');
}
else
{
    const hackers = [];
    hackers.push(hacker1, hacker2);
    hackers.sort();
        
    if (hacker1 === hackers[0])
    {
        console.log("The driver's name goes first.");
    }
    else
    {
        console.log("Yo, the navigator goes first definitely.");
    }
}