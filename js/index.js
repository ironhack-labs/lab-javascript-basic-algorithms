console.log("I'm ready!")
let hacker1 = "Michail";
console.log(`The driver's name is ${hacker1}.`);

let hacker2 = "Potap";
console.log(`The navigator's name is ${hacker2}.`);

if (hacker1.length  > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length<hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
  console.log(`Wow, you both have equally long names, ${hacker2.length} characters.`)};

let resultName1 = hacker1.toUpperCase()
console.log(resultName1)
let index=0;
let output1="";
for (let index=0; index <hacker1.length; index++) {
    output1+=hacker1[index].toUpperCase() + " ";
}
console.log(output1);


let output2=""

for (let index2=hacker2.length-1; index2>=0; index2--) {
    output2+=hacker2[index2];
}
console.log(output2);


if (hacker1.localeCompare(hacker2)===-1){
    console.log(`The driver's name goes first.`)
} else if (hacker1.localeCompare(hacker2)===1){
    console.log(`Yo, the navigator goes first definitely.`)
} else {
    console.log(`What?! You both have the same name?`)
}

/*
// To compare first caracters
let CaracterDr = hacker1.charAt(0); 
     CaracterNav = hacker2.charAt(0);
if (CaracterDr.localeCompare(CaracterNav)===-1){
    console.log(`The driver's name goes first.`)
} else if (CaracterDr.localeCompare(CaracterNav)===1){
    console.log(`Yo, the navigator goes first definitely.`)
} else {
    console.log(`What?! You both have the same name?`)
};
*/
/*
index=0;
index2=0;
let CaracterDri = hacker1.charAt(index); 
let CaracterNav = hacker2.charAt(index2); 
while (index<hacker1.length && index<hacker2.length)
{index++ && index2++
    if (CaracterDri.localeCompare(CaracterNav)===-1){
        console.log(`The driver's name goes first.`)
        break;
    } else if (CaracterDri.localeCompare(CaracterNav)===1){
        console.log(`Yo, the navigator goes first definitely.`)
        break;
    } else {
        console.log(`What?! You both have the same name?`)
    }

}
*/
 /*/To compare each letter   
for (let CaracterDr = hacker1.charAt(index); 
     CaracterNav = hacker2.charAt(index2); 
     index<hacker1.length && index<hacker2.length; 
     index++ && index2++)
{if (CaracterDr.localeCompare(CaracterNav)===-1){
    console.log(`The driver's name goes first.`)
} else if (CaracterDr.localeCompare(CaracterNav)===1){
    console.log(`Yo, the navigator goes first definitely.`)
} else {
    console.log(`What?! You both have the same name?`)
}};*/
