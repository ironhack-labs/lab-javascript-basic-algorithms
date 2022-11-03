const hacker1= "Luana";
const hacker2="Jay";

console.log(`"The driver's name is ${hacker1}."`);
console.log(`"The navigator name is ${hacker2}."`);

if(hacker1.length>hacker2.length){
  console.log(`The driver has the longest name; it has ${hacker1.length} characters.`);

}else if
  (hacker1.length<hacker2.length){
console.log(`It seems that the navigatior has the longest name; it has ${hacker2.length} characters.`);

}else{
  (hacker1.length===hacker2.length)
console.log(`Wow, you both have the equaly long names.`);
}

let capitalize = hacker1.toUpperCase()
let result = ''
for (let i = 0; i < capitalize.length; i ++) {
  result += capitalize[i]+ ' '
}
console.log(result)

let reverseName = '';

for (let i = hacker2.length - 1; i >= 0; i--) {
  reverseName += hacker2[i]; 
}

console.log(reverseName);

if (hacker1 < hacker2) {
  console.log(`The driver's name goes first.`);
} else if (hacker1 > hacker2) {
  console.log(`Yo, the navigator goes first definitely.`);
} else if (hacker1 === hacker2) {
  console.log(`What?! You both have the same name?`);
}
