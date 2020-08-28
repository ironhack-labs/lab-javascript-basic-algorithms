// Iteration 1: Names and Input
console.log("I am ready");

// Iteration 2: Conditionals


// Iteration 3: Loops

let hacker1 = "Anita";
console.log("The driver's name is " + hacker1);
let hacker2 = "Moses";
console.log("the navigator's name is " + hacker2);

if (hacker1.length < hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker2.length} characters`);
} else if (hacker1.length === hacker2.length){
console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`);
} else {
  console.log(`It seems that the navigator has the longest name, it has ${hacker1.length} characters`);
}
let hacker1Uppercased = hacker1.toUpperCase()
console.log(hacker1Uppercased);


let result = ""
for (i=0 ; i<hacker1Uppercased.length; i++) {
  result = result + hacker1Uppercased[i]+" "
}

console.log(result)



// Bonus 1

let threeParagraphs = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec justo lorem. Sed in scelerisque risus, at mollis massa. Suspendisse ac magna a ex commodo pellentesque ut vitae dui. Donec non lobortis augue. Mauris aliquam tortor vel lacus facilisis, et semper quam bibendum. Quisque in turpis sapien. Morbi in aliquet urna. Nam ornare lectus ac malesuada convallis. Suspendisse at auctor leo. Donec vitae neque nec urna tempus malesuada non a velit. Phasellus imperdiet scelerisque facilisis. Morbi maximus sapien orci, vel eleifend orci pretium a. Integer placerat pulvinar ornare. Donec erat ante, pretium eget varius sit amet, congue nec quam. Donec felis elit, suscipit id sollicitudin ac, bibendum nec diam. Proin sed gravida ante, sit amet congue sapien. Aenean accumsan lectus eget vestibulum dignissim. Nulla dui ligula, mattis a feugiat et, pretium sit amet nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis nulla ipsum, scelerisque varius diam iaculis, rhoncus pellentesque risus. Quisque ut enim libero. Nullam non nibh lectus. Phasellus nisl orci, dictum at nisl porttitor, ultrices vehicula ex. Aliquam aliquam metus sed gravida imperdiet. Sed eu interdum nibh, sit amet commodo justo. Nunc pellentesque augue efficitur auctor efficitur. Ut lacinia placerat consectetur. Aenean aliquet lacus lacus, feugiat pharetra ante consequat quis. Integer ut ex vitae felis gravida cursus. Nulla facilisi. Nulla facilisi. Mauris sed scelerisque turpis. Nullam eros lectus, accumsan quis pellentesque nec, iaculis id erat.";

function countWords(str){
let counter = 0;
words = str.split(" ");
for(i=0 ; i<words.length ; i++){
  if (words[i] !="")
    counter ++;
}
console.log (`The paragraphs have ${counter} numer of words`);
}

countWords(threeParagraphs);


console.log(`the number of times the Latin word et appears is ${threeParagraphs.indexOf("et")}`);




// Bonus 2
// here I am not sure yet about " " , "," and case sensitive

let phrase1 = "amor roma";

function checkLtoR(phraseToCheck){
for (i=0 ; i<phraseToCheck.length ; i++){
   let result1 = (phraseToCheck[i]);
  console.log(result1);
}   
}


function checkRtoL(phraseToCheck){
for (let i=phraseToCheck.length ; i>=0 ; i--){
   let result2 = (phraseToCheck[i]);
  console.log(result2);
}  
}
 

function CompareResults(phraseToCheck){
if (checkRtoL(phraseToCheck) === checkLtoR(phraseToCheck)) { 
console.log('It is a palindrome!')
}else{
console.log('It is not a palindrome')
}
}

CompareResults(phrase1);