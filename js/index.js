// Iteration 1: Names and Input


let hacker1 = "Carla"
console.log(`The drive's name is ${hacker1}`);

let hacker2 = "Marco"
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals

if (hacker1.lenght > hacker2.lenght){
console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}

else if (hacker1 < hacker2.lenght){
console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}
else{
console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}


//### Iteration 3: Loops
  3.1 Print all the characters of the driver's name, separated by a space and [in capitals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)
  i.e. `"J O H N"`


  
  3.2 Print all the characters of the navigator's name, in reverse order. 
  i.e. `"nhoJ"`
  
  3.3 Depending on the [lexicographic order](https://en.wikipedia.org/wiki/Lexicographical_order) of the strings, print: <br>
    - `The driver's name goes first.` <br>
    - `Yo, the navigator goes first definitely.` <br>
    - `What?! You both have the same name?`


console.log(hacker1.toUpperCase().split('').join(' '))

console.log(hacker1.reverse())