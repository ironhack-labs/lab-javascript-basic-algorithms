// Iteration 1: Names and Input
// 
let hacker1 = "David";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Johny";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`); 
}
else if(hacker1.length === hacker2.length){
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters`); 
}
else{
    console.log(`It seems that the navigator has the longest name, it has ${hacker1.length} characters`); 
}


// Iteration 3: Loops
// 3.1
let output1 = "";
for (let i = 0; i < hacker1.length; i++){
    output1 += hacker1[i].toUpperCase() + " ";
}
console.log(output1);
// 3.2
let output2 = "";
for (let i = hacker2.length - 1; i >= 0; i--){
    output2 += hacker2[i];
}
console.log(output2);
// 3.3
//using if
if(hacker1.localeCompare(hacker2) === 1){
    console.log("The driver's name goes first.");
} 
else if(hacker1.localeCompare(hacker2) === -1){
    console.log("Yo, the navigator goes first definitely.");
} 
else{
    console.log("What?! You both have the same name?");
} 
//using switch
switch(hacker1.localeCompare(hacker2)) {
    case 1:
        console.log("The driver's name goes first.");
      break;
    case -1:
        console.log("Yo, the navigator goes first definitely.");
      break;
    default:
        console.log("What?! You both have the same name?");
  }

  
// Bonus 1
let loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur interdum neque ac risus bibendum, nec consequat justo elementum. Morbi pulvinar velit a tincidunt dapibus. Donec feugiat libero id lacus accumsan, ut egestas enim porttitor. Etiam ornare tortor ut ultricies tempor. Pellentesque a faucibus purus. Vivamus luctus eros neque, in varius purus blandit ut. Cras quis augue sed mauris convallis vehicula. Duis laoreet, ipsum quis gravida laoreet, diam elit dapibus eros, eu suscipit odio quam tincidunt turpis. Sed eget efficitur quam. Vestibulum vitae vestibulum nulla. Donec placerat ac est nec dictum. Suspendisse sed nibh a felis finibus sodales. Aliquam nec mauris nulla. Nullam neque mauris, luctus sit amet porttitor at, rutrum sit amet dui. Nam id sapien a urna tempus convallis. Fusce ultricies eu elit et volutpat. Nam laoreet justo elit, quis tempus felis tempus nec. Maecenas eget lorem ac dolor pharetra commodo sed ut ligula. Aliquam tristique fringilla diam a consequat. Ut libero nisl, pellentesque sit amet ante eu, consectetur dictum nulla. Morbi in mauris sed magna luctus ultricies quis at augue. Aliquam ut scelerisque est, a tincidunt lectus. Mauris mollis iaculis lacus. Pellentesque finibus odio at sem dictum hendrerit. Aliquam vel viverra tortor. Curabitur nisi sem, lobortis sed enim a, tincidunt fermentum massa. Nam id rhoncus mauris, ut lobortis velit. Nullam ullamcorper convallis tellus, in maximus dolor elementum nec.`

let countSpaces = 0;
for( let i = 0; i < loremIpsum.length; i++){
    if(loremIpsum[i] === " "){countSpaces++;}
} 
console.log(countSpaces + 1);

let countEt = 0;
for( let i = 0; i < loremIpsum.length; i++){
    if(loremIpsum[i] === "e" && loremIpsum[i+1] === "t" && loremIpsum[i-1] === " " && loremIpsum[i+2] === " "){countEt++;}

} 
console.log(countEt);

// Bonus 2
let palindrome = "Taco cat";
let palindromeWithoutSpaces = "";
let opposite = "";
for (let i = palindrome.length - 1; i >= 0; i--){
    if(palindrome[i]!==" "){opposite += palindrome[i].toLowerCase();}
}
for (let i = 0; i < palindrome.length; i++){
    if(palindrome[i]!==" "){palindromeWithoutSpaces += palindrome[i].toLowerCase();}
}
console.log(opposite);
console.log(palindromeWithoutSpaces);
if(opposite === palindromeWithoutSpaces){console.log(`The string ${palindrome} is Palindrome!`);}

