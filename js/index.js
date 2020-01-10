console.log("Iteration 1 : ");   
// 1.1 Create a variable `hacker1` with the driver's name.
let hacker1 = 'Driver123'

// 1.2 Print `"The driver's name is XXXX"`.
console.log(`The driver\'s name is ${hacker1}`);

// 1.3 Create a variable `hacker2` with the navigator's name.ac
let hacker2 = 'Navigator1';

// 1.4 Print `"The navigator's name is YYYY"`.
console.log(`The navigator's name is ${hacker2}`);

console.log("\nIteration 2: Conditionalas ");  
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.


switch (true) {
  case hacker1.length > hacker2.length :
    console.log (`The driver has the longest name, it has ${hacker1.length} characters.`);
    break;
  case hacker1.length < hacker2.length :  
    console.log (`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
    break;  
  default :
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`)
}

console.log("\nIteration 3: Loops"); 
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"

let word1 = "";

for (let i=0; i < hacker1.length; i++ ){
 word1 = word1.concat(hacker1[i].toUpperCase());
 if (i !== (hacker1.length -1 )){
   word1 = word1.concat(" ");
  }
}
console.log(`"${word1}"`);

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
word1 = "";

for (i = (hacker2.length - 1); i >= 0 ; i--){
  word1 = word1.concat(hacker2[i]);
}
console.log(`"${word1}"`);

// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?

let hacker1Big = false;
let hacker2Big = false;

for (i = 0; (i < hacker1.length || i < hacker2.length); i++){
 if (hacker1.charCodeAt(i) < hacker2.charCodeAt(i)) {
   hacker2Big = true;
   break;
  } else if (hacker1.charCodeAt(i) > hacker2.charCodeAt(i)){
    hacker1Big = true;
    break;
    } else if (hacker1.charCodeAt(i) === hacker2.charCodeAt(i)){ 
     continue;
     }
}
 switch (true){
   case hacker1Big :
       console.log("Yo, the navigator goes first definitely.");
       break;
   case hacker2Big :
       console.log("The driver's name goes first.");
       break;
   case (hacker1.length < hacker2.length) :
       console.log("The driver's name goes first.");
       break;
   case (hacker1.length > hacker2.length) :
       console.log("Yo, the navigator goes first definitely.");
       break;
   case (hacker1.length === hacker2.length) :
       console.log("What?! You both have the same name?");
       break;
 }


console.log("\nBonus 1 : ");

let para1= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt ligula vel est laoreet, eget tincidunt urna ultricies. Nulla sit amet lacinia eros. Morbi tincidunt urna velit. Nulla faucibus metus at arcu scelerisque mollis. Aliquam erat volutpat. Proin eleifend felis et mi pharetra efficitur. Ut orci ipsum, semper vel fringilla eu, feugiat sit amet urna. Maecenas quis arcu vitae purus rhoncus auctor. Sed nibh lectus, vehicula ac tellus vel, tincidunt ornare ligula. Proin sapien augue, dignissim ac ipsum vel, ultrices hendrerit neque. Nam tristique lectus in ipsum accumsan, eu porta odio posuere. Nunc tincidunt placerat sapien vel dictum. Fusce metus ipsum, euismod at tellus non, condimentum aliquet nisi. Suspendisse nisl elit, porttitor nec tellus nec, sollicitudin egestas leo. Nulla facilisi. Phasellus congue sapien diam, vitae vulputate metus varius eu. Maecenas nulla dui, pretium ut venenatis quis, mattis quis erat. Cras at mauris posuere, pellentesque mi consequat, vehicula lectus. Vivamus nec mi mauris. Sed viverra pulvinar ante eget varius. Integer at scelerisque justo, et hendrerit metus. Donec lobortis, sem non tempus ultricies, felis neque tincidunt est, vel pulvinar massa sapien ac eros. Mauris eu mi varius, dignissim massa vitae, tincidunt velit. Nulla neque nisl, dignissim ut consequat sit amet, dictum at neque. Nam blandit sapien odio, eu dictum dui molestie quis. Ut consectetur lacus a libero scelerisque sollicitudin. Suspendisse molestie, ligula et imperdiet imperdiet, nulla ipsum pulvinar metus, vitae venenatis massa ligula ut lacus. Nullam ac vulputate lectus, accumsan venenatis elit. Sed at vulputate ipsum."

console.log("No of words in the paragraph is : " + para1.split(" ").length);

console.log("\nBonus 2 : ");
let phraseToCheck = "Amor, Roma";
let num2 = phraseToCheck.length - 1;
let num1;
for ( num1 = 0; num1 <= num2; ) {
 if (!/^[a-zA-Z0-9]/.test(phraseToCheck[num1])) {
      num1++;
      continue;
 } else if (!/^[a-zA-Z0-9]/.test(phraseToCheck[num2])){
      num2--;
      continue;
 } else if(phraseToCheck[num1].toUpperCase() !== phraseToCheck[num2].toUpperCase()){
   console.log(`${phraseToCheck} is not a palindrome`);
   break;
 } else {
   num1++;
   num2--;
 }
}
if (num1 >= num2) {
  console.log(`${phraseToCheck} is a palindrome`);
}
