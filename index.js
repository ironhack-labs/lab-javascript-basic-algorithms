//interation1
let hacker1= `Meow`;
let hacker1upperCase = "";
console.log(`the driver's name is ${hacker1} `)
let hacker2= `Alligator`;
console.log(`the navigator's name is ${hacker2} `);

//interation2

if(hacker1.length<hacker2.length){
  console.log (`the navigator has the longest name, it has ${hacker2.length} characters!`)
}
else if(hacker1.length>hacker2.length){
  console.log(`the driver has the longest name, it has ${hacker1.length} characters!`)
}
else{
  console.log(`wow, you both same length of names, it is : ${hacker2.length} characters`)
}


//interation3
for (const value of hacker1.toUpperCase()) {
  hacker1upperCase += value + " "
}
console.log(hacker1upperCase)

const str = hacker2;
let reversedStr = "";
for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i] ;
}
console.log(reversedStr);

if(hacker1>hacker2){
  console.log(`yo,navigator's name goes first`)
}
if(hacker1<hacker2){
  console.log(`the driver's name goess first`)
}
if(hacker1==hacker2){
  console.log(`no way, you have the same name`)
}
