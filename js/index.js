// Iteration 1: Names and Input
/*1.1 Create a variable `hacker1` with the driver's name.

1.2 Print `"The driver's name is XXXX"`.

1.3 Create a variable `hacker2` with the navigator's name.

1.4 Print `"The navigator's name is YYYY"`.*/

let hacker1="Marco";
let hacker2="Marco";

console.log(`The driver name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals
/*
 Depending on which name is longer, print:
- The driver has the longest name, it has XX characters. or
- It seems that the navigator has the longest name, it has XX characters. or
- Wow, you both have equally long names, XX characters!.
*/
if (hacker1.length>hacker2.length){
  console.log("The driver has the longest name, it has "+hacker1.length+" characters")
} else if (hacker1.length<hacker2.length){
  console.log("It seems that the navigator has the longest name, it has "+hacker2.length+" characters");
} else {
  console.log("Wow, you both have equally long names, "+hacker1.length+" characters")
}
// Iteration 3: Loops
/*
Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
*/
let finalName1="";
for (let i=0; i<hacker1.length; i++){
  finalName1+=" "+hacker1[i].toUpperCase();
}
console.log(finalName1);
/*
3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
*/
let finalName2="";
for (let i=hacker2.length-1; i>=0; i--){
  finalName2+=" "+hacker2[i].toUpperCase();
}
console.log(finalName2);

/*
3.3 Depending on the lexicographic order of the strings, print:
- The driver's name goes first.
- Yo, the navigator goes first definitely.
- What?! You both have the same name?
*/

//First easiest way to me
let result= "";
let length;
let length1= hacker1.length;
let length2= hacker2.length;
length1>length2 ? length=hacker1.length : length=hacker2.length;

for (i=0; i<length; i++){
  if (result==0){
    if (hacker1[i]<hacker2[i]){
      result=1;
  } else if (hacker1[i]>hacker2[i]){
      result=2;
    }else {
      result=0;
    }
  }
}
switch (result){
  case 1:
    console.log("The driver's name goes first.");
    break;
  case 2:
    console.log("Yo, the navigator goes first definitely.")
    break;
  case 0:
    console.log("What?! You both have the same name?");
    break;
}

/*
Go to lorem ipsum generator and:

Generate 3 paragraphs. Store the text in a variable type of string.
Make your program count the number of words in the string.
Make your program count the number of times the Latin word et appears.
*/

let string = `Maecenas quis quam lacus. Duis semper ligula ut massa lobortis imperdiet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam sodales ipsum id turpis vehicula cursus. Aenean tempor felis nec lectus hendrerit fringilla. Sed interdum et turpis quis pharetra. Nulla sit amet venenatis ex, at pellentesque tellus. In euismod mollis ex, eu commodo ligula. Nunc at vulputate erat. Nam condimentum quam quis convallis ultrices. Donec sodales metus et egestas commodo. Suspendisse sodales in massa eget bibendum. Proin eget sollicitudin massa.

Donec vitae malesuada lorem. Duis vulputate vulputate turpis, sit amet bibendum nulla molestie ac. Cras feugiat tellus vitae nulla gravida, ac feugiat metus sagittis. Suspendisse non justo sed risus interdum vulputate consequat sed elit. Nulla facilisi. Suspendisse suscipit lectus eget dignissim tempus. Fusce cursus leo quam, vel porttitor lectus hendrerit a. Etiam in ligula massa. Nullam eleifend orci sed risus lacinia hendrerit.

Nullam a nibh vitae lectus accumsan dictum nec quis odio. Sed a vestibulum augue, a aliquam lectus. Donec laoreet mi nec urna gravida finibus. In cursus et ante vitae fringilla. Praesent mattis condimentum aliquam. Vivamus venenatis, lectus id commodo interdum, lorem orci gravida nisi, vel efficitur orci lacus quis augue. Aliquam commodo ex mollis odio sollicitudin ultricies. Fusce at lorem purus. Nulla ipsum tellus, suscipit nec ipsum quis, convallis eleifend nulla.`;


let count=0;
for (let i=0; i< string.length; i++){
  if (string[i]==" "){
    count=count+1;
  }
}
count++;
console.log("Paragraph has "+count + " words");

count=0;
for (let i=0; i< string.length; i++){
  if (string[i]=="e"){
    if (string[i-1]==" " && string[i+1]=="t" && string[i+2]==" ") {
      count=count+1;
    }
  }
}
count++;
console.log("Paragraph contains "+count + " word 'et'");

/*
Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome.
*/


let phraseToCheck="Was it a car or a cat I saw";
let toCheckTrimmed="";
let newPhrase="";
for (i=phraseToCheck.length-1; i>0; i--){
  if (phraseToCheck[i]==" "){
    continue;
  }else{
  toCheckTrimmed+=phraseToCheck[i];
  newPhrase+=phraseToCheck[i];
  }
}
if (toCheckTrimmed===newPhrase){
  console.log("It's a palindrome")
}else{
  console.log("It's not a palindrome");
}

