// Iteration 1: Names and Input
let hacker1 = "Jaime";
console.log(`The driver's name is ${hacker1} `);

let hacker2 = "Elliot";
console.log (`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
  console.log (`The driver has the longest name, it has ${hacker1.length} characters`);
}else if (hacker1.length < hacker2.length){
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
}else{
console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops
// 3.1
let hacker1Name = "";

for (let i = 0; i < hacker1.length; i++){

  let letter = hacker1.charAt(i).toUpperCase()
  hacker1Name += letter + " " 
}
console.log(hacker1Name)

// 3.2
let hacker2Name = "";

for (let i =  hacker2.length - 1; i >= 0; i--){
  
  let letter = hacker2.charAt(i)
  hacker2Name += letter
}
console.log(hacker2Name);

// 3.3

let longerName;

if (hacker1.length < hacker2.length){
  longerName = hacker2;
}else if (hacker1.length > hacker2.length){
  longerName = hacker1;
}else{
 longerName = hacker1;
}

for (let i = 0; i < longerName.length; i++){
  if (hacker1[i] === hacker2[i]){
    continue;
  }else if(hacker1[i] < hacker2[i]){
    console.log("The driver's name goes first")
    break;
  }else if (hacker1[i] > hacker2[i]){
  console.log("Yo, the navigator goes first definitely")
    break;
  }else{
    console.log("What?! You both have the same name?")
  } 
}

// Bonus 1

// bonus 1.1
let paragraph = `"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.

Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.

Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?`


//bonus 1.2
let howManyWords = paragraph.split(" ")

console.log (howManyWords.length)

// bonus 1.3

console.log(howManyWords.includes("et"));

let wordEt = 0;

for (let i = 0; i < howManyWords.length; i++){ 
  if (howManyWords[i] === "et"){
    wordEt += 1;
  }else{
  continue;
  }
}
console.log(wordEt);