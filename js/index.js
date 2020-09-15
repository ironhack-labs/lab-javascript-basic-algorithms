// Iteration 1: Names and Input
const hacker1 = 'Lovro';
console.log("The driver's name is " + hacker1);
const hacker2 = 'Mihael';
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
  } else if (hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
  } else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
  }
  

// Iteration 3: Loops
let upSpace = ""
for (let i = 0; i < hacker1.length; i++)
 {
   upSpace = upSpace + hacker1[i].toUpperCase() + ' ';
 }
console.log("The driver's name is " + upSpace);

let reverse = '';
for(let i = hacker2.length-1; i >= 0; i--){
  reverse += hacker2[i];
}
console.log(reverse);

let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc euismod quam justo. Phasellus commodo blandit dui, quis vestibulum turpis condimentum et. Vestibulum nec fringilla arcu. Nulla efficitur non magna at maximus. Sed quis posuere tellus. Aenean sem lectus, pretium at faucibus vel, blandit sed urna. Morbi aliquam erat mi, quis tempus mi ornare eget. Donec justo leo, facilisis a odio et, sagittis pulvinar erat. Donec hendrerit interdum tellus. Donec ac dolor at enim fermentum ultrices. Sed euismod, tellus ac auctor congue, purus augue eleifend ante, vitae facilisis lacus justo eu erat.";
let words = 0;
for(i=0; i<lorem.length; i++){
  if(lorem[i] === " "){
    words++;
  } else {
    continue;
  }
}
console.log(words)