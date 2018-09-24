// Names and Input

var hacker1 = 'Elsa'

console.log("The drivers name is " + hacker1);

var hacker2 = prompt('What is the navigators name?');

//Conditionals

function insertSpace(hacker1toUppercase) {
    var hacker1toUppercase = hacker1.toUpperCase();
    var separatedName = hacker1toUppercase.split("").join(" ");
    console.log(separatedName);
    return separatedName;
}
insertSpace(hacker2);

function reverseName(splitHacker){
    var splitHacker = hacker1.split("");
    var reverseArray = splitHacker.reverse();
    var joinArray = reverseArray.join("");
    console.log(joinArray);
    return joinArray;
}
reverseName(hacker2);

// Lorem ipsum generator

function compareNames (a,b) {
    var a= a.toUpperCase();
    var b = b.toUpperCase();
    if(a< b) {
        console.log("The driver's name goes first.");
      } else if (b < a) {
        console.log('Yo, the navigator goes first definitely.');
      } else {
        console.log("What?! You both got the same name.");
      }
};
compareNames(hacker1,hacker2);



var message = prompt('Insert string and check if Palindrome!');
message = message.replace(/[^a-zA-Z 0-9]+/g,'');
message = message.split('');
var cleanString = message.filter(function(letter){
  return letter !== ' ';
});
if(cleanString.join() !== cleanString.reverse().join()){
      console.log('not a palindrome')
} else {
      console.log('palindrome')
}
