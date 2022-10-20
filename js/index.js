// Iteration 1: Names and Input
let hacker1 = "Howl";
console.log(`The driver name is: ${hacker1}`);
let hacker2 = "Debb";
console.log(`The navegator name is: ${hacker2}`);
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}else if (hacker1.length < hacker2.length){
    console.log(`The navegator has the longest name, it has ${hacker2.length} characters.`);
}else{
    console.log(`ow, you both have equally long names, ${hacker2.length} characters!`)
}
// Iteration 3: Loops
console.log(hacker1.toUpperCase().split("").join(" "));
console.log(hacker2.split("").reverse().join(""));

if(hacker1.localeCompare(hacker2)===-1){
console.log("The driver's name goes first.")
}else if (hacker1.localeCompare(hacker2)===1){
    console.log("Yo, the navigator goes first definitely.")
}else{
    console.log("What?! You both have the same name?")
};


//Bonus1
let loremIpsum=`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent egestas placerat nulla, et finibus nisl eleifend mollis. Nullam at velit elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc turpis neque, dapibus vel scelerisque eu, maximus eget felis. In nec libero quis diam pretium faucibus. Mauris arcu velit, ornare id lacus elementum, molestie egestas metus. Proin nec lobortis enim. Quisque ultricies eleifend velit, quis accumsan odio mollis in. Etiam mattis venenatis urna nec facilisis. Quisque mauris odio, sollicitudin eget tristique viverra, vehicula nec odio.

Integer cursus turpis nisl, et laoreet mauris sodales sit amet. Sed rhoncus varius turpis volutpat cursus. Nam auctor, diam eget pharetra ultricies, leo quam sagittis urna, dapibus sodales nunc lacus vitae nisi. Ut non elit porttitor justo finibus eleifend. Praesent posuere tincidunt quam, non interdum mauris fermentum et. Donec tortor nisl, ultricies et pharetra sed, elementum vel lacus. Curabitur urna arcu, tincidunt vel faucibus sed, ornare a mauris. Curabitur ante orci, dictum ut nibh at, porttitor consectetur metus.

Mauris imperdiet sodales velit, porttitor commodo quam lacinia id. Nullam maximus sapien nec velit vestibulum, vel porta ligula euismod. Morbi at vulputate lacus. Nullam et orci nisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis cursus viverra blandit. Cras interdum tellus enim, rutrum molestie odio ultricies condimentum. Nulla consectetur porta maximus. Fusce turpis ipsum, vulputate vitae posuere et, gravida vitae lectus. Quisque quis pharetra metus. Proin tincidunt sagittis justo, ut mattis magna fermentum sed.`
loremIpsum= loremIpsum.split(" ")
console.log(loremIpsum)
let etWord=0;
for(let i=0; i<loremIpsum.length; i++){
    //console.log(`this text has ${[i]} words`)
    if(loremIpsum[i]==="et"){
        etWord+=1
   // console.log(`et is ${[i]} times`)
    }
}
console.log("cuantos et hay:", etWord)
    //bonus2
    let phraseToCheck= "taco cat"
    
    if(phraseToCheck.split(" ").join("").split("").reverse().join("")===phraseToCheck.split(" ").join("")){
        console.log(`the phrase "${phraseToCheck}" is a palindrome!!`)
    }else{
        console.log(`the phrase ${phraseToCheck} is not a palindrome :()`)
    }
