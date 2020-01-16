let hacker1= "Fernando";
console.log(`The driver's name is ${hacker1}`);
let hacker2="jordi";
console.log(`The navigator's name is ${hacker2}`);

//interation 2

if(hacker1.length > hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}
else if(hacker2.length > hacker1.length){
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}
else{
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`)
}

//interation 3

hacker1.toUpperCase()

  .split("")
  .join(" ");

hacker1.toUpperCase()

  .split("")
  .reverse("")
  .join(" ");
let comparehacker = hacker2.localeCompare(hacker1);

if(comparehacker === -1){
  console.log("The driver's name goes first.");
}
else if(comparehacker === 1){
console.log("Yo, the navigator goes first definitely.");
}
else if(comparehacker === 0){
  console.log("What?! You both have the same name?");
}
console.log(comparehacker);