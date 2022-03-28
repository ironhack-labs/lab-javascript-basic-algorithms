
// Iteration 1: Names and Input

let hacker1 = 'Sepideh';
console.log(`"The driver's name is ${hacker1}"`);

let hacker2 = 'Sina';
console.log(`"The navigator's name is ${hacker2}"`);






// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}else if (hacker1.length == hacker2.length) {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}





// Iteration 3: Loops
//3.1 Print all the characters of the driver's name, separated by a space and in capitals
//Solution One

let driverCapitalize ='';
for (let i = 0 ; i < hacker1.length ; i++) {
  driverCapitalize += hacker1[i].toUpperCase()+' ';
  
}
console.log(driverCapitalize);

let navigatorCapitalize ='';
for (let i = 0 ; i < hacker2.length ; i++) {
  navigatorCapitalize += hacker2[i].toUpperCase()+' ';
  
}
console.log(navigatorCapitalize);



//Solution Two
console.log(hacker1.split("").join(" ").toUpperCase());
console.log(hacker2.split("").join(" ").toUpperCase());







//3.2 Print all the characters of the navigator's name, in reverse order
//Solution One

let driverReverse ='';
for (let i = hacker1.length-1 ; i >= 0 ; i--) {
  driverReverse += hacker1[i];
  
}
console.log(driverReverse);



let navigatorReverse ='';
for (let i = hacker2.length-1 ; i >= 0 ; i--) {
  navigatorReverse += hacker2[i];
  
}
console.log(navigatorReverse);





//Solution Two
console.log(hacker1.split("").reverse().join(""));
console.log(hacker2.split("").reverse().join(""));




//3.3 Depending on the lexicographic order of the strings, print:

if(hacker1.localeCompare(hacker2) === 1){
  console.log("Yo, the navigator goes first definitely.")
}else if(hacker1.localeCompare(hacker2) === 0){
  console.log("What?! You both have the same name?")
}else if(hacker1.localeCompare(hacker2) === -1){
  console.log("The driver's name goes first.")
}






//Bonus 1:
/*Generate 3 paragraphs. Store the text in a variable type of string.
Make your program count the number of words in the string.
Make your program count the number of times the Latin word et appears*/ 

let myLoremText= `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam facilisis sed odio sit amet placerat. Morbi in tincidunt mauris. Integer ornare aliquam lobortis. Nullam at ornare mauris. Donec vel pretium lorem. Etiam interdum dolor magna, mattis dignissim lectus fermentum in. Ut a turpis dapibus, fringilla quam sit amet, hendrerit neque. Integer sollicitudin dignissim massa ac faucibus. Morbi id purus a dui gravida gravida. Cras vel ornare magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed eget congue sapien. Nullam vehicula dolor orci, eget finibus purus eleifend id. Ut purus purus, congue quis ipsum pulvinar, commodo condimentum sem. Praesent venenatis nulla nec risus suscipit porttitor sit amet a mauris. Phasellus eget tortor non mi ullamcorper rutrum.

Fusce eget est ut quam semper tempus. In nisi orci, scelerisque tincidunt massa a, lobortis placerat justo. Maecenas id turpis libero. Curabitur eu sollicitudin erat. Vivamus venenatis vitae tortor vitae finibus. Vivamus erat erat, vehicula et euismod eu, molestie vitae neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi congue interdum diam, vitae eleifend turpis semper sed. Curabitur suscipit arcu et metus sodales hendrerit.

Aenean vel purus sem. Donec et viverra nibh. Vivamus pellentesque eros et facilisis aliquet. Nullam vel tempus arcu. Fusce blandit dui est, ut accumsan nulla viverra nec. Sed nec enim vitae justo consectetur tempus. Suspendisse ac magna faucibus nunc dignissim malesuada sit amet sed tellus. Sed nec suscipit purus. Morbi dolor nibh, venenatis at laoreet in, aliquam eu eros. Ut ipsum ligula, facilisis a tristique eu, cursus vel dui. Pellentesque ac placerat velit. Aliquam libero diam, ornare eget bibendum sed, consequat non ligula. Donec id ante bibendum, euismod massa et, eleifend quam. Maecenas mattis orci dui, nec condimentum risus viverra eu. Duis at elit tempor, ullamcorper nulla a, cursus risus. In sit amet accumsan urna.`

let count = 1;
for (let i = 0 ; i <= myLoremText.length ; i++) {
  if(myLoremText[i] == " "){
    count +=1;
  }
}
console.log(count);



//Bonus 2:
/*Create a new variable phraseToCheck and have it contain some string value. 
Write a code that will check if the value we assigned to this variable is a Palindrome.
*/

let phraseToCheck = "Step on no pets!";

let phraseWithoutSpace = "";
for (let i = 0; i < phraseToCheck.length; i++) {
 if(phraseToCheck[i] >= 'A' && phraseToCheck[i] <= 'z'){
  phraseWithoutSpace += phraseToCheck[i].toLowerCase();
 }  
 

}

let reversePhrase = "";
for(let i = phraseWithoutSpace.length-1 ; i >= 0 ; i-- ){
  reversePhrase += phraseWithoutSpace[i]
}


if (phraseWithoutSpace === reversePhrase ){
  console.log(`"${phraseToCheck}" is a Palindrome`);
}else{
  console.log(`"${phraseToCheck}" is not a Palindrome`);
}