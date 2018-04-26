// Names and Input
var hacker1 = "Adrian";
console.log("The driver's name is " + hacker1);
var hacker2 = prompt("What's the navigator name?");
console.log("The navigator's name is " + hacker2);





// Conditionals
var shortestName = hacker1;

if (hacker1.length > hacker2.length) {
  console.log("The Driver has the longest name, it has " + hacker1.length + " characters");
  shortestName = hacker2;
}
else if (hacker1.length < hacker2.length) {
  console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters");
  shortestName = hacker1;
}
else 
  console.log("wow, you both got equally long names, " + hacker2.length + " characters");





// Loops
var hacker1ModifiedName = "";
var hacker2ModifiedName = "";

for (var i = 0; i < hacker1.length; i++)
  hacker1ModifiedName += hacker1[i].toUpperCase() + " ";

for (var i = hacker2.length; i > 0; i--) 
  hacker2ModifiedName += hacker2[i-1];

console.log(hacker1ModifiedName);
console.log(hacker2ModifiedName);



var orderFound = false;

for (var i = 0; i < shortestName.length && !orderFound; i++) {
  if (hacker1[i] > hacker2[i]) {
    console.log("Yo, the navigator goes first definitely");
    orderFound = true;
  }
  else if (hacker1[i] < hacker2[i]) {
    console.log("The driver's name goes first");
    orderFound = true;
  }
}

//If at this point I dont know which one goes first is because both have the same letters until the shorter is done (e.g. Adria, Adrian, Adriana)
//If the both lengths are the same then the name is also the same. If not the shorter one goes first.
if (!orderFound)
  if (hacker1.length === hacker2.length)
    console.log("What?! You both got the same name?");
  else
    if(hacker1.length > hacker2.length)
      console.log("Yo, the navigator goes first definitely");
    else
      console.log("The driver's name goes first");

 
 
 
 
// Bonus Time!

// I remove every character that is not a letter and I make all the characters lowercase
var possiblePalindrome = prompt("Write something and I'll check if the string is a Palindrome").replace(/[\W_]+/g, '').toLowerCase();
var halfOfTotalCharacters = Math.floor(possiblePalindrome.length / 2);
var isPalindrome = true;

for (var i = 0, j = possiblePalindrome.length - 1; i < halfOfTotalCharacters && isPalindrome; i++, j--)
  if (possiblePalindrome[i] !== possiblePalindrome[j])
    isPalindrome = false;
    
console.log(isPalindrome ? "Si" : "No");



var loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra orci quis mi convallis, convallis auctor lacus malesuada. In varius eros quis turpis pulvinar imperdiet. Suspendisse purus ipsum, interdum quis eleifend fermentum, ullamcorper et lectus. Sed et risus velit. Aenean vulputate tempus dui quis convallis. Ut dictum condimentum nisi, in euismod neque mattis in. Nullam sed leo tempus, ullamcorper eros nec, molestie nunc. Donec laoreet turpis ut est efficitur sollicitudin sed quis quam. Integer finibus, risus eget faucibus posuere, elit risus rutrum sapien, et tincidunt magna ipsum vel mauris. Cras pharetra magna vitae tellus egestas, vel malesuada dui sagittis. Nunc turpis diam, laoreet vitae venenatis eleifend, tincidunt sit amet nisl. Morbi vulputate justo ut sodales pulvinar. Duis pulvinar lacus nisl, id elementum turpis fermentum in. Integer iaculis ligula sit amet sem aliquam efficitur. Nam ornare, nunc eu varius hendrerit, nisl nibh euismod tellus, ac maximus dui nulla ut enim. Fusce nunc velit, porttitor vitae viverra non, rhoncus vel nisl. Sed in erat commodo, porta erat vel, ultricies magna. Mauris auctor metus sed interdum malesuada. Donec consequat ultricies dolor, et blandit nulla luctus ac. Integer congue justo ac lectus aliquet maximus. Morbi volutpat metus sed arcu tempus, vel maximus diam efficitur. Sed vestibulum turpis ornare sollicitudin tempor. Nullam ut est feugiat, viverra ante sit amet, vehicula enim. Morbi consequat dui ante, id condimentum nunc ultrices et. Morbi ultrices, diam at rhoncus tincidunt, ligula turpis malesuada nibh, vitae dictum libero massa vitae nulla. In hac habitasse platea dictumst. Fusce sit amet dui suscipit, sagittis nisl sit amet, venenatis urna. Fusce convallis mattis fringilla. Maecenas fermentum nisi vulputate sem interdum tincidunt. Nulla vel sem quis mauris congue hendrerit. Vestibulum sit amet ipsum vel turpis faucibus ultrices a sit amet metus. Sed scelerisque risus et aliquam congue. Sed varius odio magna, sed sodales nisi efficitur at. Proin vitae egestas diam, ac sagittis risus. Phasellus ut sapien tempor, pulvinar lorem quis, dapibus lectus. Sed vestibulum ex at eros consectetur faucibus laoreet eget massa. Vestibulum lobortis nisl et elit eleifend, quis malesuada arcu tempus.";

var wordCounter = 1;
var etCounter = 0;

for (var i = 0; i < loremIpsum.length; i++) {
  if (loremIpsum[i] === " ") {
    wordCounter++;
    
    if (loremIpsum[i+1] === "e" &&
        loremIpsum[i+2] === "t" &&
       (loremIpsum[i+3] === " " || loremIpsum[i-1] === "." || loremIpsum[i-1] === ","))
        etCounter++;
  }
}

console.log(wordCounter);
console.log(etCounter);