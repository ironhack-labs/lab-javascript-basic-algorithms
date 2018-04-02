function backward (string){
  var answer = "";
  for (var i = string.length - 1; i >= 0; i--){
    answer += string[i];
  }
  return answer;
}


var hacker1 = "Daniel";

console.log("The driver's name is " + hacker1);

var hacker2 = prompt("Navigator's name:");

console.log("The navigator's name is " + hacker2);

if (hacker1.length > hacker2.length) 
  console.log("The Driver has the longest name, it has " + hacker1.length + " characters");
  
else if (hacker1.length < hacker2.length)
  console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters");
  
else 
  console.log("wow, you both got equally long names, " + hacker1.length + " characters!!");
  
var separatedChars = "";
for (var i = 0; i < hacker1.length; i++){
  separatedChars += hacker1[i].toUpperCase() + " ";
}
console.log(separatedChars);

var reversedChars = backward(hacker2);

console.log(reversedChars);

var lexiNames = [hacker2, hacker1].sort();

if (hacker1 === hacker2)
  console.log("What?! You both got the same name?");

else if (hacker2 === lexiNames[0])
  console.log("Yo, the navigator goes first definitely");
  
else
  console.log("The driver's name goes first");
  
var checkPalindrome = prompt("Enter new string:");

if (checkPalindrome === backward(checkPalindrome))
  console.log("Palindrome!!!");
else
console.log("Not Palindrom :(");

var lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris convallis diam erat, ut faucibus ante placerat vitae. Donec tellus nisi, sodales ac velit in, imperdiet gravida velit. Etiam semper eget risus quis pharetra. Nulla in enim in risus tincidunt vulputate. Donec cursus dictum quam cursus laoreet. Pellentesque ipsum sem, vestibulum eu dignissim porta, tincidunt vel orci. Nam eu sollicitudin tellus, vitae dictum ante. Pellentesque eros nunc, interdum a lorem at, pharetra aliquam erat. Maecenas facilisis purus ut est dignissim, at dapibus nibh porttitor. Suspendisse ut feugiat orci. Proin nec nibh vel justo bibendum varius. Nulla fermentum quam sed augue convallis tristique eu eget metus. Pellentesque lobortis, velit non ornare consectetur, nisi sem euismod quam, vitae lacinia ante urna fringilla diam. Nam ullamcorper porta dui id vulputate. Morbi accumsan turpis lectus, in pellentesque justo blandit et. Praesent condimentum commodo nisi, et consequat orci dictum ullamcorper. Donec dapibus erat ut augue pulvinar, sed tristique diam pharetra. Fusce vitae consectetur sem. Etiam cursus ligula non turpis pellentesque porttitor. Quisque id erat sollicitudin, viverra libero a, faucibus odio. Vivamus malesuada metus ipsum, in porttitor mi egestas eget. Suspendisse lacinia pretium mi, nec molestie arcu semper nec. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus pretium enim eget dictum fermentum. Sed tristique, metus non facilisis pretium, arcu quam viverra risus, ac porttitor augue ante sed ex. Proin id fringilla velit. Vivamus bibendum nibh quis risus porttitor dapibus. In dictum iaculis mauris".split(" ");

var wordCount = lorem.length;
var countEt = 0;

console.log(lorem[2]);

for (var i = 0; i < lorem.length; i++){
  switch (lorem[i]){
    case "et":
    case "et,":
    case "et.":
      countEt++;
  }
}

console.log(wordCount);
console.log(countEt);


  
  
  

