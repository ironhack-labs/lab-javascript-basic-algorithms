// Iteration 1: Names and Input
let hacker1 = "Zefi";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Kateryna";
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals

if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)

} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)

} else {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
}


// Iteration 3: Loops

let capitalizeName = "";
for (let i = 0; i < hacker1.length; i++){
    capitalizeName += hacker1[i].toUpperCase() + " ";
}
console.log(capitalizeName);

let reversedName = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  reversedName += hacker2[i];
}
console.log(reversedName);


if (hacker1.localeCompare(hacker2) < 0){
  console.log("The driver's name goes first.");

} else if (hacker1.localeCompare(hacker2) > 0){
  console.log("Yo, the navigator goes first, definitely.");
} else{
  console.log("What?! You both have the same name?");
}


// Bonus tasks 1.1

let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et orci ut lorem egestas condimentum sit amet laoreet velit. Duis ullamcorper enim condimentum, imperdiet augue eu, molestie tellus. In risus nulla, iaculis id orci ac, suscipit laoreet sapien. Morbi ut nibh mauris. Nam placerat a tortor faucibus semper. Nullam id orci orci. Ut non odio in diam efficitur ultrices. Quisque tristique ex ex, nec ornare purus malesuada eget. Aenean scelerisque enim quis gravida hendrerit. Integer feugiat sem ac augue eleifend, sit amet elementum nisl aliquet. Aliquam faucibus orci quis erat porttitor placerat. Nulla vel orci vestibulum, volutpat enim vel, varius diam. Ut ultricies arcu vel orci egestas ullamcorper. Suspendisse aliquet tincidunt magna, at lobortis sapien venenatis eget. Duis sed vehicula mauris, nec gravida magna. Pellentesque sagittis tempor neque a dictum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin odio nisl, fermentum fermentum odio vitae, feugiat suscipit justo. Quisque iaculis placerat massa, auctor interdum turpis dapibus eu. Phasellus bibendum massa non gravida lacinia. Vestibulum blandit, nunc ut egestas aliquam, est libero eleifend erat, sed feugiat erat felis ut neque. Cras elit sapien, tristique sit amet justo suscipit, euismod dignissim odio. Donec in suscipit arcu. Donec blandit turpis quam, vel pharetra purus faucibus non. Ut id cursus risus, nec dictum magna. Pellentesque aliquam consequat nibh et scelerisque. Donec vestibulum neque ac dui convallis, id mollis ipsum fringilla. Maecenas a dui tempus libero ornare sagittis. Phasellus dictum lectus sit amet rhoncus pharetra. In ac dignissim nulla. Aenean eget pretium felis, in ultricies arcu. Quisque tincidunt id orci vel feugiat. Sed eget dignissim dolor. Morbi eleifend, lorem et commodo viverra, leo orci placerat nisl, sit amet lacinia ligula felis ut metus. Etiam auctor quam orci, ac ornare nisi laoreet a. Nam mi lorem, viverra at est vitae, ornare tincidunt magna. Nullam sed tortor eget purus consectetur facilisis id in lorem. Vestibulum maximus enim eget sapien auctor posuere. Mauris viverra velit quis justo interdum, vel finibus metus finibus."

let numberWords = longText.split(" ");
console.log(`The number of words is ${numberWords.length}`)


// Bonus task 1.2

let count = 0;

for (let i=0; i < longText.length; i++){
    if (longText[i] === "e" && longText[i+1] === "t"){
        count += 1
    } 
}

console.log(count) 

// Bonus task 2

let palindromString = "taco cat";

let palindromNoSpace = "";

for (let i=0; i < palindromString.length; i++){

}



for (let i=0; i < palindromString.length; i++){
    if (palindromString[i] !== " "){
        palindromNoSpace += palindromString[i]
    }
}

let isPalindrome = true;

for (let i = 0; i < palindromNoSpace.length / 2; i++) {
    if (palindromNoSpace[i] === palindromNoSpace[palindromNoSpace.length - 1 - i]) {
        isPalindrome;
    } else {
        isPalindrome = false;
    }
}    
    



if (isPalindrome) {
    console.log(`"${palindromString}" is a palindrome.`);
} else {
    console.log(`"${palindromString}" is NOT a palindrome.`);
}

