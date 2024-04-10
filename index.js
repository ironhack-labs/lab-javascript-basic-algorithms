// Iteration 1: Names and Input

let hacker1="yassine";
console.log(`The driver's name is ${hacker1}.`);
let hacker2="toto";
console.log(`The navigator's name is ${hacker2}.`);


// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}
else if (hacker1.length < hacker2.length){
console.log(`It seems that the navigator has the longest name, it has ${hacker2.length}  characters`);
}
else {
console.log(`Wow, you both have equally long names,  ${hacker2.length} characters!.`);
}
// Iteration 3: Loops
let str=hacker1;
let spacedstring="";
let reverse="";
for (let i=0;i<str.length;i++){
    spacedstring =spacedstring+str[i]+" ";
}
console.log(spacedstring);

for (let j=str.length-1; j>=0;j--){
reverse=reverse+str[j];

}
console.log(reverse);

if (hacker1>hacker2){

    console.log("The driver's name goes first. ");

}
else if (hacker1<hacker2){
    console.log("Yo, the navigator goes first, definitely.");
}
else{
    console.log("What?! You both have the same name?")
}