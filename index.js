// Iteration 1: Names and Input

let hacker1 = "Socrates";
console.log("The diver's name is " + hacker1);

let hacker2 = "Descartes";
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log("The driver has the longest name, it has " + hacker1.length + " characters.");
} else if (hacker1.length < hacker2.length) {
    console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters.");
    } else {
    console.log("Wow, you both have equally long names, " + hacker1.length + " characters!");
    }

// Iteration 3: Loops

let nameSpaced = "";

for (let i = 0; i < hacker1.length; i ++){
    nameSpaced += hacker1[i] + " ";
}
console.log(nameSpaced.toUpperCase());


 let nameReversed = "";

 for (let i = hacker2.length - 1; i >= 0; i --) {
    nameReversed += hacker2[i];
 }
 console.log(nameReversed);


 if (hacker1 < hacker2) {
    console.log("The driver's name goes first.");
 }  else if (hacker1 > hacker2) {
    console.log("Yo, the navigator goes first, definetely.")
 }   else {"What?! Youo both have de same name?."}


 // Bonus 1

 let longText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
 
 let words = longText.split(" ");
 console.log("Number of words:", words.length);


 let countEt = 0;

 for (let i = 0; i < words.length; i++) {
    if (words[i].toLocaleLowerCase() === "et") {
        countEt++;
    }
 }
 console.log("Number of times 'et' appears:", countEt);
