console.log("I'm ready!");

//Iteration 1

//1.1
let hacker1 = "Lucia";

//1.2
console.log(`The driver's name is ${hacker1}`);

//1.3
let hacker2 = "Sarah";

//1.4
console.log(`The navigator's name is ${hacker2}`);


//Iteration 2

//2.1
if(hacker1.length>hacker2.length){
console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker2.length>hacker1.length){
console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
};

//Iteration 3

//3.1
let str = "";

for (let i = 0; i<hacker1.length; i++) {
 str += hacker1[i].toUpperCase() + " " ;
};
console.log(str);

//3.2 (why 'undefined' before name??)
let str2 = "";
for (let i = hacker2.length--; i>=0; i--) {
 str2 += hacker2[i] + " ";
};
console.log(str2);

//3.3
if(hacker1.charAt(0)<hacker2.charAt(0)) {
console.log("The driver's name goes first.")
} else if (hacker2.charAt(0)<hacker1.charAt(0)) {
console.log("Yo, the navigator goes first definitely.")
} else {
console.log("What?! You both have the same name?")
};

//Bonus 1

let string = "Lorem ipsum dolor sit amet, consectetur."

   //number of words in string

let str8 = ""
for(let i = 0; i<string.length; i++) {
  if (string[i]===" ") {
    str8 += 1 
  }
};
console.log(str8);





   //how often appears 'et'
console.log(string.includes("et"));



//Bonus 2

let phraseToCheck = "amor roma";

console.log(phraseToCheck.length);

let firstPart = phraseToCheck.slice(0,4)
console.log(firstPart);

let secondPart = phraseToCheck.slice(-4);
console.log(secondPart);

   //write second part backwards

let str3 = ""
for (let i = secondPart.length--; i>=0; i--){
  str3 += secondPart[i]; 
}

console.log(str3);//why 'undefined' before string??

if(phraseToCheck.slice(0,4)===str3) {
  console.log("This variable is a Palindrome.")
} else {
  console.log("This variable is not a Palindrome.")
}


