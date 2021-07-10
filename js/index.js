// Iteration 1: Names and Input
let hacker1 = 'Carlos';
let hacker2 = 'Carla'
console.log(`The driver's name is ${hacker1}.`);
console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals

let longerName;
let nameSize;

//Check the longest name

if(hacker1.length>hacker2.length){
    longerName = hacker1;
    nameSize = hacker1.length;
    console.log(`Ther driver has the longest name, it has ${nameSize} characters.`)
}if(hacker1.length<hacker2.length){
    longerName = hacker2;
    nameSize = hacker2.length;
    console.log(`it seems that the navigator has the longest name, it has ${nameSize} characters.`)
}else{
    nameSize = hacker1.length;
    console.log(`Wow, you both have equally long names, ${nameSize} characters!`);
}


// Iteration 3: Loops

// UPPER
let hacker1Upper = hacker1.toUpperCase();
let hacker1Separate = '';

for (let index = 0; index < hacker1Upper.length; index++) {
   
    if(index === 0){
        hacker1Separate=hacker1Upper[index];
        
    }else{
        hacker1Separate += ' ' + hacker1Upper[index];
        
    }
}

console.log(hacker1Separate);

// REVERSE
let hacker1Reverse = ''; 
let position = hacker1.length;

for (let index = (hacker1.length-1); index >= 0; index--) {
   
    hacker1Reverse += hacker1[index];
     
}


//LEXICOGRAPHIC ORDER
let firstName = '';
let secondName = '';
let longerSize;
//LONGER NAME
if( hacker1.length > hacker2.length){
    longerSize = hacker1.length
}if(hacker1.length < hacker2.length){
    longerSize = hacker2.length
}else{
    longerSize = hacker1.length
}

for(index = 0 ; index < longerSize; index++){
    if(hacker1[index]>hacker2[index]){
        firstName = hacker2;
        secondName = hacker1;
        break;
    }if(hacker1[index]<hacker2[index]){
        firstName = hacker1;
        secondName = hacker2;
        break;
    }else{
        continue;
    }
    
}

console.log(`First name is ${firstName}, and second name is ${secondName}`);



//  BONUS 1

let lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Iaculis at erat pellentesque adipiscing commodo elit. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Nulla pellentesque dignissim enim sit amet venenatis urna cursus eget. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Consectetur purus ut faucibus pulvinar elementum integer. Fermentum dui faucibus in ornare quam viverra orci sagittis. Vel turpis nunc eget lorem dolor sed viverra. Eu augue ut lectus arcu bibendum. Sodales neque sodales ut etiam sit. Morbi non arcu risus quis varius quam quisque. Tellus at urna condimentum mattis pellentesque id nibh. Porta lorem mollis aliquam ut porttitor leo a diam. Id ornare arcu odio ut sem. Viverra tellus in hac habitasse platea. Pharetra convallis posuere morbi leo urna molestie at. Sapien et ligula ullamcorper malesuada proin libero nunc. Ac tincidunt vitae semper quis lectus nulla at volutpat diam. Risus viverra adipiscing at in tellus integer feugiat scelerisque varius. Vulputate ut pharetra sit amet aliquam id diam maecenas.

Nibh nisl condimentum id venenatis. Malesuada proin libero nunc consequat interdum varius sit. Egestas pretium aenean pharetra magna. Eget velit aliquet sagittis id consectetur. Diam vel quam elementum pulvinar etiam non quam lacus. Odio morbi quis commodo odio aenean sed adipiscing diam. Erat pellentesque adipiscing commodo elit at imperdiet dui. Adipiscing at in tellus integer feugiat scelerisque varius. Eros donec ac odio tempor. Turpis nunc eget lorem dolor sed viverra ipsum nunc. Facilisi morbi tempus iaculis urna. Et magnis dis parturient montes nascetur ridiculus mus. Egestas maecenas pharetra convallis posuere.

Neque aliquam vestibulum morbi blandit. Curabitur gravida arcu ac tortor dignissim convallis. Aliquet porttitor lacus luctus accumsan. Nulla aliquet enim tortor at auctor urna. Sagittis purus sit amet volutpat consequat mauris nunc congue. Cursus turpis massa tincidunt dui ut. Elit pellentesque habitant morbi tristique senectus et netus et malesuada. Consectetur adipiscing elit duis tristique sollicitudin nibh sit. Lectus proin nibh nisl condimentum id. Est ullamcorper eget nulla facilisi etiam dignissim diam. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Pharetra magna ac placerat vestibulum lectus mauris. Nunc mi ipsum faucibus vitae aliquet. Donec massa sapien faucibus et molestie ac feugiat sed lectus. Etiam non quam lacus suspendisse. Mattis aliquam faucibus purus in`;

let contWord = 0;
let contLetter = 0;
let contEt = 0;

for(let index3=0;index3<lorem.length;index3++){
    if(lorem[index3] === ' '){
        contWord += 1;
    }
    if(lorem[index3] != ' ' | lorem[index3] != '.'){
        contLetter += 1;
    }
    if(lorem.slice(index3,(index3+2)) === 'et'){
        contEt += 1;
    }
}

console.log(`O numero de palavras é ${contWord}`);
console.log(`O numero de letras é ${contLetter}`);
console.log(`O numero de 'et' é ${contEt}`);

// BONUS 2

let phraseToCheck = 'Was it a car or a cat I saw?';
let phrasePure = phraseToCheck ;

for(index4=0 ; index4 < phraseToCheck.length; index4++){
    if(phrasePure[index4] === ' ' | phrasePure[index4] === ',' | phrasePure[index4] === "'" | phrasePure[index4] === "." | phrasePure[index4] === "?"){
        
        phrasePure = phrasePure.slice(0,index4) + phrasePure.slice(index4+1,phraseToCheck.length);
        console.log(phrasePure[index4]);
        index4--;
    }
}

phrasePure = phrasePure.toLocaleLowerCase(); //Get 

let phraseReverse = '';
let checkPalindrome = false;

for(index5=(phrasePure.length-1);index5>=0;index5--){
    phraseReverse += phrasePure[index5]; 
}



if (phraseReverse === phrasePure){
    console.log(`A frase ${phraseToCheck} é um palindrome`);
}else{

    console.log(`A frase ${phraseToCheck} não e é um palindrome`);
}

