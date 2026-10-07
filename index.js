// Iteration 1: Names and Input

const hacker1='anki';

console.log(`"The driver'S name is ${hacker1} "`);

const hacker2='john';
console.log(`"The driver'S name is ${hacker2} "`);
// Iteration 2: Conditionals


if(hacker1.length=== hacker2.length){
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

else if(hacker1.length>hacker2.length)

{console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}
else
{
     console.log(`It seems that the navigator has the longest name,  it has ${hacker2.length} characters.`);
}

// Iteration 3: Loops


console.log(hacker1.toUpperCase().split('').join(' '));

let reverse='';
for(let i=hacker2.length-1;i>=0;i--){

    reverse=reverse+hacker2[i];
    console.log(reverse);
}

if(hacker1.localeCompare(hacker2) < 0){
    console.log("The driver's name goes first.");}

    else if (hacker1.localeCompare(hacker2) > 0){
        console.log("Yo, the navigator goes first, definitely.")
    }

    else {
        console.log("What?! You both have the same name?")
    }
// bonus 1

let count=0;
const longText=`What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.`;

console.log(longText.length);

console.log(longText.includes('et'));

for(let i=0;i<longText.length;i++){

    if(longText[i]+longText[i+1]==='et'){

        count++;
    }
}

console.log(count);
    //bonus 2:

const phraseToCheck='tacocat';
let reversi='';

for(let i=phraseToCheck.length-1;i>=0;i--){

reversi=reversi+phraseToCheck[i];

if(reversi===phraseToCheck){

    console.log('palindrome');
}
else{
    console.log('no palindrome');
}
}