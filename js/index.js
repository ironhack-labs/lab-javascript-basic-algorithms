//exercicio_01

let driver = 'Fabiana';
console.log(`The driver's name is ${driver}`);
let navigator = 'Zé Roberto';
console.log(`The navigator's name is ${navigator}`);


//exercicio_02

let driver = prompt("What's driver's name?");
let navigator = prompt("What's navigator's name?");
if(driver.length > navigator.length){
  console.log(`The DRIVER has the longest name: ${driver.length}`);
} else if (driver.length < navigator.length) {
  console.log(`The NAVIGATOR has the longest name: ${navigator.length}`);
} else {
  console.log (`Wow, you both have equally long names, ${navigator.length} character`);
}


//exercicio_03

let dDriv = 'Roberto';
let dNavi = 'Fabiana';
let dNew1 = '';
let dNew2 = '';

for(let i=0; i < dDriv.length; i++){
  dNew1 += dDriv[i].toUpperCase() + " ";
}
dNew1 = dNew1.trim();

console.log(dNew1);

for(let i = dNavi.length - 1; i >= 0; i--){
  dNew2 += `${dNavi[i]}`;
}console.log(dNew2);

if(dDriv.localeCompare(dNavi)>0){
  console.log(dNavi + ' goes first');
} else if (dNavi.localeCompare(dDriv) < 0){
  console.log(dDriv + ' goes first');
} else {
  console.log('What?! You both have the same name?');
}


//Bonus_01

let para01 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been Latin the industry's standard dummy text ever since the 1500s";

let para02 = "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature fromup one of the more obscure Latin words,";

let para03 = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ";

let armazen = para01 + para02 + para03;

let countparagraf = armazen.length;
console.log(countparagraf);

count = 0;

for(let i=0; i<armazen.length; i++){
  if(armazen.startsWith('Latin', i)){
    count++;
     }
}

console.log(`Appers: ${count} times`);


//Bonus_02

let str = 'ANA ana ANa aNa';
let reversed = '';
let reg = /[\W_]/g;

let smallStr = str.toLowerCase().replace(reg, "");

for(let i = smallStr.length-1; i >= 0; i--){
  reversed += smallStr[i];
}

if(reversed == smallStr) {
  console.log('Is Palidrome');
} 
