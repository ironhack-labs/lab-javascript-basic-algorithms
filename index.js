// Iteration 1: Names and Input
const hacker1 = "XXXX";
console.log(`The driver's name is ${hacker1}`);
const hacker2 = "YYYY";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length)
{
    console.log(`The driver has the longest name, it has ${hacker1} characters.`);
}
else if (hacker1.length < hacker2.length)
{
    console.log(`It seems that the navigator has the longest name, it has ${hacker2} characters.`);
}
else if (hacker1.length == hacker2.length)
{
    console.log(`Wow, you both have equally long names, ${hacker1} characters!`);
}

// Iteration 3: Loops
let result31a = "";
for (let i = 0; i < hacker1.length; i++)
{
    result31a += hacker1[i].toUpperCase() + " ";
}
console.log(result31a);

let result31b = "";
for (let i = hacker1.length - 1; i >= 0; i--)
{
    result31b += hacker1[i];
}
console.log(result31b);

if(hacker1 > hacker2)
{
    console.log("The driver's name goes first.");
}
else if(hacker1 < hacker2)
{
    console.log("Yo, the navigator goes first, definitely.");
}
else
{
    console.log("What?! You both have the same name?");
}

const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et nulla nibh. Etiam consequat lobortis metus a varius. Nam neque erat, volutpat a lectus et, sagittis efficitur velit. Proin vitae erat consequat, accumsan arcu sed, semper nulla. Etiam cursus mattis aliquet. Suspendisse hendrerit ipsum nec lacus condimentum faucibus. Sed et turpis sed mi sodales suscipit. Sed vitae dignissim dui. Pellentesque auctor elit eu lacinia faucibus. Praesent ornare orci ante. Nulla eleifend in ligula sed gravida. Mauris efficitur odio ligula, vel feugiat neque commodo quis. Ut sit amet velit nec nisl blandit commodo." +
"\n" +
"Etiam feugiat quam nec pretium malesuada. Sed consectetur eu leo vitae aliquet. Morbi lacinia ante vel tortor tempus condimentum. Mauris et risus et nisi vulputate tincidunt non vitae tellus. Curabitur vitae consectetur massa, ac molestie tellus. Nullam condimentum dui eget aliquet mollis. Phasellus a molestie purus. Aliquam in enim id lorem luctus pretium. Donec sapien tortor, rutrum vitae placerat vitae, ultrices sed massa. Phasellus purus lectus, bibendum eget libero nec, mattis congue orci. Donec efficitur velit vel nunc pharetra vehicula." +
"\n" +
"Etiam lacinia aliquet venenatis. Mauris felis nulla, ultrices eget finibus sit amet, mollis vitae magna. Integer nec ornare metus, vel commodo velit. Fusce fringilla arcu sodales felis efficitur rhoncus. Donec nec sollicitudin eros. Nunc elementum aliquet urna, ut congue ligula consequat ac. In laoreet lacinia ex in fringilla."

let array = loremIpsum.split(" ");
const resultB1a = array.length;
console.log(resultB1a);

let resultB1b = 0;
for (let i = 0; i < array.length; i++)
{
    array[i] = array[i].toLowerCase();
    for (let j = 0; j < array[i].length; j++)
    {
        if(array[i][j] === "e" && array[i][j + 1] === "t")
        {
            resultB1b++;
        }
    }
}
console.log(resultB1b);

let phraseToCheck = "Was it a car or a cat I saw?";
let resultB2 = true;
phraseToCheck = phraseToCheck.toLowerCase();
phraseToCheck = phraseToCheck.replaceAll(" ", "");
phraseToCheck = phraseToCheck.replaceAll(",", "");
phraseToCheck = phraseToCheck.replaceAll(".", "");
phraseToCheck = phraseToCheck.replaceAll("?", "");
phraseToCheck = phraseToCheck.replaceAll("'", "");
for (let i = 0; i < phraseToCheck.length; i++)
{
    if(phraseToCheck[i] != phraseToCheck[phraseToCheck.length - (i + 1)])
    {
        resultB2 = false;
        break;
    }
    if ((i + 1) > phraseToCheck.length / 2)
    {
        break;
    }
}
console.log("is palindrome: " + resultB2);