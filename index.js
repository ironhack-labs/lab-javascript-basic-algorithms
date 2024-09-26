// Iteration 1: Names and Input

const hacker1 = "Mizuela";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Miguela";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if(hacker1.length > hacker2.length)
{
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
}
else if(hacker1.length < hacker2.length)
{
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}
else{
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}


// Iteration 3: Loops

let capitalSeparatedName = "";

for(let i = 0; i<hacker1.length; i++)
{
    const char = hacker1[i].toUpperCase();

    capitalSeparatedName += `${char} `;
}

console.log(capitalSeparatedName.trim());

let reverseName = "";

for(let i = hacker2.length-1; i>=0; i--)
{
    const char = hacker2[i];

    reverseName += char;
}

console.log(reverseName);

let counter = 0;
let isFound = false;

while(hacker1[counter] != undefined && hacker2[counter] != undefined && !isFound)
{
    const char1 = hacker1[counter].toLowerCase();
    const char2 = hacker2[counter].toLowerCase();

    if(char1 < char2)
    {
        console.log("The driver's name goes first.");
        isFound = true;
    }
    else if(char2 < char1)
    {
        console.log("Yo, the navigator goes first, definitely.");
        isFound = true;
    }
    else
    {
        counter++;
    }
}

// let number = hacker2.localeCompare(hacker1);

// console.log(number);

if(!isFound)
{
    if(hacker1.length < hacker2.length)
    {
        console.log("The driver's name goes first.");
    }
    else if(hacker1.length > hacker2.length)
    {
        console.log("Yo, the navigator goes first, definitely.");
    }
    else{
        console.log("What?! You both have the same name?");
    }
}
    
