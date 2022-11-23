// Iteration 1: Names and Input
const hacker1 = "Rumeli";
const hacker2 = "Thalita";
console.log(`The Driver's name is ${hacker1}`);
console.log(`The Navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if(hacker1.length === hacker2.length){
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
} else if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}

//3.1 
let driver = '';
for(let characters of hacker1){
    driver = driver + ' ' + characters
}

console.log(driver.toUpperCase());

//3.2
let navigator = '';
for(let characters of hacker2){
    navigator = characters + navigator
}

console.log(navigator);
//3.3
/*
note: this code is not working properly if we interchange the names.
if(hacker1.localeCompare(hacker2) < 0){
    console.log("the driver's name goes first");
}
else if(hacker2.localeCompare(hacker1) > 0){
    console.log("Yo, the navigator goes first definitely.");
}
else{
    console.log("What?! You both have the same name?");
}

*/
let result = hacker1.localeCompare(hacker2);

if(result < 0){
    console.log("the driver's name goes first"); 
}
else if(result > 0){
    console.log("Yo, the navigator goes first definitely.");
}
else{
    console.log("What?! You both have the same name?");
}

 // Bonus 1
 /*generated a paragraph from lorem ipsum generator with 3 paras.*/ 
 const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ornare, risus quis maximus vestibulum, sem massa elementum urna, in rhoncus tellus massa eu est. Nulla facilisi. Nam lacinia, lacus nec fringilla pellentesque, justo lectus aliquam ipsum, sit amet laoreet purus neque sed risus. Proin eu turpis felis. Praesent sit amet volutpat purus. Curabitur eget leo placerat, venenatis augue vel, interdum lectus. Suspendisse quis convallis mauris. Nullam eget efficitur lectus. Cras pharetra, massa ut maximus tempus, orci purus faucibus ex, in venenatis tortor arcu at lacus. Curabitur sit amet risus faucibus, aliquam massa at, iaculis velit. Ut at fermentum purus, et varius lacus. Aenean tincidunt et nisi nec dignissim. Etiam ut lorem orci. Nullam purus massa, tristique vitae tortor ut, semper posuere purus. Quisque sodales est non libero dignissim efficitur. Nulla sed rhoncus ipsum, a varius orc. Sed libero nisl, molestie at arcu fermentum, mollis molestie nisi. Cras vitae accumsan nibh. Ut vel odio vulputate, varius ex a, convallis nisi. Vestibulum viverra mi non scelerisque malesuada. Duis urna magna, lacinia ac convallis sit amet, venenatis a nunc. Maecenas a dapibus elit. Ut convallis mauris accumsan, varius elit sed, auctor est. Donec consectetur nibh ut quam porttitor scelerisque. Nam vel sapien ultrices odio interdum maximus et quis ante.Ut ex tortor, suscipit sed mattis vitae, auctor a ligula. Fusce tristique et enim ut viverra. Nulla consequat nisl in ipsum molestie cursus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque et feugiat ligula, in ultricies purus. Aliquam ultricies ipsum a tortor bibendum sollicitudin. Quisque augue sem, sagittis eu rutrum nec, pellentesque quis quam."
 
/*creating an array of words */

 const words = text.split(' ');
 console.log(`the total number of words in this paragraph is ${words.length}`);
  let wordcount = 0;
  for(i =0; i< words.length;i++){
   if(words[i]==='et' || words[i]==='et.'){
     wordcount++;
   }
 }
 console.log(`the number of occurences of the word et is : ${wordcount}`);

 //Bonus 2
 str1 = "No 'x' in Nixon";
 palinChk = "";
 // \W is a regular expression to remove all special chars from string
 str1 = str1.replace(/\W/g, ""); 

// creating a reverse string 
 for(let i=str1.length-1;i>=0;i--){
   palinChk += str1[i];
 }
 // checking for palindrome, making sure everything is in lowercase .
 if(palinChk.toLowerCase()===str1.toLowerCase()){
   console.log("Palindrome!")
 }
 else{
   console.log("Not a Palindrome!")
 }
