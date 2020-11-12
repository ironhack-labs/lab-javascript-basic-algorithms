// ------ Iteration 1: Names and Input ------

// ------ Iteration 2: Conditionals ------

// ------ Iteration 3: Loops ------


// ------ Bonus 1 ------ 


// ------ Bonus 2 ------ 

let phrase = 'Was it a car or a cat I saw?';
let phraseMod ='';
let invPhrase ='';

for(let i=0;i<phrase.length;i++){
    if(phrase[i]===' '|| phrase[i]===','|| phrase[i]==='.'|| phrase[i]==='!'|| phrase[i]==='?')
        phraseMod+='';
    else
        phraseMod+=phrase[i];
}

for(let i=phrase.length-1;i>=0;i--){
    if(phrase[i]===' '|| phrase[i]===','|| phrase[i]==='.'|| phrase[i]==='!'|| phrase[i]==='?')
        invPhrase+='';
    else
        invPhrase+=phrase[i];
}

if(phraseMod.toLowerCase===invPhrase.toLowerCase)
    console.log(`${phrase} is a Palindrome`);

else
    console.log(`${phrase} is not a Palindrome`);