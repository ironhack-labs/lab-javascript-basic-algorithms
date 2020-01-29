// Iteration 1: Names and Input
let hacker1 = "Cristopher";
console.log(`The driver's name is `+hacker1)

let hacker2 = "Ferney"
console.log(`The navigator's name is `+hacker2)

// Iteration 2: Conditionals

if(hacker1.length>hacker2.length)
{
  console.log(`The driver has the longest name, it has `+hacker1.length+` characters.`)
}
else if(hacker1.length<hacker2.length)
{
  console.log(`It seems that the navigator has the longest name, it has `+hacker2.length+` characters.`)
}
else
{
  console.log(`Wow, you both have equally long names, XX characters!.`)
}

// Iteration 3: Loops

let hacker1Uppercase=""

for(i=0;i<hacker1.length;i++){
  hacker1Uppercase += hacker1.charAt(i).toUpperCase()+" "
}
console.log(hacker1Uppercase)

let hacker2Reverse=""
for(i=(hacker2.length);i>=0;i--){
  hacker2Reverse+=hacker2.charAt(i)
}
console.log(hacker2Reverse)

switch(hacker1.localeCompare(hacker2)){
  case -1:
    console.log("The driver's name goes first.")
    break;
  case 1:
    console.log("Yo, the navigator goes first definitely.")
    break;
  default:
    console.log("What?! You both have the same name?")
}