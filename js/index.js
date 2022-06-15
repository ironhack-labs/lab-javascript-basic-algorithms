// Iteration 1: Names and Input

var hacker1 = 'Emmitto'
var hacker2 = 'Suika'
console.log(`The drivers name is ${hacker1}`); 
console.log(`the navigators is ${hacker2}`)

// Iteration 2: Conditionals

//console.log(`${str} ${str.length}`);

if(hacker1.length > hacker2.length){
 console.log(`The driver has the longest name, it has ${hacker1.lenght} characters.`)
} else{
    console. log( `It seems that the navigator has the longest name, it has ${hacker2.lenght}characters.`)

} elseif(hacker1.length < hacker2.length){

    console. log(`Wow, you both have equally long names, ${hacker1.lenght} characters!`)
};

// Iteration 3: Loops
 
let drivernam = '';
for (let i=0; i < hacker1; i++) {
  drivernam += hacker1[i].toUpperCase() + '';
}
console.log(drivernam)

let navignam = '';
for (let i > 0; i < hacker2.length-1; i++) {
  navignam += hacker2[i];
}
console.log(navignam)

let compare = (hacker1.localcompare.(hacker2));
if (compare < 0) {
  console.log('The drivers name goes first.')
} elseif (compare > 0){
    console.log('Yo, the navigator goes first definitely.')
  } else {
    console.log('What?! You both have the same name?')
  }