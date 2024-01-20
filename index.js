//Iteration 1: names and Input
let hacker1 = "Joseph";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Philip";
console.log(`The navigator's name is ${hacker2}`);

//Iteration 2: conditionals
if (hacker1.length > hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length){
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`)


//Iteration 3: Loops
//3.1 Print the characters of the driver's name, separated by space, and in capital letters,
let hacker1Capital = "";
for (let i = 0; i < hacker1.length; i++){
  const hacker1Name = hacker1[i];  
  hacker1Capital+= hacker1[i];
  console.log(`${hacker1Name}`.toUpperCase() + " ")
}

//Print all the characters of the navigator's name in reverse order
let hacker2Reverse = "";
for (let i = hacker2.length-1; i >=0; i--){
  const hacker2Name = hacker2[i];  
  hacker2Reverse+= hacker2[i];
  console.log(`${hacker2Name}`.toUpperCase() + " ")
}

//Depending on the lexicographic order of the strings, print:
if(hacker1.localeCompare(hacker2) === -1){
  console.log(`The driver's name goes first.`)
}
else if(hacker1.localeCompare(hacker2) === 1){
  console.log(`The navigator's name goes first, definitely.`)
}
else {
  console.log( `What?! You both have the same name?`)
}

//Bonus 1:Generate 3 paragraphs. Store the text in a new string variable named longText.
let longText=`"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? 
Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"`
//Make your program count the number of words in the string.
console.log(longText.length);
//Make your program count the number of times the Latin word et appears.
let etCount = 0;
for (let i = 0; i < longText.length; i++){
  const etString = longText[i] + longText[i+1];
  if(etString === "et"){
    etCount++;
  }
}
console.log(etCount);

//Bonus 2:
//Create a new variable, phraseToCheck, containing some string value. Write a code to check if the value assigned to this variable is a Palindrome. 
const phraseToCheck="putitup";
let phraseToCheckReverse = "";
for (let i = phraseToCheck.length-1; i >=0; i--){
  const phraseToCheckName = phraseToCheck[i];  
  phraseToCheckReverse+= phraseToCheck[i];
  //console.log(`${phraseToCheckName}`)
}
  if(phraseToCheck === phraseToCheckReverse){
    console.log("It's a Palindrome");
    }
  else{
    console.log("It's not a Palindrome");
  }

