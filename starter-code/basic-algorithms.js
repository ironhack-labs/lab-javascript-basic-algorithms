// Names and Input
console.log("I'm Ready!");

var hacker1 = "Fareaha".split('').join(' ');
hacker1 = hacker1.toUpperCase();
console.log("The driver's name is " + hacker1);

var hacker2 = prompt("What is your name?");
var hacker2_1 = hacker2.split('').reverse().join('');
console.log("The navigator's name is " + hacker2_1);


//Conditionals
if (hacker1.length > hacker2.length){
    console.log("The Driver has the longest name, it has " + hacker1.length + " characters");
  } else if (hacker1 < hacker2.length){
    console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters");
  } else {
    console.log("wow, you both got equally long names," + hacker1.length + " chsaracters!!");
  }
  
  if (hacker1[0] < hacker2[0]){
    console.log("The driver's name goes first")
  }else if (hacker2[0] > hacker1[0]){
    console.log("Yo, the navigator goes first definitely")
  } else {
    console.log("What?! You both got the same name?")
  }

  //palindrom
var palindrom = prompt("Is it a palindrome?");
var palindromReverse = palindrom.split("").reverse().join("");

if (palindrom === palindromReverse) {
console.log ("Yeah, It’s a palindrom!");
}else{
 console.log ("Nope, Not a palindrom.");
}


// Lorem ipsum generator
var paraIpsum = "Donec viverra sed velit a eleifend. Maecenas consectetur ullamcorper lacus sit amet consequat. Mauris eu venenatis purus. Mauris mattis nisl elit, nec interdum turpis pharetra a. Proin eu interdum ligula, efficitur rhoncus dolor. Suspendisse ut ante ante. Etiam ut tempus urna. Nulla pellentesque nisi ac quam pretium maximus eget molestie massa. Vivamus at maximus magna. Suspendisse aliquet pharetra lobortis. Nam ac diam tortor./Vestibulum molestie urna hendrerit, aliquam metus sed, dignissim turpis. Proin bibendum ipsum id convallis pretium. Donec placerat magna eget diam varius mollis. Mauris ac mauris a nisi imperdiet maximus. Praesent venenatis euismod porta. Aenean arcu elit, ultrices ac facilisis sit amet, ornare quis purus. Pellentesque vitae orci in dolor tincidunt ornare. In in pellentesque urna. Donec sit amet tellus ullamcorper, fringilla nibh a, sollicitudin sapien. Integer id bibendum urna. Nam nec dui luctus, varius enim a, hendrerit tortor. Nunc vitae tortor nec nunc gravida convallis quis quis lorem./Mauris non fermentum ipsum, in vulputate nisi. In hac habitasse platea dictumst. Sed a euismod velit, vitae sodales nibh. Nunc facilisis purus feugiat ligula cursus, quis ornare justo ultrices. Nullam volutpat, urna sed auctor feugiat, elit nisi rutrum sem, eu sodales massa neque in metus. Vestibulum ac lorem eu turpis sollicitudin maximus eget a purus. Etiam et commodo nulla, at vestibulum metus.";

// Make your program count the number of words in the string
var wordCount = paraIpsum.split(" ");
console.log(wordCount.length);

// Make your program count the number of times the latin word et appears
  var counter = 0;
  for (var i = 0; i < wordCount.length; i++) {
  if (wordCount[i] === "et") {
  counter ++;
  }
}
console.log(counter);

