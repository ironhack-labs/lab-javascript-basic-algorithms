// Names and Input
var hacker1 = "Marie";
console.log("The dirver's name is " + hacker1);

var hacker2 = "Ghaith";
console.log("The navigator's name is " + hacker2);

//Conditionals
var driverSize = hacker1.length;
var navigatorSize = hacker2.length;

if (driverSize > navigatorSize){
  console.log("the navigator's name has the longest name, it has " + driverSize + " characters.");
} else if (navigatorSize > driverSize){
  console.log("Yo, navigator has the longest name, it has " + navigatorSize + " characters.");
} else {
  console.log("wow you both equally long names" + driverSize + " characters!!");
}


var hacker1Maj = hacker1.toUpperCase();

var driverLetter = "";
for (var i=0; i<driverSize-1 ; i++){
  driverLetter += hacker1Maj[i];
  driverLetter += " ";
}
console.log(driverLetter + hacker1Maj[hacker1Maj.length-1]);

var navigatorLetter = "";
for (var i = navigatorSize-1; i >= 0; i--){
  navigatorLetter += hacker2[i];
}
console.log(navigatorLetter);

/*
var drivUnicode = hacker1.charCodeAt(0);
var navigUnicode = hacker2.charCodeAt(0);
if (drivUnicode < navigUnicode){
  console.log("The driver's name goes first");
} else if (navigUnicode < drivUnicode ){
  console.log("Yo, the navigator goes first definitely !")
} else {
  console.log("What?! You both got the same name?");
} */

var compare = hacker1.localeCompare(hacker2);
if (compare > 0){
  console.log("Yo, the navigator goes first definitely !")
} else if (compare < 0) {
  console.log("The driver's name goes first");
} else {
  console.log("What?! You both got the same name?");
}

//BONUS[
var input1 = prompt("Please enter a string");
var input = input1.toLowerCase();
var inputNew = "";
for (var i=0 ; i<= input.length-1 ; i++){
  if (input[i] !== " " && input[i] !== "," && input[i] !== "?" && input[i] !== "!" && input[i] !== ":" && input[i] !== ";"){
    inputNew += input[i];
  }
}

var inputNewReverse ="";
for (var i= inputNew.length-1; i>=0; i--){
  inputNewReverse += inputNew[i];
}

if (inputNew === inputNewReverse){
  console.log("This is a palindrome");
} else {
  console.log("This is not a palindrome");
}


//Ex10
var latinText =
"Aenean vehicula enim a blandit consequat. Mauris ex neque, fringilla vel pretium et, scelerisque ut nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent interdum commodo odio, quis consectetur enim interdum nec. Nam eget sagittis felis. Fusce pretium tincidunt lectus ac varius. Aenean pharetra eros ut diam facilisis, non iaculis leo gravida. In dui felis, semper vitae orci nec, fermentum molestie augue. Nunc non massa nisi. Etiam eget volutpat ipsum. Duis nisi sapien, pulvinar ac porttitor eget, interdum quis mi. Vivamus commodo eleifend pellentesque. Suspendisse nec ligula sapien. Nulla facilisi. Proin dapibus augue in sodales porta. Maecenas luctus non mauris ut tincidunt. Vestibulum eget mauris quis enim finibus fermentum.\
Morbi lectus sapien, gravida faucibus iaculis in, rhoncus ac dui. Curabitur ultrices ullamcorper felis vitae fermentum. Proin eget nunc sed orci ultrices sodales. In id sapien suscipit, ultricies nunc id, sodales risus. In eget elit ultricies, cursus dolor non, tincidunt turpis. Quisque malesuada libero velit, non porta orci rutrum aliquet. Curabitur luctus enim vitae aliquet vulputate. Aliquam eu dignissim ipsum. Nulla vel est vitae orci aliquet finibus eget at magna. Donec molestie mauris vitae augue laoreet, a viverra risus bibendum. Ut id ipsum efficitur, elementum enim in, fringilla orci. Quisque viverra mauris vel dolor blandit, vehicula aliquam velit volutpat. Vivamus sed mollis augue.\
Donec ornare felis et fringilla condimentum. Suspendisse potenti. In sed vestibulum orci. Ut vitae porta diam, pulvinar vehicula orci. Nullam auctor libero id justo tempor, at tristique nisl posuere. Duis dictum risus et fermentum malesuada. Praesent non nulla risus. In consectetur aliquet ex, ac blandit erat imperdiet vitae. Aenean congue posuere ligula, at feugiat tortor varius nec. Nullam id erat odio. Donec eget nisi dapibus, bibendum odio ut, aliquam nisl. In nec dui odio. Vivamus dictum nec nibh eget aliquam. Integer facilisis mauris orci, nec hendrerit lorem fringilla et. Quisque dignissim vestibulum leo, vel rutrum sem."

var occ = 0;
for (var i= 0; i<= latinText.length; i++){
  if (latinText[i]=== " " || latinText[i]=== "\\" ){
    occ++;
  }
}

//Because the last word doesn't have a space.
occ+= 1;

console.log("This text contains " + occ + " words.")

var occEt =0;
var latinText1 = latinText.toLowerCase();
for ( var i=0; i< latinText1.length; i++){
  if (latinText1[i] === "e" && latinText1[i+1] === "t" && (latinText1[i+2] === " " || latinText1[i+2] === "." || latinText1[i+2] === ",") && latinText1[i-1] === " "){
    occEt++;
  }
}

console.log("This text contains " + occEt + " 'et' words.");


// Lorem ipsum generator
