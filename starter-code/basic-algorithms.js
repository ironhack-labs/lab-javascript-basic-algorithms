var hacker1 = "Parker";
console.log("The driver's name is " ,hacker1)

var hacker2 = "Anghy";
console.log("The navigator's name is " ,hacker2)

var person = prompt("What is the navigator's name?");

if (hacker1.length > hacker2.length) {
  console.log("The driver has the longest name, it has " + hacker1.length + " characters.")
}



var uphacker1 = '';

for (var i = 0; i < hacker1.length; i++) {
  
    uphacker1 += hacker1[i] + " ";
}
console.log(uphacker1.toUpperCase())

var split = hacker1.split("");
var reverse = split.reverse();
var joinHacker1 = reverse.join("");

console.log(joinHacker1)


if (hacker1 === hacker2) {
  console.log("What?! You both got the same name?")
}

for (var i = 0; i < hacker1.length; i++) {
    if(hacker1.charCodeAt(i) > hacker2.charCodeAt(i)) {
     console.log("The driver's name goes first")
     break;
   } else if (hacker1.charCodeAt(i) < hacker2.charCodeAt(i)) {
     console.log("Yo, the navigator goes first definitely")
     break;
   } else {
     continue;
   }
}




var words = prompt("Is it a Palindrome?");
function palindrome(str) {
  string = str.replace(/[^\w\s]|_/g, "").replace(/\s+/g, "").toLowerCase();

  // var tempVar = true;
  // console.log(string)
  //  str = string
  // for (var i = 0; i < str.length; i++) {
  //   if (str[i] !== str[(str.length - 1) - i]) {
  //     tempVar = false
  //   }
  // }
  // if (tempVar) {
  //   console.log("Yes, it is a Palindrome!")
  // } else {
  //   console.log("No, it's not a Palindrome!")
  // }


  // amorroma
  // []





}

palindrome(words)

var paragraphs = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sollicitudin sodales cursus. Vivamus tempus efficitur posuere. Mauris ut libero nunc. Nam bibendum ipsum eu sem facilisis hendrerit. In nunc urna, commodo ut sem vitae, accumsan interdum tellus. Morbi vitae venenatis justo. Praesent suscipit aliquam diam, vitae rhoncus eros luctus eu. Ut iaculis cursus neque id maximus. Nullam sollicitudin eros in dui vehicula tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla fermentum gravida arcu, vel molestie sem vulputate eget. Nullam lacinia metus enim, quis auctor dolor cursus quis. Vivamus non pretium metus. Sed quis auctor nunc.

Aliquam accumsan porttitor sollicitudin. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis euismod tempor eros non rhoncus. Praesent vel accumsan nibh, quis pharetra lectus. Donec at consectetur dui, vel imperdiet magna. Maecenas quis sapien sit amet magna blandit vulputate at at nisi. Suspendisse eleifend erat a ultricies pellentesque. Nullam sed enim eget turpis fermentum maximus. Nulla non purus est. Nulla facilisi. Ut egestas nec arcu eget convallis. Donec porttitor lacus vel consequat commodo. Aliquam turpis quam, laoreet vel ante in, placerat maximus est. Suspendisse mauris velit, gravida ut iaculis euismod, condimentum ac turpis. Praesent aliquam, tellus nec vulputate lobortis, libero nisl consequat urna, ac ultrices eros quam sed lorem. Suspendisse eget massa nisi.

Donec ullamcorper, lacus et venenatis elementum, nisi neque aliquet risus, pellentesque finibus libero purus id nunc. Aliquam luctus, urna non pellentesque vestibulum, massa nulla elementum lectus, nec laoreet metus lorem vitae lacus. Donec vel orci cursus, ultrices urna nec, efficitur nisl. Nam rhoncus fermentum iaculis. Maecenas ut efficitur enim. Suspendisse aliquet ipsum ac nisi consectetur, id mattis purus vulputate. Curabitur semper dui lorem, quis vestibulum nibh tincidunt eget. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed et ante orci. Donec auctor massa ac est dapibus pellentesque. Quisque interdum ultrices ex at gravida. Nam magna turpis, eleifend vitae interdum eu, aliquet ut erat. Ut sit amet faucibus dolor. Cras tincidunt felis orci, id sodales orci iaculis et. Curabitur tristique velit at odio volutpat sodales.
`;

var cleanString = paragraphs.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ");

var words = cleanString.split(" ");
var numberOfWords = words.length;
var counter = 0;

for (var i = 0; i < words.length; i++) {
  if (words[i] === "et") {
    counter++;
  }
}

console.log("number of words", numberOfWords);
console.log("number of times et appears", counter);