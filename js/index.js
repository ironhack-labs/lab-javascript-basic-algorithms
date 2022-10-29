// Iteration 1: Names and Input
let hacker1 = "Barbara";
console.log (`The driver's name is ${hacker1}`) ; 

let hacker2 = "Alexandra" ; 
console.log (`The navigator's name is ${hacker2}`) ;
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log ( `The driver has the longest name, it has ${hacker1.length} characters ` )
  }
    else if (hacker2.length >  hacker1.length) {
      console.log ( `It seems that the navigator has the longest name, it has,${hacker2.length} characters`);
    }
      else {
      console.log (`Wow, you both have equally long names,${hacker2.length} characters!`)
    }
    

// Iteration 3: Loops
// 3.1 UpperCase + espaciado //
let upName = hacker1.toUpperCase()
let result = ''
for (let i = 0; i < upName.length; i ++) {
  result += upName[i]+ ' '
}
console.log(result); 
// 3.2 hacker 2 al reves //
let reverseH2 =''
for (let i = hacker2.length - 1; i >= 0; i--) {
        reverseH2 += hacker2[i];
    }
  console.log (reverseH2);

  // 3.3 lexigraphic order//
  if (hacker1 > hacker2 ) {
    console.log ( `The driver's name goes first`)
  }
  else if (hacker2> hacker1) {
    console.log (`Yo, the navigator goes first definitely.`)
  }
  else {
    console.log (`What?! You both have the same name?`)
  }