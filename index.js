// Iteration 1: Names and Input
let hacker1 = "John";
let hacker2 = "Pete"

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length)
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
else if (hacker1.length < hacker2.length)   
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
else 
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);

// Iteration 3: Loops

let hacker1Upper = hacker1.toUpperCase();
let hacker1Spaces = '';
for (let i = 0; i < hacker1Upper.length; i++)
{
    hacker1Spaces += hacker1Upper[i] + ' '
}
console.log(hacker1Spaces);


let hacker2Reversed = '';
for (let i = hacker2.length - 1; i >= 0; i--)
{
    hacker2Reversed += hacker2[i];
}
console.log(hacker2Reversed);


let found = false;
for (let i = 0; i < Math.min(hacker1.length, hacker2.length); i++)
{
    if (hacker1[i] < hacker2[i])
    {
        console.log('The driver\'s name goes first.');
        found = true;
        break;
    }
    else if (hacker1[i] > hacker2[i])
    {
        console.log('Yo, the navigator goes first, definitely.');
        found = true;
        break;
    }
}
if (!found)
{
    if (hacker1.length < hacker2.length)
        console.log('The driver\'s name goes first.');
    else if (hacker1.length > hacker2.length)
        console.log('Yo, the navigator goes first, definitely.');
    else
        console.log('What?! You both have the same name?');
}

        

