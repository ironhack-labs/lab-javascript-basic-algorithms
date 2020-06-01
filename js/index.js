// Iteration 1: Names and Input
const hacker1 = `Anna`;
const hacker2 = `Carlos`;
const sayDriver = `The driver's name is ${hacker1}`;
const sayNavigator = `The navigator's name is ${hacker2}`;
console.log(sayDriver);
console.log(sayNavigator);


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length)
        console.log (`The driver has the longest name, it has ${hacker1.length} characters!`);
    if (hacker2.length > hacker1.length)
    console.log (`It seems that the navigator has the longest name, it has ${hacker2.length} characters!`);
    if (hacker1.length === hacker2.length)
    console.log (`Wow, youz both have equally long names, ${hacker1.length} characters!`);




// Iteration 3: Loops
const hacker1toUpperCase = []
for (let index = 0; index < hacker1.length; index++)
    {
        hacker1toUpperCase.push(hacker1[index].toUpperCase());
    }
const sayHackerSeparateCapitals = hacker1toUpperCase.toString();
console.log(sayHackerSeparateCapitals);
const nameToArray = hacker2.split('');
console.log(nameToArray.reverse().toString()); 
const arrayNames = [hacker1, hacker2];
    arrayNames.sort()
    if (arrayNames[0] === arrayNames[1])
        console.log(`What?! You both have the same name?`);
    else if (arrayNames[0] === hacker2)
        console.log(`Yo, the navigator goes first definitely`); 
    else if (arrayNames[0] === hacker1)
        console.log(`The driver's name goes first`);