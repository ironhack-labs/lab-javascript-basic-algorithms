//Names and Input

var hacker1 = "Jules";
var hacker2 = promt("What's your name ?"); 

// console.log("The driver is " + hacker1 + ".");
// console.log("The navigator is " + hacker2 + ".");

if (hacker1.length > hacker2.length) {
  console.log("The Driver has the longest name, it has "+ hacker1.length  +" characters.");
} else if (hacker2.length > hacker1.length) {
  console.log("Yo, navigator got the longest name, it has " + hacker2.length + "  characters");
} else {
  console.log("wow, you both got equally long names, " + hacker1.length + " characters!!");
}

var nameUpper = hacker1.toUpperCase();
var nameSpace = "";
var nameReverse = "";
console.log(nameUpper[0] + " " + nameUpper[1] + " " + nameUpper[2] + " " + nameUpper[3] + " " + nameUpper[4]);

console.log(nameUpper[4] + " " + nameUpper[3] + " " + nameUpper[2] + " " + nameUpper[1] + " " + nameUpper[0]);

for (var i = 0; i < nameUpper.length; i++) {
  nameSpace += nameUpper[i] + " ";
}
  console.log(nameSpace);

for (var i = hacker1.length - 1; i >= 0; i--) {
  nameReverse += hacker1[i];
}
  console.log(nameReverse);


if (hacker1[0] < hacker2[0]) {
  console.log("The driver's " + hacker1 + " goes first.");

} else if (hacker1[0] > hacker2[0]) {
  console.log("Yo, the navigator goes first definitely");
} else if (hacker1 === hacker2) {
  console.log("What?! You both got the same name?");
} else {
  console.log("Your two names start with the same letter.")
};

 
var name = "Lava l";
var nameLowerCase = name.toLowerCase();
var nameNormal = "";
var nameRev = "";
var nameComp = "";
var regex = / /gi;


 for (var i = 0; i < nameLowerCase.length; i++) {
   nameNormal += nameLowerCase[i];
 }

 for (var i = nameLowerCase.length - 1; i >= 0; i--) {
  nameRev += nameLowerCase[i];
}

if (nameNormal.replace(regex,'') === nameRev.replace(regex,'')) {
  console.log("It's a palindrome !!");
} else {
  console.log("It's not a palindrome...");
};








//Conditionals


// Lorem ipsum generator


var latin = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla metus ligula, condimentum sed ligula tristique, imperdiet lobortis libero. Donec massa neque, gravida ut rhoncus ut, mattis in massa. Nunc ut augue dictum, elementum lorem eu, efficitur ex. Phasellus vitae lacus id libero efficitur mollis in et nisi. Suspendisse hendrerit, risus a ultrices mollis, sem velit lacinia augue, eget luctus dolor eros in tellus. Phasellus libero purus, sagittis vel semper sed, semper vitae est. Donec ac ultrices nunc. Sed dolor metus, varius nec lorem vitae, placerat mollis enim. Curabitur dapibus magna sed nunc feugiat finibus. Quisque elementum nunc a odio pulvinar ornare. Sed mattis tristique molestie. Pellentesque lobortis rhoncus dolor, nec varius lacus aliquet id. Maecenas ac eleifend lacus. Donec vulputate convallis ornare. Pellentesque porttitor, enim eu interdum ullamcorper, risus sem pretium nunc, sed dictum ante diam vel ante. Nam eu fringilla dui, et volutpat libero. Fusce tristique nisi quis justo pulvinar, at vestibulum neque tincidunt. Duis metus est, fringilla vel commodo eu, facilisis quis nibh.Pellentesque lacinia, nibh sit amet convallis egestas, turpis libero blandit ex, at placerat magna nulla eget tortor. Sed egestas, risus sit amet pretium maximus, mi nunc dapibus lectus, in dignissim elit risus sagittis nisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec scelerisque placerat arcu, nec efficitur arcu ultrices eu. Nam maximus, leo eu porttitor luctus, tortor augue facilisis ante, sit amet scelerisque odio ante at metus. Nam consectetur non diam luctus hendrerit. Nullam non iaculis urna, non consectetur quam. Duis vitae consequat turpis. Quisque sed nibh enim. Donec sed ultricies purus. Pellentesque tincidunt elit justo, a congue lacus auctor et. Quisque nec elit rutrum, facilisis urna posuere, malesuada sapien. Fusce faucibus varius urna, et iaculis ipsum vehicula id."


var words = latin.split;

consloe.log(words.length);
