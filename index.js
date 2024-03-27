// Iteration 1: Names and Input

let hacker1 = "Bob";
console.log(hacker1);
let hacker2 = "Sally";
console.log(hacker2);

// Iteration 2: Conditionals

driver = hacker1.length;
navigatorr = hacker2.length;

if (driver > navigatorr){
    console.log(`The driver has the longest name, it has §{driver} characters`)
}else if (driver < navigatorr) {
    console.log(`It seems that the navigator has the longest name, it has ${navigatorr} characters.`)
}else {
    console.log(`Wow, you both have equally long names, ${driver} characters!`)
}

// Iteration 3: Loops

//3.1

let capitalized = "";
for (let i=0;i<driver;i++){
    capitalized += `${hacker1[i].toUpperCase()} `
}
console.log(capitalized.slice(0,capitalized.length-1));

//3.2

let reversed = "";
for (let i = navigatorr - 1; i >= 0; i--) {
    reversed += hacker2[i];
}
console.log(reversed);

//3.3

hacker1.localeCompare(hacker2)

if (hacker1.localeCompare(hacker2)<0){
    console.log("The driver's name goes first.")
}else if (hacker1.localeCompare(hacker2)>0){
    console.log("Yo, the navigator goes first, definitely.")
}else{
    console.log("What?! You both have the same name?")
}

//Bonus 1

longText ="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi."

let wordsCounter=1;
for (let i = 0; i <longText.length; i++) {
    if (longText[i]===" "){
        wordsCounter++;
    }
}

console.log("Number of words: ",wordsCounter);

let etCounter=0;
for (let i = 0; i <longText.length; i++) {
    const checker = longText[i]+longText[i+1]+longText[i+2]+longText[i+3];
    if (checker===" et " || checker===" et."){
        etCounter++;
    }
}
console.log("Number of ets: ",etCounter);


//Bonus 2

let phraseToCheck="tacocat";
let isPalindrome = true;

let counter =0;
for (let i = 0; i<phraseToCheck.length / 2; i++) {
    if (phraseToCheck[i]!==phraseToCheck[phraseToCheck.length-1-i]){
        isPalindrome=false;
        break;
    }
}

if (isPalindrome){
    console.log("It is a palindrome")
}else{
    console.log("It is not a palindrome")
}
