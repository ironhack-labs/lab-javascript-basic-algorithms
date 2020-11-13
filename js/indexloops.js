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

if(lengthHacker1>lengthHacker2)
    console.log(`${hacker1} has the longest name. length = ${lengthHacker1}\n`);

else if(lengthHacker1<lengthHacker2)
    console.log(`${hacker2} has the longest name. length = ${lengthHacker2}\n`);

else
    console.log(`${hacker1} y ${hacker2} Both have equially long names. length = ${lengthHacker1}\n`);

// ------ Iteration 3: Loops ------


// ------ Bonus 1 ------ 

let text = `${'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus orci facilisis turpis ultricies laoreet. Nullam ultricies orci vitae urna pulvinar, ut hendrerit orci malesuada. In hac habitasse platea dictumst. Pellentesque tempor nunc sem, eget dignissim erat molestie eget. In tellus nisl, pulvinar sit amet efficitur non, ultrices quis ante. Fusce varius nisi sed orci porta, vel pellentesque metus varius. Vestibulum est odio, blandit sed aliquet a, ullamcorper nec lectus.'} 
${'Nam eget commodo risus, sed fermentum enim. Etiam tempus nunc massa, tincidunt fringilla tellus ultrices sed. Sed sit amet congue nisi, sit amet aliquet massa. Ut ultrices elit sit amet nunc pharetra, euismod auctor ipsum auctor. Aenean viverra rutrum rutrum. Nunc congue libero imperdiet purus commodo euismod. Suspendisse pellentesque enim sem, quis sagittis neque efficitur vitae. Mauris scelerisque placerat mauris eget ornare. Sed imperdiet libero libero, non varius purus eleifend non. Duis tempus sed turpis at sollicitudin.'} 
${'Duis non dapibus urna. Aliquam iaculis risus eros, eu vulputate ligula consectetur id. Cras ut viverra nisi, non malesuada augue. Curabitur pharetra iaculis fringilla. Sed eu arcu in est sagittis ultricies quis sed orci. Aliquam suscipit leo at ullamcorper ultricies. Suspendisse rutrum, purus non sodales ultrices, felis augue posuere ligula, non sagittis nunc quam feugiat enim. Phasellus ornare interdum quam condimentum euismod. Duis non ante dui. Curabitur in urna augue. Ut elementum eros auctor enim bibendum pretium. In sit amet diam sed felis condimentum aliquet.'}`;

let lengthText = 0;
let numWords = 1; //Start in 1 because the last word dont have ' ' behind it.
let numEt = 0;

for(let i=0;text[i]!=undefined;i++){
    lengthText++;
}

for(let i=0;i<=lengthText;i++){
    if(text[i]===' ')
        numWords++;
}
console.log(`The text has ${numWords} words`);

for(let i=0;i<lengthText-2;i++){
    if((text[i]===' ' && text[i+1]==='e' && text[i+2]==='t') || text[i]==='E' && text[i+1]==='t' && text[i+2]===' ')
        numEt++;
}
console.log(`et appears ${numEt} times\n`);


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
    