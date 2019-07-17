// Names and Input
var hacker1 = "Pancho";
console.log (hacker1);

var hacker2 = prompt("Please enter the navigator's name");
console.log ("The navigator's name is", hacker2);

var hacker1Length = hacker1.length;
var hacker2Length = hacker2.length;
//Conditionals

if (hacker1Length > hacker2Length ){
    console.log ("The Driver has the longest name, it has", hacker1Length, "characters")
  }
    else if (hacker2Length > hacker1Length) {
      console.log ("Yo, navigator got the longest name, it has ", hacker2Length, "characters")
    }
  
  else {
    console.log("wow, you both got equally long names,", hacker1Length, "characters!!")
  }


// Palindrome Checker

var palindromo = prompt("Please enter a palindrome");

var revPal = palindromo.split("").reverse().join("");

/* 
  Intenté usar la función .equals pero no supe que estaba haciendo mal entonces mejor puse un switch

  if(palindromo.equals(revPal) == true) {
    console.log("Palindrome"); 
  } else {
    console.log("Not Pelindrome");
  } 

*/

switch (palindromo) {
  case revPal:
  console.log("its a palindrome");
  break;
  default:
  console.log("not a palindrome");
}


// Lorem ipsum generato 

// Lorem ipsum generator



var loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed finibus quam. Nullam metus nunc, pretium a lectus eu, semper pellentesque nisi. Praesent maximus enim est, et ornare ligula iaculis quis. Phasellus euismod magna dui, ac dictum tortor elementum et. Suspendisse faucibus sapien nec ante eleifend lobortis. Morbi cursus tempor convallis. Donec rutrum erat arcu, at rhoncus dui ultricies eget. Cras a imperdiet velit. \n \n Nam quis eros in enim sagittis consequat. Nunc vitae nulla vitae nisl vestibulum porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam congue gravida leo, posuere condimentum sapien rhoncus eget. Praesent odio lacus, consequat eget rhoncus sed, ullamcorper at felis. Sed euismod, diam vulputate placerat cursus, nunc lectus iaculis augue, a consequat lorem diam a ex. Vestibulum interdum orci purus, eu imperdiet tortor sodales in. Aliquam quis ultricies enim, in lacinia massa. Vivamus rhoncus at erat ac ornare. Maecenas turpis lorem, feugiat sed turpis at, tincidunt rutrum dolor. Curabitur non dapibus metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas lectus lorem, euismod quis commodo at, elementum et elit. \n \n Sed ultricies, diam eget rutrum pharetra, nunc erat tempus orci, eu vulputate lorem ipsum a est. Fusce eget orci facilisis, placerat tellus a, mollis arcu. Morbi rutrum malesuada felis, eu sodales purus congue in. Donec et est ut mi fermentum sodales. Quisque lobortis at eros ac posuere. Donec accumsan mi sed tellus aliquam interdum. Pellentesque ac mauris imperdiet, varius libero ut, euismod libero. Integer ut sapien volutpat, bibendum tellus quis, rutrum metus. Quisque quis enim bibendum, bibendum ante ac, consectetur enim. In tincidunt, enim a tincidunt vestibulum, ligula nibh efficitur neque, non consequat lectus libero ac velit. Ut suscipit eros sed tellus pharetra faucibus."


var wordsInTheString = loremIpsum.split(" ").length;
var paragraphsInTheString = 1 + (loremIpsum.match(/ \n /g) || []).length;;
var words = wordsInTheString - (paragraphsInTheString - 1) * 2
var count = (loremIpsum.match(/ et /g) || []).length;


if (confirm('want to create a 3 paragraph lorem ipsum?')) {
    console.log('\n', loremIpsum);
    console.log('\n','\n',"Generated", paragraphsInTheString,  "paragraphs,", words, "words, 2002 bytes of Lorem Ipsum");
    console.log('\n', "latin word et appears", count, "times")
} else {
    console.log("bye bye")
}