// Iteration 1: Names and Input

let hacker1 = "Luis";
console.log(`The driver\'s name is ${hacker1}`);
let hacker2 = "João";
console.log(`The navigator\'s name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
}else if(hacker1.length < hacker2.length){
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
}else{
  console.log(`What?! You both have the same name?`);
}

// Iteration 3: Loops

let hacker1UpperCase = hacker1.toUpperCase();
let hacker1Seperated = "";
for (i = 0;i<hacker1.length;i++){
  hacker1Seperated += hacker1UpperCase[i];
  hacker1Seperated += " ";
}
console.log(hacker1Seperated);

let hacker2Reversed = "";
for (i = hacker2.length-1; i>=0;i--){
  hacker2Reversed += hacker2[i];
}
console.log(hacker2Reversed);

if(hacker1.localeCompare(hacker2) === -1){
  console.log("The driver's name goes first.");
}else if (hacker1.localeCompare(hacker2) === 1){
  console.log("Yo, the navigator goes first definitely.");
}else{
  console.log("What?! You both have the same name?");
}

//Bonus 

let loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lectus felis, luctus vel egestas ac, porta at neque. Integer gravida et dolor et sollicitudin. Aenean quam metus, rhoncus a sollicitudin sed, venenatis vitae ex. Sed diam neque, viverra sit amet ullamcorper nec, viverra vel lectus. Praesent pellentesque nunc turpis, a dictum urna bibendum sit amet. Nullam ornare maximus ipsum, semper sodales lorem placerat id. Pellentesque ut vestibulum mauris. In quis suscipit est. Nulla facilisi. Ut bibendum, lorem in hendrerit vestibulum, magna nibh placerat mauris, vitae sagittis mi tortor et justo. Morbi volutpat auctor dolor nec mollis. In magna quam, fermentum sit amet eleifend eu, condimentum ac mauris. Mauris accumsan placerat lacus in fermentum. In non porta nisi. Morbi quis ante ut ipsum laoreet tristique a id tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus cursus justo id nisi sollicitudin, id ultricies ligula euismod. Nam id velit metus. Proin laoreet, erat sed bibendum vehicula, lorem augue sollicitudin tellus, non ultrices nisl urna non felis. Nunc mauris nisi, sollicitudin in dapibus nec, scelerisque vitae arcu. Duis eu arcu eget elit feugiat imperdiet id quis augue. Vivamus orci nibh, fringilla eu felis a, pellentesque feugiat arcu. Praesent ac aliquam elit. Nunc enim odio, faucibus ut purus non, viverra placerat sem. Donec sollicitudin arcu tellus, at interdum quam ultricies et. Quisque iaculis et nunc quis feugiat. Nullam sit amet sapien eu erat cursus condimentum non luctus lectus. Nullam fringilla ultrices eros, quis ultrices massa aliquam et. Aenean id dolor interdum, scelerisque magna id, bibendum est. In ultricies lobortis nisi, sit amet tempor massa maximus posuere. Proin placerat risus eu est molestie tristique. Ut eu massa id massa tincidunt posuere eget quis nibh. Suspendisse sed massa non dui pellentesque porta."

let loremIpsumLenght = loremIpsum.length;
console.log(loremIpsumLenght);
let count = 0;

for (i = 0; i<loremIpsumLenght;i++){
  if(loremIpsum[i] === "e"){
    if(loremIpsum[i+1] === "t"){
      count ++;
    }
  }
}

console.log(count);

//Bonus 2

let string = "No 'x' in Nixon";
let stringLowerCase = string.toLowerCase();
console.log(stringLowerCase);
stringLowerCase = stringLowerCase.replace(/ /gi, "");
stringLowerCase = stringLowerCase.replace(/,/gi, "");
stringLowerCase = stringLowerCase.replace("?", "");
stringLowerCase = stringLowerCase.replace(/!/gi, "");
stringLowerCase = stringLowerCase.replace(/'/gi, "");

let stringLowerCaseLength = stringLowerCase.length;
let stringChecker = stringLowerCaseLength - 1;
let isPalindrome = true;

console.log(stringLowerCase);

for (i=0;i<stringLowerCaseLength;i++){
  if (stringLowerCase[i] != stringLowerCase[stringChecker]){
    isPalindrome = false;
    break;
  }else{
    stringChecker--;
  }
}
console.log(isPalindrome);