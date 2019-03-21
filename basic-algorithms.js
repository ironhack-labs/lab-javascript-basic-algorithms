// Names and Input

var hacker1 = "John";
console.log("The driver' name is "+ hacker1);

var hacker2 = prompt("Enter Your name : ");
console.log("The navigator's name is "+ hacker2);


//Conditionals

if (hacker1.length>hacker2.length){
    console.log("The Driver has the longest name, it has "+ hacker1.length + " characters");
}
else if (hacker2.length>hacker1.length){
    console.log("Yo, navigator got the longest name, it has "+ hacker2.length +" characters")
}
else{
    console.log("wow, you both got equally long names, "+ hacker1.length +"characters!!")
}

// Conditionals an other way 

var result = hacker1.length>hacker2.length ? console.log("The Driver has the longest name, it has ", hacker1.length , " characters"):
hacker2.length>hacker1.length ? console.log("Yo, navigator got the longest name, it has ", hacker2.length ," characters"):
hacker1===hacker2 ? console.log("wow, you both got equally long names, ", hacker1.length ," characters!!"):n;




// Lorem ipsum generator



// Exercice 6 : Option 1 with the array

var blank ="";
const tableau = [];
for(let i = 0; i < hacker1.length; i++){
    tableau.push(blank + hacker1.toUpperCase()[i])
}
console.log(tableau.join(' '));


// Option 2 with Name inside a var

var blank ="";
for (let i =0; i < hacker1.length; i++){
    blank += hacker1.toUpperCase()[i] + " ";
}
console.log(blank);
// Can "console.log(blank.trim)" to cut every space outside (left & right) the word


// Option 3 : NO LOOPS
hacker1="john";
let nametag = hacker1.toUpperCase();
console.log(nametag.split('').join(" "));



// Exercice 7

var reverse = "";
for (let i=hacker1.length-1; i>=0 ; i--){
    reverse+=hacker1[i];
}
console.log(reverse)



// Exercice 8 : Option 1 : Method conditionnal 

const nom=[hacker1,hacker2];
if (hacker1===hacker2){
    console.log("What?! You both got the same name?");
}
else if (nom.sort()[0]===hacker2){
    console.log("The driver : ",hacker2+" goes first");
}
else {
    console.log("Yo, the navigator : ",hacker1+" goes first definitely");
}

// Option 2 localecompare method

var first = hacker1.localeCompare(hacker2);
if (first === 0){
    console.log("Both are equals");
}
else if (first === 1){
    console.log("Yo, the navigator : ",hacker2+ " goes first definitely")
}
else if (first === -1){
    console.log("The driver's name : ",hacker1+ " goes first")
}