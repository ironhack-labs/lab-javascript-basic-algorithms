// Iteration 1: Names and Input
let hacker1 = 'amyDriver';
console.log(`The driver's name is ${hacker1}`);

let hacker2 = 'myNavigator';
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if(hacker1.length === hacker2.length){
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`);
  } else if(hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
  } else {
    console.log(`The driver has the longest name, it has ${hacker2.length} characters.`);
  }

// Iteration 3: Loops
let upercaseName = '';
let reverseOrder;
for(let i=0; i<hacker1.length; i++){
  upercaseName += hacker1[i].toUpperCase() + ' ';
}
for(let i=hacker2.length; i>0; i--){
  reverseOrder += hacker1[i];
}
console.log('Upercase: '+upercaseName);
console.log('Reverse order: '+ reverseOrder);


    if(hacker1 === hacker2){
      console.log('What?! You both have the same name?');
     
    } else if(hacker1[0]< hacker2[0]) {
  console.log(`The driver's name goes first.`);
 
      } else {
            console.log(`Yo, the navigator goes first definitely.`);            
        }
        
// bonus1.1
var lorem1= 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum praesentium eaque voluptas sed cum recusandae fugiat quia quaerat voluptatibus, obcaecati tenetur cupiditate quo in odio, voluptatem optio sit est libero?';

var lorem2= 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, architecto tempora cumque libero facere asperiores sequi magni quibusdam, minus ea suscipit maxime repudiandae corporis obcaecati quisquam pariatur ducimus! Commodi, eligendi.';

var lorem3= 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum omnis in, eos incidunt fugit natus inventore aliquid molestiae dolore quo atque eligendi libero, recusandae quam labore culpa hic neque nostrum.';

//bonus1.2
var lorem1Count=0;
var lorem2Count=0;
var lorem3Count=0;

for (let i = 0; i < lorem1.length; i++) {
lorem1Count += i;
}

for (let j = 0; j < lorem2.length; j++) {
lorem2Count += j;
}

for (let x = 0; x < lorem3.length; x++) {
lorem3Count += x;
}

console.log('Lorem1 total: '+ lorem1Count);
console.log('Lorem2 total: '+ lorem2Count);
console.log('Lorem3 total: '+ lorem3Count);

//bonus1.3
let etCounter1 = 0;
let etCounter2 = 0;
let etCounter3 = 0;
for (let i = 0; i < lorem1.split(' ').length; i++) {
if(lorem1.split(' ')[i].includes('et')){
  etCounter1 += 1;
}
}

for (let j = 0; j < lorem2.split(' ').length; j++) {
if(lorem2.split(' ')[j].includes('et')){
  etCounter2 += 1;
}
}

for (let x = 0; x < lorem3.split(' ').length; x++) {
if(lorem3.split(' ')[x].includes('et')){
  etCounter3 += 1;
}
}

console.log('number of times the Latin word et appears for lorem1: '+ etCounter1);
console.log('number of times the Latin word et appears for lorem2: '+ etCounter2);
console.log('number of times the Latin word et appears for lorem3: '+ etCounter3);

//Bonu2
let palindromes = [
"A man", "a plan", "a canal", "Panama!",
"Amor", "Roma", "race car", "stack cats",
"step on no pets", "taco cat", "put it up",
"Was it a car or a cat I saw?", "No 'x' in Nixon"
];

let setToLowerCase;
let strRight;
let strReverted;

for (let i = 0; i < palindromes.length; i++) {
  setToLowerCase = palindromes[i].toLowerCase();
  strRight = setToLowerCase.replace(/\s/g, '');    
  strReverted = strRight.split('').reverse().join('');
 
  if(strRight == strReverted) {      
    console.log (`The \'${palindromes[i]}\' is a palindrome`);
  } else {
    console.log (`The \'${palindromes[i]}\' is NOT a palindrome`);
  }
}