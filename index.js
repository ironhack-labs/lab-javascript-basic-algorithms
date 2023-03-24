// Iteration 1: Names and Input

// 1.1

let hacker1 = "Mike";

// 1.2

console.log(`The driver's name is ${hacker1}`);

// 1.3

let hacker2 = "John";

// 1.4

console.log(`The driver's name is ${hacker2}`);

// Iteration 2: Conditionals

if(hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}
else if(hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}
else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`)
}

// Iteration 3: Loops

// 3.1

let spaced = ""

for(i = 0; i < hacker1.length; i++){
    spaced += hacker1[i] + " ";
}

spaced = spaced.toUpperCase();

console.log(spaced.trimEnd());

// 3.2

let reversed = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
  reversed += hacker2[i];
}

console.log(reversed);

// 3.3

if(hacker1[0]<hacker2[0]){
    console.log ("The driver's name goes first")
  } else if (hacker1[0]>hacker2[0]){
    console.log ("Yo, the navigator goes first, definitely.")
  } else {console.log ("What?! You both have the same name?") 
}

// Bonus Time

// Bonus 1

let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc blandit, ex at porttitor hendrerit, arcu nibh molestie lorem, ut tempus nunc nibh in velit. Maecenas ipsum sem, condimentum in mollis ut, mollis ut nisi. Pellentesque dapibus elit non rutrum sollicitudin. Aliquam accumsan faucibus felis a elementum. Praesent ante est, venenatis sit amet dui nec, interdum placerat quam. Sed arcu lorem, consectetur quis rutrum at, dictum et neque. Aliquam elementum, nibh nec pellentesque ullamcorper, quam dui suscipit erat, at porta elit leo non sem. Morbi eget cursus sem, non eleifend ligula. Nunc sed vestibulum ligula. Nullam posuere purus ante. Etiam bibendum finibus sollicitudin. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris molestie ligula vitae odio vulputate blandit. Donec at vehicula magna. Pellentesque vitae interdum justo, non pulvinar nunc. Aliquam erat volutpat. Vivamus pretium elit elementum turpis maximus, in pretium purus rutrum. Mauris nec finibus dolor, quis hendrerit velit. Etiam auctor libero mauris, placerat sollicitudin sem egestas vitae. Donec venenatis ante sed odio tincidunt malesuada. Praesent ac porttitor neque. In mi urna, aliquam et arcu a, venenatis ultricies dui. Pellentesque eu lorem lectus. Nullam porta luctus vestibulum. Cras pretium molestie arcu sed pellentesque. Sed varius dolor quis odio malesuada suscipit. Duis at malesuada lorem. Vestibulum laoreet arcu quis tempor molestie. Nulla pharetra elit lobortis aliquet ultricies. Nam dignissim posuere turpis. Phasellus tellus tortor, pulvinar ut risus eu, maximus feugiat erat. Suspendisse sed sagittis mauris. Morbi eget feugiat augue, sed accumsan lorem. Pellentesque sed sem nulla. Aenean finibus erat sit amet aliquet tincidunt."


let wordCount = longText.split(" ");
console.log(wordCount.length);

// Count the number of times the Latin word "et" appears.

let etCount = 0;

for (let i = 0; i < wordCount.length; i++) {
  const char = wordCount[i];

  if (char === "et") {
    etCount++;
  }
}
console.log(etCount);


// Bonus 2

const phraseToCheck = "No 'x' in Nixon"
let phraseToCheckRemoved = ""
let phraseToCheckReverse = ""


//Remove spaces, ', ?, , and !

for (i = 0; i < phraseToCheck.length; i++){
    if ( "'" === phraseToCheck[i])
        continue;
     else if ( "!" === phraseToCheck[i]) {
         continue;
        }   else if ( " " === phraseToCheck[i]) {
         continue;
        } else if ( "," === phraseToCheck[i]) {
         continue;
        } else if ( "?" === phraseToCheck[i]) {
         continue;
        } else {
      phraseToCheckRemoved += phraseToCheck[i]
    }  
  }

phraseToCheckRemoved = phraseToCheckRemoved.toLowerCase();

//Reverse
for (i = phraseToCheckRemoved.length-1; i >= 0; i--) {
    phraseToCheckReverse += phraseToCheckRemoved[i]
}

//Compare
if (phraseToCheckRemoved === phraseToCheckReverse){
    console.log("It´s a palindrome!")
}
else {
    console.log("It´s not palindrome!")
}