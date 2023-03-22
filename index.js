// Iteration 1: Names and Input

console.log("I'm ready!");

let hacker1 = "Elton";
console.log ("The driver´s name is " + hacker1);
             
let hacker2 = "Miranda";
console.log (`The navigator´s name is ${hacker2}`);

let countLettersHacker1 = hacker1.length;
console.log (countLettersHacker1);
let countLettersHacker2 = hacker2.length;
console.log (countLettersHacker2);

// Iteration 2: Conditionals

if (countLettersHacker1 > countLettersHacker2) {
    console.log (`The driver has the longest name, it has  ${countLettersHacker1} characters.`);}
  
else {console.log (`The navigator has the longest name, it has ${countLettersHacker2} characters.`);}

let capitalLetters = hacker1.toUpperCase();
console.log (capitalLetters);

function addSpaceBetween (str) {
  return str.split (''). join (' ')
} 
console.log (addSpaceBetween(hacker1));
console.log (addSpaceBetween(hacker2));

function reverseLetters (str) {
  return str.split(''). reverse(). 
  join("")
}

console.log (reverseLetters(hacker1));
console.log (reverseLetters(hacker2));


// Iteration 3: Loops


let result = hacker1.localeCompare(hacker2)

if (result == -1) {
  console.log ("The driver's name goes first.")
}

else if (result == 1) {
  console.log ("Yo, the navigator goes first, definitely.")
}

else {
  console.log ("What?! You both have the same name?")
}

console.log (result);

// Bonus 1:

let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce luctus, tortor at aliquam faucibus, turpis mi pharetra quam, vitae vestibulum leo nisi id diam. Maecenas vulputate enim ante, id lobortis urna eleifend ac. Fusce ex sem, molestie id tempor rhoncus, iaculis sit amet massa. Donec vel porta sem. Integer et ultricies risus, id scelerisque sem. Quisque consequat, purus et gravida elementum, nisl est feugiat libero, viverra accumsan felis mauris at risus. Donec nec eros augue. Phasellus molestie auctor pharetra. Mauris in sem rutrum, condimentum turpis non, fringilla orci. In hac habitasse platea dictumst.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi vel bibendum turpis. Maecenas purus ipsum, gravida eget purus et, tempor consequat purus. Sed vestibulum imperdiet ex quis malesuada. Mauris faucibus sit amet quam id ornare. Integer varius orci ut justo lobortis, ut ullamcorper urna ultricies. Aliquam at ipsum vel felis mattis blandit ut eget nibh. Duis luctus bibendum orci, ac semper ipsum malesuada sed. Vivamus dignissim convallis viverra. Ut tristique ipsum in neque volutpat blandit. Quisque at sem rutrum, malesuada magna rutrum, facilisis risus. Sed porttitor, ipsum sed efficitur varius, justo ex imperdiet tortor, vitae semper tortor magna quis tortor. In iaculis mollis mi, eu euismod nibh dignissim a. Aenean blandit, urna a suscipit laoreet, lorem odio iaculis nunc, a tincidunt lectus velit id tellus. Etiam aliquam nibh a velit ultrices, at tristique nibh vehicula. Suspendisse tincidunt volutpat vulputate. Fusce in dolor quis nunc facilisis sollicitudin eu nec urna. Aenean id dignissim tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."


function getCount(str) {
return str.split(' ') .length
}

getCount(longText);
console.log (getCount(longText)); 

let longTextWords = longText.split(" ");

let countWordEt = 0

for (let i = 0; i <= longTextWords.length; i++) {
  if (longTextWords[i] == "et") {
    countWordEt++
  }
}

console.log (countWordEt);


