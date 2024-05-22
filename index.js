// Iteration 1: Names and Input
let hacker1 = "Mary";

console.log("the driver's name is"+ " "+ hacker1);

let hacker2 = "Marcos";
console.log("The navigator's name is"+" "+ hacker2)


// Iteration 2: Conditionals
if(hacker1.length> hacker2.length){
    console.log("The driver has the longest name, it has" + " " + hacker1.length +" " + "characterers!");
} else if(hacker1.length < hacker2.length){
    console.log("It seems that the navigator has the longest name, it has" + " " +hacker2.length + " " + "characters.");

}else{
    console.log("Wow, you both have equally long names," + " " +  hacker1.length + " " + " characters!");
}



// Iteration 3: Loops
let hacker1Uppercase= hacker1.toUpperCase();
console.log(hacker1Uppercase);
let spacedName =" ";
for (let i = 0; i < hacker1Uppercase.length; i++) {
    spacedName += hacker1Uppercase[i] + " ";
} 
spacedName = spacedName.trim();
console.log(spacedName);

let reversedName = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
    reversedName += hacker2[i];
}
console.log(reversedName);


