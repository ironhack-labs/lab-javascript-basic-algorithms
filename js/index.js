// Iteration 1: Names and Input

//


const hacker1 = "Amanda";

console.log(`The driver's name is ${hacker1}`);


const hacker2 = "Adam";

console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals

if(hacker1.length > hacker2.length){

    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);

} else if (hacker2.length > hacker1.length) {

    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);

}else {

    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)

} 

// Iteration 3: Loops
//Print all the characters of the driver's name, separated by a space and in capitals
let driver = "";
for (var i = 0; i < hacker1.length; i++) {
  //we want a variable to store our upper case letters
  let upperCaseLetter = hacker1[i].toUpperCase();
  driver += upperCaseLetter + " ";
}
console.log(driver);

//Print all the characters of the navigator's name, in reverse order.
let navReverse = "";
//you get the last index by saying lenght -1
for (var i = hacker2.length -1; i >= 0; i--) {
  navReverse += hacker2[i];
}
console.log(navReverse); 

//sort strings alphabetically

//sort with 'localeCompare'
        if (hacker1.localeCompare(hacker2) === 1){
        console.log("Yo, the navigator goes first definitely.");
        } else if (hacker1.localeCompare(hacker2) === -1){
        console.log("The driver's name goes first.");
        } else {
            console.log("What?! You both have the same name?");
        }

//sort with if and for loop
let longestWord = "";

if (hacker1.length >= hacker2.length) {
  longestWord = hacker1;
} else {
  longestWord = hacker2;
}

for (let i = 0; i < longestWord.length; i++) {
  if (hacker1 === hacker2){
    console.log("What?! You both have the same name?");
    break;
  } else if (hacker1[i] < hacker2[i] || hacker1[i] === undefined){//this orders characters alphabetically
    console.log("The driver's name goes first.");
    break;
  } else if (hacker2[i] < hacker1[i] || hacker2[i] === undefined){
    console.log("Yo, the navigator goes first definitely.");
    break;
  }
}

//bonus 1
let lorem = `Watch yourself, Wedge! Three from above! Red Three, Red Two, pull in! Got it! 
Three of them coming in, twenty degrees! Cut to the left! I'll take the leader! They're heading for the medical frigate. 
Pressure's steady. Only the fighters are attacking. I wonder what those Star Destroyers are waiting for. We're in attack position now, sir. 
Hold here. We're not going to attack? I have my orders from the Emperor himself. He has something special planned for them. 
We only need to keep them from escaping.
Yes! I said closer! Move as close as you can and engage those Star Destroyers at point-blank range. 
At that close range, we won't last long against those Star Destroyers. We'll last longer then we will against that Death Star...and we might just take a few of them with us. 
She's gonna blow! I'm hit!
They did it! I'm sure Luke wasn't on that thing when it blew. He wasn't. I can feel it. You love him, don't you? Yes. All right. 
I understand. Fine. When he comes back, I won't get in the way. No, it's not like that at all. He's my brother.`

//count number of words in string
let wordNumber = lorem.split(" ").length; //not sure why i have to use .length here?
console.log(`The string 'Lorem' has ${wordNumber} words`);

//count the number of times et (I chose 'it' instead) appears
//search for pattern in 'splitString'
let itCount = 0;
//splits the string by the times ' it' is found
//the lack of space on the right is on purpose so the 'it!' or 'it.' are accounted for
const itSplit = lorem.split(" it");
for (let i = 0; i < itSplit.length - 1; i++) {
  itCount++;
}
console.log(`\"it\" appears ${itCount} times.`);

