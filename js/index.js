let hacker1 = "Katherin"; 

console.log(`The driver is name ${hacker1}`);

let hacker2 = "Alexis"; 

console.log(`The navigator's name is ${hacker2}`);



if (hacker1.length > hacker2.length ) {console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)}

else if (hacker2.length > hacker1.length)
{ console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`) }

else {console.log(`It seems they both have ${hacker2.length} characters!`)}

/* 3rd iteration

### Iteration 3: Loops
  3.1 Print all the characters of the driver's name, separated by a space and [in capitals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)
  i.e. `"J O H N"`
  
  3.2 Print all the characters of the navigator's name, in reverse order. 
  i.e. `"nhoJ"`
  
  3.3 Depending on the [lexicographic order](https://en.wikipedia.org/wiki/Lexicographical_order) of the strings, print: <br>
    - `The driver's name goes first.` <br>
    - `Yo, the navigator goes first definitely.` <br>
    - `What?! You both have the same name?` */

  let driverUpper = hacker1.toUpperCase();
  //console.log(driverUpper);

let driverNeedsSpace = driverUpper.split('').join(' ');
console.log(driverNeedsSpace);

let splitHacker2 = hacker2.split('');
//console.log(splitHacker2);

let reverseHacker = splitHacker2.reverse().join('');
console.log(reverseHacker);

                         
/*if (hacker1.localeCompare(hacker2) == -1) {
  console.log(`The driver's name goes first.`)
} 
                              
if (hacker1.localeCompare(hacker2) == 1) {
console.log(`Yo, the navigator goes first definitely.`)
}

if (hacker1 === hacker2)
 {console.log(`What?! You both have the same name?`)
}*/


if (hacker1.localeCompare(hacker2) == -1) {
  console.log(`The driver's name goes first.`)
} 
                              
else if (hacker1.localeCompare(hacker2) == 1) {
console.log(`Yo, the navigator goes first definitely.`)
}

else {
  (`What?! You both have the same name?`)
}
