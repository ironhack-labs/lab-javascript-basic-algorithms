// Iteration 1: Names and Input

let hacker1 = "Sebastian";
console.log(`The drivers name is ${hacker1}`);

let hacker2 = "Martin";
console.log(`The navigator's name is ${hacker2}`);
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longes name, it has ${hacker2.length} characters`);
} else {
    console.log(`Wow, you both have equaly long names, ${hacker1.length} characters`);
}
let hacker1Capital = "";
for (let i = 0; i < hacker1.length; i++) {
    hacker1Capital += hacker1[i].toUpperCase() + " ";
    //hacker1Capital += hacker1[i];
}
console.log(hacker1Capital);


let hacker2Backwards = "";
for (let i = hacker2.length; i > 0; i--) {

    hacker2Backwards += hacker2[i - 1];
}
console.log(hacker2Backwards);


// Iteration 2: Conditionals



let strings = [hacker1, hacker2];

let result = hacker1.localeCompare(hacker2);


if (result === -1) {
    console.log("The driver goes first");
} else if (result === 0) {
    console.log("What? You both have the same name");
} else if (result === 1) {
    console.log("Yo, the navigator goes first.")
}





let paragraph = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."











// Iteration 3: Loops

let words = paragraph;


console.log(words)
let resultt = 0;
console.log("number of chars " + words.length);


let counter = 0;
let wordCounter = 0;
for (i = 0; i < words.length; i++) {
    if (words[i] == "o" && words[i + 1] == "f") {
        counter++;
    }
    if (words[i] == " ") {
        wordCounter++;
    }
}

console.log("number of et: " + counter);
console.log("number of words: " + wordCounter);



//The code doesent look so good because we wrote it in a hurry.