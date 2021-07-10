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

// Bonus Time!
// Bonus 1:
// Generate 3 paragraphs. Store the text in a variable type of string.
const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in porta odio. Ut eleifend, lectus non congue fermentum, est turpis pretium ex, ut luctus neque diam eget ipsum. Proin mattis, dui placerat finibus porta, lectus purus gravida ligula, placerat ornare lacus mauris ac mauris. Ut rhoncus scelerisque pharetra. Ut sed interdum massa. Cras rhoncus, ligula eu vehicula interdum, libero ligula tempor tortor, nec posuere mi lacus non libero. Suspendisse facilisis ultrices sodales. Nunc non feugiat sapien, id commodo dui. Aenean nec lacus sollicitudin, mattis metus a, consectetur arcu. Nullam lectus enim, accumsan a hendrerit sit amet, blandit et orci. Ut condimentum auctor lacus, at commodo orci condimentum dictum. Cras ultrices maximus quam vitae malesuada. Ut neque eros, rhoncus et risus quis, sodales luctus nibh. Fusce a eleifend nisi. Morbi nunc turpis, tincidunt non elit ut, lacinia pharetra felis. Ut ornare sapien eget ex tempor, non iaculis libero tincidunt. Nunc viverra, mi a auctor rutrum, libero magna mollis nunc, eu lobortis lacus eros eu erat. Donec consequat tincidunt ipsum sed euismod. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi a dictum turpis. Morbi pellentesque risus magna, nec gravida sem venenatis eu. Aenean accumsan velit id arcu viverra convallis. Etiam at risus non justo maximus scelerisque. Nullam lobortis nulla a ornare viverra. Ut tincidunt augue sed augue suscipit aliquet nec in quam. Ut ac luctus odio. Duis nec maximus erat. Nunc gravida, ligula consectetur pulvinar vulputate, metus mi ornare augue, at accumsan lectus ex in ante. Integer ut diam libero. Nulla tellus ligula, finibus eget nibh sed, elementum imperdiet nulla. Cras justo enim, venenatis sed elit a, rhoncus consequat turpis. Sed ex nisl, iaculis dictum mauris in, euismod venenatis dolor. Fusce ligula justo, pulvinar nec erat quis, ultrices viverra risus. Proin non pulvinar nunc. Suspendisse malesuada nisl ut mauris malesuada lacinia.';

// Make your program count the number of words in the string.
let words = 0;
for (let i = 0; i < lorem.length; i++)
{
    if (lorem[i] === " ")
    {
        words++;
    }    
}
console.log('There are ' + (words + 1) + ' words in the string.');

// Make your program count the number of times the Latin word et appears.
let et = 0;
for (let i = 0; i < lorem.length; i++)
{
    if (lorem.slice(i, i + 2) === "et")
    {
        et++;
    }
}
console.log(`The Latin word 'et' appears ${et} times.`);