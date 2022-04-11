// Iteration 1: Names and Input
//console.log("I'm ready!");

let hacker1 = "Mariana";
console.log(`The driver's name is ${hacker1}`);

let hacker2= "João and Chloé";
console.log(`The navigator's name are ${hacker2}`);


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}else if ( hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops

// option 1:
let nameWithSpace ="";
for (letters in hacker1){
   // console.log(hacker1[letters].toUpperCase());
   // console.log(" ");
   nameWithSpace += hacker1[letters].toUpperCase();
   nameWithSpace += " ";
}
console.log(nameWithSpace);

// option 2:
let withSpace ="";
for (let i = 0; i<hacker1.length; i++){
    withSpace += hacker1[i].toUpperCase();
    withSpace += " ";
};
console.log(withSpace);

// print in reverse order:
let reversedNavigator ="";
for (i= hacker2.length-1; i >= 0; i--){
    reversedNavigator += hacker2[i];
    reversedNavigator+= " ";
}
console.log(reversedNavigator);

//Lexicographic order:
//option 1:
let phraseToPrint = "";

let lexicographicOrderResult = hacker1.localeCompare(hacker2)

switch(lexicographicOrderResult){
    case 1:
        phraseToPrint = `Yo, the navigator goes first definitely.`;
        break;
    case -1:
        phraseToPrint = `The driver's name goes first.`
        break;
    case 0:
        phraseToPrint = `What?! You both have the same name?`
        break;
}
console.log(phraseToPrint);

//option 2:
let result= hacker1.localeCompare(hacker2)
    if(result==1){
        console.log(`Yo, the navigator goes first definitely.`)
} else if(result==0){
    console.log(`What?! You both have the same name?`)
} else if(result==-1){
    console.log(`The driver's name goes first.`)
};

//#### Bonus 1:

let lispomLorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porta ante id quam luctus vehicula. Etiam sed tincidunt purus. Etiam pulvinar purus purus, quis consequat ante suscipit eget. Curabitur in dictum metus. Pellentesque elit ligula, efficitur vel imperdiet in, molestie eu augue. Nam rutrum elit vel nibh gravida, eget interdum velit commodo. Aenean vel elit nunc. Mauris bibendum odio et odio condimentum euismod. Sed semper laoreet eros, ac consequat mi euismod sit amet.\n Morbi et nulla lorem. Vivamus molestie egestas feugiat. Quisque pretium neque justo, eu porta tortor congue in. Integer sagittis, felis in rutrum bibendum, neque massa sagittis elit, vitae pellentesque augue dolor quis sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque eu sapien odio. Phasellus malesuada est id lacus feugiat venenatis. Maecenas consequat aliquam lacus varius suscipit. Suspendisse rhoncus dapibus maximus. Morbi sed mollis diam. Quisque molestie tempor augue, vitae ullamcorper eros venenatis vitae. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc consectetur ligula vitae metus euismod varius. Nam tempor nec est eget volutpat. Sed laoreet nulla semper dictum blandit. Aliquam non purus sed purus suscipit aliquet. Proin pharetra ipsum nec mauris viverra blandit. In velit velit, hendrerit eget congue in, maximus vestibulum quam. Phasellus vulputate accumsan eros, vel feugiat lacus egestas id. Mauris cursus magna eu risus gravida fermentum. Phasellus vel ligula sodales, tempus lectus nec, maximus purus. Nam sit amet tempus libero, nec porttitor libero."

console.log(lispomLorem);

var wordCount = lispomLorem.match(/(\w+)/g).length;
console.log(wordCount);

// option 2 - word counter
count = 1

for(let i = 0; i<lispomLorem.length; i++){
    if(lispomLorem[i]=== " "){
        count +=1;
    }
}
console.log(count)

