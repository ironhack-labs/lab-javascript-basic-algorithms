// Iteration 1: Names and Input
const hacker1 = "Margarida";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Pedro";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops
let result = "";
for(let i = 0; i < hacker1.length; i++){
result = result + hacker1[i].toUpperCase() + " "
}

console.log(result);

let result2 = "";
for(i = hacker1.length -1; i >= 0; i--){
    result2 = result2 + hacker1[i];
}
console.log(result2);


if(hacker1[0] < hacker2[0]){
    console.log(`The driver's name goes first`);
} else if (hacker1[0] > hacker2[0]){
    console.log(`Yo, the navigator goes first definitely`);
} else {
    console.log(`What?! You both have the same name?`);
}


//Bonus 1

let threeParagraphs = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin blandit nibh et enim ultrices, ac tempus sapien blandit. 
Mauris convallis magna vitae nunc ullamcorper, sit amet auctor elit suscipit. Vestibulum nec metus luctus, auctor tortor ac, posuere diam. Nam sit 
amet eros sed elit volutpat feugiat eget eleifend libero. Curabitur sagittis mollis sapien, eu volutpat ligula imperdiet a. Vivamus non consectetur arcu. 
Mauris posuere eros turpis, at porttitor arcu consequat eget. Sed facilisis est vehicula erat euismod ultricies. In sed purus dapibus, bibendum nisi vitae, 
vestibulum ante. Fusce efficitur tincidunt scelerisque. Cras eu arcu dignissim, sagittis libero ac, gravida leo. Cras mauris est, vulputate quis ligula sed, 
iaculis pharetra libero. Sed tempor consectetur erat eget euismod. Sed mattis accumsan ex, sit amet dapibus nulla malesuada commodo. Mauris porta ante nec 
odio tempor posuere. In libero turpis, commodo quis ante rhoncus, pulvinar blandit ex. Vivamus tempor tellus a tortor congue tristique. 
Pellentesque imperdiet arcu at leo consectetur, at efficitur felis scelerisque. Nunc eget erat sem. Etiam a finibus magna. Integer hendrerit malesuada semper. Integer tempor molestie pulvinar. Fusce malesuada vehicula mauris auctor faucibus. Praesent vitae nibh vel urna scelerisque consequat. Cras vel ipsum tellus. Ut cursus nisi ante, in maximus nunc lacinia in.
Fusce eget hendrerit nibh. Nunc eleifend condimentum ipsum in vehicula. Integer in suscipit libero. Fusce blandit eleifend augue, 
non tincidunt magna placerat et. Phasellus egestas lorem luctus erat laoreet, viverra bibendum dolor laoreet. Curabitur vitae ornare urna. 
Nulla facilisi. Praesent at nisi in arcu porttitor consequat cursus sed dolor.`

let numberOfBlankSpaces = 0;
let numberOfWords = 0;



 for(let i = 0; i < threeParagraphs.length; i++){
     if(threeParagraphs[i] === " "){
        numberOfBlankSpaces++
     } 

 }



//console.log(numberOfBlankSpaces);

numberOfWords = numberOfBlankSpaces + 1;
//console.log(numberOfWords);





//console.log(numberOfWords);


//let etWord = "et";
let howManyEt = 0;

for(let i = 0; i < threeParagraphs.length; i++){
    if(threeParagraphs[i] === " " && threeParagraphs[i+1] === "e" && threeParagraphs[i+2] === "t" && (threeParagraphs[i+3] === " " || threeParagraphs[i+3] === "." || threeParagraphs[i+3] === ",")) {
        howManyEt++;
    }
       
}


console.log(`There are ${howManyEt} "et" words in the three paragraphs.`);


// Bonus 2

let phraseToCheck = "Was it a car or a cat I saw?";
let tempWord = ""

for(let i = 0; i < phraseToCheck.length; i++){
    if(phraseToCheck[i] === " " || phraseToCheck[i] === "." || phraseToCheck[i] === "!" || phraseToCheck[i] === "," || phraseToCheck[i] === "?" ){
        continue;
    }
    tempWord = tempWord.toLowerCase() + phraseToCheck[i];
}

// console.log(tempWord);


let subTempWord = tempWord.substring(Math.ceil(tempWord.length/2), tempWord.length+1);


// console.log(subTempWord);




let subTempWordInverted = "";

for(i = subTempWord.length -1; i >= 0; i--){
    subTempWordInverted = subTempWordInverted + subTempWord[i];
}


// console.log(subTempWordInverted);



if(tempWord.substring(0, Math.floor(tempWord.length/2)) === subTempWordInverted) {
    console.log(`"${phraseToCheck}" is a Palindrome`);
} else {
    console.log(`"${phraseToCheck}" is not a Palindrome`);
}







