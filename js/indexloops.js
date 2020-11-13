// ------ Iteration 1: Names and Input ------

//Probando pull y push

let hacker1 = "Elizabeth";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Rafa";
console.log(`The navigator's name is ${hacker2}\n`);

// ------ Iteration 2: Conditionals ------

let lengthHacker1=0;
let lengthHacker2=0;

for(let i=0;hacker1[i]!=undefined;i++){
    lengthHacker1++;
}
for(let i=0;hacker2[i]!=undefined;i++){
    lengthHacker2++;
}

console.log(lengthHacker1);
console.log(lengthHacker2);

if(lengthHacker1>lengthHacker2)
    console.log(`${hacker1} has the longest name. length = ${lengthHacker1}\n`);

else if(lengthHacker1<lengthHacker2)
    console.log(`${hacker2} has the longest name. length = ${lengthHacker2}\n`);

else
    console.log(`${hacker1} y ${hacker2} Both have equially long names. length = ${lengthHacker1}\n`);

// ------ Iteration 3: Loops ------


// ------ Bonus 1 ------ 


// ------ Bonus 2 ------ 

let phrase = 'Was it a car or a cat I saw?';
let lengthPhrase = 0;
let phraseMod ='';
let invPhrase ='';

for(let i=0;phrase[i]!=undefined;i++){
    lengthPhrase++;
}

for(let i=0;i<lengthPhrase;i++){
    if(phrase[i]===' '|| phrase[i]===','|| phrase[i]==='.'|| phrase[i]==='!'|| phrase[i]==='?')
        phraseMod+='';
    else
        phraseMod+=phrase[i];
}

for(let i=lengthPhrase-1;i>=0;i--){
    if(phrase[i]===' '|| phrase[i]===','|| phrase[i]==='.'|| phrase[i]==='!'|| phrase[i]==='?')
        invPhrase+='';
    else
        invPhrase+=phrase[i];
}


if(phraseMod.toLowerCase()===invPhrase.toLowerCase())
    console.log(`${phraseMod} = ${invPhrase} so this is a Palindrome`);

else
console.log(`${phraseMod} ≠ ${invPhrase} so this is not a Palindrome`);
    