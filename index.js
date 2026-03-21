// Iteration 1: Names and Input
let hacker1 = "Sindy";
console.log("The driver's name is " + hacker1);

let hacker2 = "Laura";
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops

// 3.1
let hacker1SeparedLetters = ""

for (let i = 0; i < hacker1.length; i++){
    hacker1SeparedLetters += hacker1[i].toUpperCase() + " ";
}

console.log(hacker1SeparedLetters);

// 3.2 

let reverse = "";

for(let i = hacker2.length -1; i >= 0; i--){
    reverse += hacker2[i];
}

console.log(reverse);

// 3.3

let equipment = [hacker1, hacker2];

for (let i = 0; i < 1; i++){
    if (hacker1<hacker2){
        console.log("The driver's name goes first");
    } else if (hacker1>hacker2){
            console.log("Yo, the navigator goes first, definitely. ");
    } else {
        console.log("What?! You both have the same name?")
    }
}

//Bonus

let longText = "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"

let conter = 0;

for (let i=0; i<longText.length; i++){
    if (longText[i] === " "){
        conter++;
    }
}

conter += 1;

console.log("Number of words: " + conter)

//
