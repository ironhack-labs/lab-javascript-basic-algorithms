let hacker1 = "Jonathan";

let hacker2 = "Jonathan";

console.log("The driver's name is " + `${hacker1}`);

console.log("The navigator's name is " + `${hacker2}`);

if(hacker1.length > hacker2.length){
  console.log(`The driver ${hacker1} has the longest name, it has ${hacker1.length} characters.`);
}else if(hacker2.length > hacker1.length){
  console.log(`The navigator ${hacker2} has the longest name, it has ${hacker2.length} characters.`);
}else{
  console.log(`Wow, you both have equally long names, ${hacker1.length = hacker2.length} characters!.`);
}

console.log(hacker1.split("").join(" ").toUpperCase());
console.log(hacker1.split("").reverse().join(""));

array= [hacker1, hacker2];
console.log(array.sort());



if (hacker1.localeCompare(hacker2)== -1){
  console.log (`The driver's name goes first.`);
}else if(hacker1.localeCompare(hacker2)== 1){
  console.log (`Yo, the navigator goes first definitely.`);
}else{
  console.log(`What?! You both have the same name?.`);
}