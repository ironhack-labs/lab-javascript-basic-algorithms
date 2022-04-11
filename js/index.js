// Iteration 1: Names and Input

/* 1.1 Create a variable `hacker1` with the driver's name.

1.2 Print `"The driver's name is XXXX"`.

1.3 Create a variable `hacker2` with the navigator's name.

1.4 Print `"The navigator's name is YYYY"`. */


let hacker1 = 'Matilde';
 console.log(`The driver's name is ${hacker1}.`)

let hacker2 = 'Pedro';
console.log(`The navigator's name is ${hacker2}.`)

// Iteration 2: Conditionals

/* 2.1. Depending on which name is longer, print:
- The driver has the longest name, it has XX characters. or
- It seems that the navigator has the longest name, it has XX characters. or
- Wow, you both have equally long names, XX characters!.
 */

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}
else if (hacker2.length > hacker1.length) {
    console.log(`The navigator has the longest name, it has ${hacker2.length} characters.`)
}
else {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
}

// Iteration 3: Loops

/* 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"

3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"

3.3 Depending on the lexicographic order of the strings, print:
- The driver's name goes first.
- Yo, the navigator goes first definitely.
- What?! You both have the same name? */

for (i = 0; i < hacker1.length; i++) {
    console.log(hacker1[i].toUpperCase())
}


for (i = hacker2.length; i > 0 ; i--) {
    console.log(hacker2[i-1])
}

if (hacker1.localeCompare(hacker2)) {
    console.log(`The driver's name goes first.`)
}
else if (hacker2.localeCompare(hacker1)) {
    console.log(`Yo, the navigator goes first definitely.`)
}
else {
    console.log(`What?! You both have the same name?`)
}

/* Bonus 1:
Go to lorem ipsum generator and:

Generate 3 paragraphs. Store the text in a variable type of string.
Make your program count the number of words in the string.
Make your program count the number of times the Latin word et appears. */

let lorem = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";

let loremWords= lorem.split(' ');
console.log(loremWords.length);


for (i= 0; i <= lorem.length; i++) {
    let count= 0;
    if(lorem.indexOf(i) === ' et') {
        count += 1
    }
    console.log(count);
    break;
}

/* Bonus 2:
Create a new variable phraseToCheck and have it contain some string value. 
Write a code that will check if the value we assigned to this variable is a Palindrome. 
Here are some examples of palindromes:

"A man, a plan, a canal, Panama!"
"Amor, Roma"
"race car"
"stack cats"
"step on no pets"
"taco cat"
"put it up"
"Was it a car or a cat I saw?" and "No 'x' in Nixon". */

let phraseToCheck = 'I have a race car';

for( let i = phraseToCheck.length; i > 0; i-- )
{
    if( phraseToCheck[i] = phraseToCheck.charAt(phraseToCheck.length)-1 )
    {
       console.log(true);
    }else{
        console.log(false);
    }
    break;
}
