// Iteration 1: Names and Input

const hacker1 = "Jani";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Lina";
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals

if(hacker1.length > hacker2.length) {

  console.log(`The driver has the longest name, it has ${hacker1.length} characters`);  
}

else if (hacker1.length < hacker2.length) {

    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
}

else {
  console.log(`Wow, you both have equally long names, ${hacker1.length || hacker2.length} characters!`)
}


// Iteration 3: Loops
// 3.1 Uppercase 

let driverName = "";
for (let i=0; i < hacker1.length; i++) {
    driverName += `${hacker1[i]} `
}
console.log(driverName.toUpperCase())

// 3.2 Reverse order 

let hacker2Reversed = "";
for ( let j= hacker2.length-1; j >= 0; j--) {
    hacker2Reversed += `${hacker2[j]}`
}
console.log(hacker2Reversed)

// 3.3 Lexicographic order 

if (hacker1.localeCompare(hacker2) === -1) {  //===> Jani is before Lina
console.log("The driver's name goes first")}

else if (hacker1.localeCompare(hacker2) === 1) { //==> Jani is after Lina
console.log("Yo, the navigator goes first, definitely.")}

else if (hacker1.localeCompare(hacker2) === 0) {  //==> Jani & Lina would be equal
console.log("What?! You both have the same name?")}

// Bonus 1 

let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet facilisis purus. Cras eget lacus et lorem vehicula bibendum ac vel sem. Cras aliquam semper varius. Nunc vehicula porttitor mi maximus molestie. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce dui diam, sagittis a egestas in, volutpat non purus. Sed sed egestas ligula. Vivamus ut ligula nec ex ullamcorper commodo eget non magna. In hac habitasse platea dictumst. Donec fringilla turpis vitae nisi congue pellentesque. Duis non sem quam. In at sapien dapibus, mattis lorem eu, mattis libero. In et malesuada dolor. Integer dui lorem, luctus eu egestas nec, mollis ac ipsum.

Donec fringilla consectetur tristique. Donec ultricies vehicula mauris sed placerat. Praesent sodales tempus dignissim. Mauris tempus eros nec velit suscipit mollis. Vestibulum sed metus id nulla euismod cursus quis ac ex. Sed lacinia sapien id sollicitudin vehicula. Maecenas eget sapien metus. Duis ut fringilla odio, id accumsan nisl. In dictum mattis nisi ut suscipit. Ut consectetur mi non vulputate consequat. Nam eu ipsum elementum, fringilla justo sit amet, dapibus ante. Sed magna lectus, congue sit amet tristique vitae, suscipit vitae mauris. Nunc fringilla fermentum ante vitae placerat.

Proin fringilla, leo in vulputate dapibus, arcu dui malesuada neque, ut aliquam lacus mauris eget neque. Maecenas turpis nibh, rutrum convallis lacus in, auctor faucibus mauris. Curabitur semper lectus vel consectetur fermentum. Fusce mauris diam, ultrices finibus auctor ac, gravida eu justo. Vivamus non mi nec sapien lacinia semper nec eu lectus. Nunc at odio turpis. Curabitur ut tortor ac ligula sodales lobortis ut at sem. Nulla erat ipsum, placerat sit amet lorem in, facilisis elementum nisl. Cras gravida lectus nisi. Nulla placerat in nunc non tempus. Vivamus tincidunt nec diam eget aliquet. Cras et auctor massa. Sed sodales, sapien nec mollis scelerisque, ex urna maximus elit, id auctor lacus neque at lacus. Nulla vehicula urna sapien, a tristique arcu convallis sed. Sed vitae nulla odio.`;


function loremIpsumProgram(text) {

  const numberOfWords = text.split(" ");
console.log(numberOfWords.length);

  const numberOfEt = text.indexOf("et");
console.log(numberOfEt);
  
}
loremIpsumProgram(longText);

// Bonus 2 

    // start by removing the spaces

let phraseToCheck = "Was it a car or a cat I saw?";

const phraseWithoutSpaces = phraseToCheck.split(" ");
    // console.log(phraseWithoutSpaces);

    // result above creates an array of strings

    // join the strings together and assign value to new string

const newString = phraseWithoutSpaces.join("");
console.log(newString);

let reverse = "";

for(let i = newString.length -1; i <= 0; i--) {

  if (newString[i] === "?" || "!") {

      continue;
    
  }
  
  console.log(newString[i]);
    // reverse += 
}

console.log(reverse);