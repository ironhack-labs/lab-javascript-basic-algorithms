// Iteration 1: Names and Input
let hacker1 = "Grazielli";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Ricardo";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if(hacker1.length>hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}else if(hacker1.length<hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}else{
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`);
}


// Iteration 3: Loops
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"

let hacker1Upper = hacker1.toUpperCase();

let newHacker1 = "";

for(let i = 0; i < hacker1Upper.length; i++){
    if(i < hacker1Upper.length-1){
      newHacker1 = newHacker1 + hacker1Upper[i] + " ";
    } else {
      newHacker1 = newHacker1 + hacker1Upper[i];
    }
}

console.log(newHacker1);

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"

let newHacker2 = "";

for(let i = hacker2.length-1; i >= 0; i--){
    newHacker2 = newHacker2 + hacker2[i];
}

console.log(newHacker2);

// 3.3 Depending on the lexicographic order of the strings, print:

if(hacker1.localeCompare(hacker2)<0){
    console.log(`The driver's name goes first.`);
}else if(hacker1.localeCompare(hacker2)>0){
    console.log(`Yo, the navigator goes first definitely.`);
}else{
    console.log(`What?! You both have the same name?`);
}

// Bonus 1:

let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempor tellus sed posuere auctor. Aenean vehicula velit vitae aliquam dapibus. Proin varius dapibus turpis, nec imperdiet dolor posuere nec. Suspendisse ultrices nisl sed finibus pellentesque. Vivamus leo nisi, feugiat sed nisi id, lacinia porta mi. Cras sed libero ligula. Maecenas commodo tortor bibendum vulputate finibus. Nam sit amet consequat enim. Donec convallis quis lorem condimentum mattis. Phasellus tristique sed ipsum ut porttitor. Nullam posuere venenatis justo quis scelerisque. Vestibulum ut turpis ut turpis lobortis ultrices. Nunc ornare eget libero et pellentesque. Maecenas a elit aliquam, luctus nunc sit amet, venenatis risus. Praesent ac velit odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris eget magna orci. Cras eleifend nulla quis tellus tempus, sed tempor ex imperdiet. Morbi at sem vel ex tempus tempor. Quisque laoreet risus sapien, sed rutrum velit tristique efficitur. Quisque ex neque, imperdiet vel urna eget, pellentesque pellentesque ipsum. Proin tortor enim, rutrum at euismod non, gravida et ligula. Aliquam eu urna placerat, congue dui ut, porttitor tortor. Fusce vitae urna feugiat diam ultrices scelerisque. Donec ipsum lectus, tincidunt nec lobortis a, euismod at lacus. Nunc porttitor rutrum leo a accumsan. Mauris viverra, nulla et viverra convallis, augue magna dapibus elit, a ultrices ipsum mi sed tortor. Cras mollis nec felis nec hendrerit. Aenean pulvinar et mi aliquet fermentum. Vestibulum pharetra lacus eu vehicula porttitor. Aenean dictum tempor risus nec tincidunt. Suspendisse nec nunc sit amet augue ullamcorper aliquam scelerisque vel dolor. In hac habitasse platea dictumst. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur laoreet lectus in egestas euismod. Nulla non sapien sit amet turpis mollis ullamcorper. Praesent sit amet bibendum augue. Maecenas ut augue a erat placerat rhoncus varius quis urna. Etiam a aliquet dui. In sapien lacus, semper at diam sed, pellentesque faucibus ipsum. Aenean et tellus at nisl condimentum mollis. Etiam placerat faucibus sollicitudin."

let totalSpaces = 1;

for(let i = 0; i<text.length; i++){
  if(text[i] === " "){
    totalSpaces = totalSpaces + 1;
  }
}

console.log(`Quantidade total de espaços na frase: ${totalSpaces}`);

let totalEt = 0;

stringArray = text.split(" ");

for(let i = 0; i < stringArray.length; i++){
  if(stringArray[i] === "et"){
    totalEt = totalEt + 1;
  }
}

console.log(`A palavra et aparece ${totalEt} vezes na frase`);


// Bonus 2:

let phraseToCheck = "No 'x' in Nixon"

phraseReplace = phraseToCheck.toLowerCase();
phraseReplace = phraseReplace.normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, '');

//console.log(phraseReplace);

let newPhrase = ""

for(let i = phraseReplace.length-1; i >= 0; i--){
    newPhrase = newPhrase + phraseReplace[i];
}

if (phraseReplace === newPhrase){
  console.log(`A frase '${phraseToCheck}' é um palindromo!`);
} else {
  console.log(`A frase '${phraseToCheck}' não é um palindromo!`);
}